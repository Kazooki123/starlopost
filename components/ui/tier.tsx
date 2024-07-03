/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pTDtbtmzRP0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

export default function TierPayment() {
  return (
    <div className="grid gap-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-white">
        StarloPost Premium
      </h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-bold">Starter (Free)</h3>
          <p className="text-muted-foreground">
            Get started with our basic plan.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>30 posts per month</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>2 GB storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>Basics</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button disabled size="sm">
              Your Current Plan
            </Button>
          </div>
        </div>
        <div className="bg-primary rounded-lg p-6 space-y-4 text-primary-foreground border-4 border-red-500 relative">
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
            Most Popular
          </div>
          <h3 className="text-xl font-bold">$5 Pro (Recommended)</h3>
          <p className="text-primary-foreground">
            Our most popular plan for growing businesses.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-primary-foreground" />
              <span>Unlimited posts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-primary-foreground" />
              <span>10 GB storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-primary-foreground" />
              <span>Advance features</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="secondary" size="sm">
              Choose Pro
            </Button>
          </div>
        </div>
        <div className="bg-card rounded-lg p-6 space-y-4">
          <h3 className="text-xl font-bold">$15.99 Deluxe</h3>
          <p className="text-muted-foreground">
            Our premium plan for power users.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>Unlimited posts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>50 GB storage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="w-5 h-5 fill-green-500" />
              <span>Access to Premium-only features</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button size="sm">Choose Deluxe</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
