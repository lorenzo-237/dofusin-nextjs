"use server"

import { headers } from "next/headers"

import { isValidAdminAuthHeader } from "@/lib/admin-auth"
import { recalculateXp } from "@/lib/dofusin-api"

// Server Actions aren't guaranteed to be covered by proxy.ts's matcher (see
// the Next.js authentication guide, already read for this project) — revalidate
// independently rather than trusting the page load's gate. The browser caches
// Basic Auth credentials per-origin once entered, so the same Authorization
// header proxy.ts already checked is present here too.
async function assertAdmin(): Promise<void> {
  const headerList = await headers()
  if (!isValidAdminAuthHeader(headerList.get("authorization"))) {
    throw new Error("Authentification admin requise.")
  }
}

export async function recalculateXpAction(
  characterId: string
): Promise<{ userId: string; xp: number }> {
  await assertAdmin()
  return recalculateXp(characterId)
}
