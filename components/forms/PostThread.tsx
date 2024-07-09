/* eslint-disable import/no-duplicates */
/* eslint-disable @next/next/no-img-element */
"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useOrganization } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { useUploadThing } from '@/lib/uploadthing';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";

interface Props {
  userId: string;
}

function PostThread({ userId }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { organization } = useOrganization();
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const { startUpload, isUploading } = useUploadThing("mediaUpload");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ThreadValidation>>({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: "",
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    try {
      let mediaUrl = null;
      if (mediaFile) {
        const uploadResult = await startUpload([mediaFile]);
        if (uploadResult && uploadResult[0]) {
          mediaUrl = uploadResult[0].fileUrl;
        }
      }

      await createThread({
        text: values.thread,
        author: userId,
        communityId: organization ? organization.id : null,
        path: pathname,
        mediaUrl
      });

      toast({
        title: "Success",
        description: "Your thread has been posted!",
      });

      router.push("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to post thread. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jfif', "video/mp4"];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Error",
          description: "File type not supported. Please use JPEG, PNG, GIF or JFIF",
          variant: "destructive"
        });
        return;
      }

      setMediaFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        className='mt-10 flex flex-col justify-start gap-10'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='thread'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Content
              </FormLabel>
              <FormControl className='no-focus border border-dark-4 bg-dark-3 text-light-1'>
                <Textarea rows={15} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-3">
          <label htmlFor="media-upload" className="cursor-pointer rounded bg-primary-500 px-4 py-2 text-center text-light-1">
            Upload Image/Video
          </label>
          <input
            id="media-upload"
            type="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
            className="hidden"
          />
            {mediaPreview && (
              <div className="mt-2">
                {mediaFile?.type.startsWith('image') ? (
                  <img src={mediaPreview} alt="Preview" className="h-auto max-w-full" />
                ) : (
                  <video src={mediaPreview} controls className="h-auto max-w-full" />
                )}
              </div>
            )}
        </div>

        <Button type='submit' className='bg-primary-500' disabled={isUploading}>
          {isUploading ? "Uploading..." : "Post Thread"}
        </Button>
      </form>
    </Form>
  );
}

export default PostThread;
