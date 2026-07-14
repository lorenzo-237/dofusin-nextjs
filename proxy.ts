import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { isValidAdminAuthHeader } from "@/lib/admin-auth"

// Gates /admin with the same HTTP Basic Auth credentials dofusin-api's
// /admin/api/* routes expect (ADMIN_USERNAME/ADMIN_PASSWORD, kept identical
// across both services — see lib/env.ts). 401 + WWW-Authenticate triggers
// the browser's native login popup, no login page to build.
export function proxy(request: NextRequest): NextResponse {
  if (isValidAdminAuthHeader(request.headers.get("authorization"))) {
    return NextResponse.next()
  }

  return new NextResponse("Authentification admin requise.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="DofusIn admin"' },
  })
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
}
