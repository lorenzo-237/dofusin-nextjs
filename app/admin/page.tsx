import { CharactersTable } from "@/components/admin/characters-table"
import { getAdminCharacters, type AdminCharacter } from "@/lib/dofusin-api"

// Must never be statically prerendered — it reads live account/character
// state from dofusin-api on every visit, and (unlike a Basic-Auth-gated but
// otherwise public page) freezing it at build time would serve one baked
// snapshot to every admin forever instead of the current DB state.
export const dynamic = "force-dynamic"

function groupByServer(
  characters: AdminCharacter[]
): Record<string, AdminCharacter[]> {
  const groups: Record<string, AdminCharacter[]> = {}
  for (const character of characters) {
    ;(groups[character.server] ??= []).push(character)
  }
  return groups
}

export default async function AdminPage() {
  let characters: AdminCharacter[]
  try {
    characters = await getAdminCharacters()
  } catch {
    return (
      <div className="mx-auto max-w-4xl px-6 py-8">
        <h1 className="font-heading text-lg font-bold">DofusIn — admin</h1>
        <p className="mt-2 text-sm text-destructive">
          Erreur de chargement — dofusin-api est-il joignable ?
        </p>
      </div>
    )
  }

  const groups = groupByServer(characters)
  const servers = Object.keys(groups).sort()

  return (
    <div className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="font-heading text-lg font-bold">DofusIn — admin</h1>
      <p className="mt-1 text-[13px] text-muted-foreground">
        {characters.length} personnage(s)
      </p>

      {servers.map((server) => (
        <section key={server} className="mt-7">
          <h2 className="mb-2 font-heading text-sm font-bold text-primary">
            {server}
          </h2>
          <CharactersTable characters={groups[server]} />
        </section>
      ))}
    </div>
  )
}
