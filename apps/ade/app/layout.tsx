import "@/styles/globals.css"

import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"

import { env } from "@/env/server.mjs"
import { ClientActionsRegistry } from "@/registry/client"
import { ActionsRegistryProvider } from "@/registry/provider"
import { TRPCReactProvider } from "@/trpc/react"
import { cookies } from "next/headers"
import SideNav from "./_components/side-nav"
import TopNav from "./_components/top-nav"

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ade.energize.ai"
  ),
  title: "ADE - Energize AI",
  description: "Open Sourced Action Development Environment by Energize AI",
  openGraph: {
    images: [
      new URL(
        `${
          env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://ade.energize.ai"
        }/api/og`
      ),
    ],
    title: "ADE - Energize AI",
    description: "Open Sourced Action Development Environment by Energize AI",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased overflow-y-scroll overflow-x-hidden",
          `${GeistSans.variable} ${GeistMono.variable}`
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <ActionsRegistryProvider clientRegistry={ClientActionsRegistry}>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <ThemeToggle shortcutOnly />
              <TooltipProvider delayDuration={0}>
                <div className="flex flex-col gap-4">
                  <TopNav />
                  <div className="flex flex-row gap-10 mx-auto px-4 max-w-screen-xl w-full pt-2 pb-4">
                    <SideNav />
                    <div className="flex-1 overflow-hidden max-w-full">
                      {children}
                    </div>
                  </div>
                </div>
              </TooltipProvider>
              <Toaster duration={3000} />
            </ThemeProvider>
          </ActionsRegistryProvider>
        </TRPCReactProvider>
      </body>
    </html>
  )
}
