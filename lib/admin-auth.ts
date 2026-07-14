import { timingSafeEqual } from "node:crypto"

import { adminPassword, adminUsername } from "@/lib/env"

// Constant-time comparison — mirrors dofusin-api's
// src/middleware/require-admin-auth.ts (a naive `===` leaks timing info
// about how many leading characters matched).
function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a)
  const bufB = Buffer.from(b)
  if (bufA.length !== bufB.length) return false
  return timingSafeEqual(bufA, bufB)
}

// Shared by proxy.ts (gates page loads) and app/admin/actions.ts (Server
// Actions revalidate independently — a proxy.ts matcher change could
// silently stop covering them, see the Next.js authentication guide).
export function isValidAdminAuthHeader(header: string | null): boolean {
  const encoded = header?.startsWith("Basic ") ? header.slice(6) : undefined
  if (!encoded) return false

  const decoded = Buffer.from(encoded, "base64").toString("utf8")
  const separatorIndex = decoded.indexOf(":")
  if (separatorIndex === -1) return false

  const username = decoded.slice(0, separatorIndex)
  const password = decoded.slice(separatorIndex + 1)
  return (
    safeEqual(username, adminUsername()) && safeEqual(password, adminPassword())
  )
}
