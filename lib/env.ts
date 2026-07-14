// No "server-only" import here on purpose — this module is also imported
// by proxy.ts, which isn't part of the React Server Component graph the
// "server-only" package's bundler guard targets, and marking it caused
// resolution issues there. lib/dofusin-api.ts (Server Components/Actions
// only) carries that guard instead.
//
// Lazy getters (not read at module load) so a deployment that only serves
// the landing page doesn't need these set — only /admin (proxy.ts, Server
// Actions, lib/dofusin-api.ts) actually calls these.
function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Variable d'environnement manquante : ${name}`)
  }
  return value
}

// Must match dofusin-api's ADMIN_USERNAME/ADMIN_PASSWORD exactly — both
// services independently verify Basic Auth against the same credentials
// (see dofusin-page/proxy.ts and dofusin-api/src/middleware/require-admin-auth.ts).
export const adminUsername = (): string => requireEnv("ADMIN_USERNAME")
export const adminPassword = (): string => requireEnv("ADMIN_PASSWORD")

export const dofusinApiUrl = (): string => requireEnv("DOFUSIN_API_URL")
