"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Spinner } from "@/components/ui/spinner"
import { inferActionComponentProps } from "ai-actions"
import { TActionComponentRouter } from "../client"

type Props = inferActionComponentProps<
  TActionComponentRouter,
  "google-moveEmailToTrash"
>

export const GoogleMoveEmailToTrashCard = ({
  args,
  displayState,
  metadata,
  isLoading,
  isSuccess,
  onSubmit,
}: Props) => {
  const messageIds = args ? args.messageIds : []

  if (displayState === "placeholder") {
    messageIds.push("ABC")
    messageIds.push("DEF")
    messageIds.push("GHI")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={metadata.avatar.light} alt="Google logo" />
            <AvatarFallback className="bg-muted" />
          </Avatar>
          Please confirm
        </CardTitle>
        <CardDescription>
          Are you sure you want to delete{" "}
          {messageIds.length > 1
            ? `these ${messageIds.length} emails`
            : "this email"}
          ?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          {messageIds.map((id) => (
            <a
              href={`https://mail.google.com/mail/u/0/#all/${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              key={id}
            >
              Message ID: {id}
            </a>
          ))}
          {displayState === "skeleton" &&
            Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded" />
            ))}
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          disabled={displayState !== "active" || isLoading || isSuccess}
          variant={isSuccess ? "success" : "destructive"}
          onClick={() => {
            if (args) {
              onSubmit(args)
            }
          }}
        >
          {isLoading ? <Spinner /> : null}
          {isSuccess
            ? `Delete email${messageIds.length > 1 ? "s" : ""}`
            : `Email${messageIds.length > 1 ? "s" : ""} deleted!`}
        </Button>
      </CardFooter>
    </Card>
  )
}
