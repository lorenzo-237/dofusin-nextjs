import "server-only"

import { adminPassword, adminUsername, dofusinApiUrl } from "@/lib/env"

// Mirrors the JSON shape returned by dofusin-api's GET /admin/api/characters
// (src/routes/admin.ts) — kept in sync by hand since these are two separate
// repos with no shared types package.
export interface AdminCharacter {
  id: string
  name: string
  server: string
  class: string
  level: number
  userId: string
  username: string
  userXp: number
}

function adminAuthHeader(): string {
  const token = Buffer.from(`${adminUsername()}:${adminPassword()}`).toString(
    "base64"
  )
  return `Basic ${token}`
}

// Thin server-only wrapper around dofusin-api's existing Basic-Auth-gated
// /admin/api/* routes — dofusin-page has no Prisma client of its own on
// purpose (see the plan: duplicating the schema in a 3rd repo for one admin
// page isn't worth it), it just proxies to the API that already has one.
async function fetchAdminApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${dofusinApiUrl()}${path}`, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: adminAuthHeader(),
      "Content-Type": "application/json",
    },
    cache: "no-store",
  })
  if (!response.ok) {
    const message = await response
      .json()
      .then((data: { message?: string }) => data.message)
      .catch(() => undefined)
    throw new Error(message ?? `dofusin-api a répondu ${response.status}.`)
  }
  return (await response.json()) as T
}

export function getAdminCharacters(): Promise<AdminCharacter[]> {
  return fetchAdminApi<AdminCharacter[]>("/admin/api/characters")
}

export function recalculateXp(
  characterId: string
): Promise<{ userId: string; xp: number }> {
  return fetchAdminApi(`/admin/api/characters/${characterId}/recalculate-xp`, {
    method: "POST",
  })
}
