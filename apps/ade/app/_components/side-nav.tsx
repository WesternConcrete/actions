"use client"

import { Button } from "@/components/ui/button"
import { ThemedImage } from "@/components/ui/themed-image"
import { cn } from "@/lib/utils"
import { ActionsRegistry } from "@/registry"
import { TActionId } from "@/registry/_properties/types"
import {
  Fingerprint,
  HandMetalIcon,
  RocketIcon,
  SparklesIcon,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const isActive = (pathname: string, href: string) => {
  return href === "/" ? pathname === href : pathname.startsWith(href)
}

const SideNavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const pathname = usePathname()

  return (
    <Link href={href}>
      <Button
        variant={"ghost"}
        className={cn(
          "w-full justify-start gap-3 -ml-3",
          isActive(pathname, href) &&
            "bg-foreground text-background hover:bg-foreground/80 hover:text-background"
        )}
        size={"sm"}
      >
        {children}
      </Button>
    </Link>
  )
}

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div
      className="flex-none w-[250px] hidden lg:flex flex-col gap-2 sticky top-24 left-0 -ml-3 pl-3 overflow-y-auto"
      style={{
        maxHeight: "calc(100vh - 8rem)",
      }}
    >
      <h1 className="text-sm font-semibold mb-2">Documentation</h1>
      <SideNavLink href={"/"}>
        <HandMetalIcon className="h-4 w-4" />
        Introduction
      </SideNavLink>
      <SideNavLink href={"/getting-started"}>
        <RocketIcon className="h-4 w-4" />
        Getting started
      </SideNavLink>
      <SideNavLink href={"/authentication"}>
        <Fingerprint className="h-4 w-4" />
        Authentication
      </SideNavLink>
      <SideNavLink href={"/contribute"}>
        <SparklesIcon className="h-4 w-4" />
        Contribute
      </SideNavLink>
      <h1 className="text-sm font-semibold my-2">Actions</h1>
      {Object.keys(ActionsRegistry).map((key) => {
        const action = ActionsRegistry[key as TActionId]

        return (
          <SideNavLink href={`/actions/${key}`} key={key}>
            <ThemedImage
              srcLight={action.getMetadata().avatar.light}
              srcDark={action.getMetadata().avatar.dark}
              invert={isActive(pathname, `/actions/${key}`)}
              ImageComponent={
                <img
                  alt={`${key} icon`}
                  src={""}
                  className={cn("text-background h-4 w-4 rounded-sm")}
                />
              }
            />
            <p className="text-ellipsis whitespace-nowrap overflow-x-hidden">
              {action.getMetadata().title}
            </p>
          </SideNavLink>
        )
      })}
    </div>
  )
}
