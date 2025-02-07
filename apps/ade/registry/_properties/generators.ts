import { generateActionRegistryFunctions } from "ai-actions"
import { z } from "zod"
import {
  ActionsRegistryMetadataSchema,
  OAuth2AuthMetadataSchema,
  TokenAuthMetadataSchema,
} from "./metadata"

const { createADEActionsRegistry, createADEAction } =
  generateActionRegistryFunctions({
    namespace: "ADE",
    metadataSchema: ActionsRegistryMetadataSchema,
    actionFunctionExtrasSchema: z.object({
      userData: z.object({
        email: z.string().email(),
        name: z.string(),
      }),
    }),
    oAuthMetadataSchema: OAuth2AuthMetadataSchema,
    tokenAuthMetadataSchema: TokenAuthMetadataSchema,
  })

export { createADEAction, createADEActionsRegistry }
