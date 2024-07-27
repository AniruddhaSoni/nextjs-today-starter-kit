/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PYMmJno7CgT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { MountainSnowIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className={`flex flex-col min-h-[100dvh]`}>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainSnowIcon className="h-6 w-6" />
          <span className="sr-only">NextJS Starter Kit</span>
        </Link>
        <div className="ml-auto flex gap-4 sm:gap-6">
          <div />

          <Link
            href="https://github.com/aniruddhasoni/nextjs-today-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            GitHub
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Jumpstart your Next.js project
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The NextJS Starter Kit provides a solid foundation to build
                    your next web application, with pre-configured state
                    management, theming, and UI components.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={
                      "https://github.com/aniruddhasoni/nextjs-today-starter-kit"
                    }
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Features of the Starter Kit
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The NextJS Starter Kit comes packed with everything you need
                  to build a modern, scalable web application. Explore the key
                  features below.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">State Management</h3>
                <p className="text-sm text-muted-foreground">
                  Recoil.js provides a simple and efficient state management
                  solution, making it easy to manage your application&apos;s
                  state.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Theming</h3>
                <p className="text-sm text-muted-foreground">
                  Easily customize the look and feel of your application with
                  built-in theming support, including dark mode.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">UI Components</h3>
                <p className="text-sm text-muted-foreground">
                  The Shadcn UI library provides a set of high-quality,
                  accessible components to jumpstart your development.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Routing</h3>
                <p className="text-sm text-muted-foreground">
                  Next.js&apos;s built-in file-based routing system makes it
                  easy to create and manage your application&apos;s pages.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  The Starter Kit is optimized for deployment on platforms like
                  Vercel, Netlify, or your own infrastructure.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Developer Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Enjoy a smooth development experience with features like hot
                  module replacement, TypeScript support, and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Get started with the NextJS Starter Kit
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Jumpstart your next web application with this feature-rich
                starter kit, and focus on building your product instead of
                configuring infrastructure.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href={
                  "https://github.com/aniruddhasoni/nextjs-today-starter-kit"
                }
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
