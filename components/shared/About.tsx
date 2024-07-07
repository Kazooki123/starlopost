/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/classnames-order */

import { JSX, SVGProps } from "react";

export default function Abouts() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About StarloPost
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  StarloPost is a modern clone of Threads, design to make users
                  feel and look secure when they are expressing their opinions
                  online. With the help of: Clerk, Uploadthing, MongoDB, Prisma
                  & Vercel We made StarloPost the website it is.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 sm:grid-cols-3 md:gap-12 lg:grid-cols-4">
              <div className="grid gap-1">
                <div className="rounded-lg bg-muted p-4">
                  <CodepenIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold">React</h3>
                <p className="text-sm text-muted-foreground">
                  StarloPost is built using the powerful React TypeScript
                  library, ensuring a responsive and dynamic user interface.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="rounded-lg bg-muted p-4">
                  <WindIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Tailwind CSS</h3>
                <p className="text-sm text-muted-foreground">
                  We leverage the utility-first Tailwind CSS framework to create
                  a visually appealing and consistent design system.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="rounded-lg bg-muted p-4">
                  <CodepenIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Next.js</h3>
                <p className="text-sm text-muted-foreground">
                  StarloPost is built on the Next.js framework, providing
                  server-side rendering, static site generation, and other
                  advanced features.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="rounded-lg bg-muted p-4">
                  <BellIcon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Vercel</h3>
                <p className="text-sm text-muted-foreground">
                  We deploy StarloPost on the Vercel platform, ensuring fast and
                  reliable hosting with seamless integration.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Vision and Purpose
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At the core of StarloPost lies a deep commitment to empowering
                  our users and driving innovation. We believe in creating tools
                  that not only streamline your workflow but also inspire you to
                  push the boundaries of whats possible. Our vision is to be the
                  go-to solution for individuals and teams seeking a seamless,
                  efficient, and transformative digital experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
