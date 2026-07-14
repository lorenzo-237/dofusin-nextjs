"use client"

import * as React from "react"

import { recalculateXpAction } from "@/app/admin/actions"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { AdminCharacter } from "@/lib/dofusin-api"

interface CharactersTableProps {
  characters: AdminCharacter[]
}

// xp lives on the account (userId), not the character — recalculating one
// character's row updates every row sharing that userId, same as the old
// hand-rolled admin page's data-xp-for query-all behavior.
export function CharactersTable({ characters }: CharactersTableProps) {
  const [xpByUserId, setXpByUserId] = React.useState<Record<string, number>>({})
  const [pendingId, setPendingId] = React.useState<string | null>(null)

  async function handleRecalculate(character: AdminCharacter) {
    setPendingId(character.id)
    try {
      const result = await recalculateXpAction(character.id)
      setXpByUserId((prev) => ({ ...prev, [result.userId]: result.xp }))
    } catch {
      // Best-effort — leave xp as-is, the button just re-enables below.
    } finally {
      setPendingId(null)
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Personnage</TableHead>
          <TableHead>Classe</TableHead>
          <TableHead>Niveau</TableHead>
          <TableHead>Compte</TableHead>
          <TableHead>XP</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>
      <TableBody>
        {characters.map((character) => (
          <TableRow key={character.id}>
            <TableCell className="font-medium">{character.name}</TableCell>
            <TableCell>{character.class}</TableCell>
            <TableCell>{character.level}</TableCell>
            <TableCell>{character.username}</TableCell>
            <TableCell>
              {xpByUserId[character.userId] ?? character.userXp}
            </TableCell>
            <TableCell>
              <Button
                variant="outline"
                size="sm"
                disabled={pendingId === character.id}
                onClick={() => void handleRecalculate(character)}
              >
                {pendingId === character.id ? "…" : "Recalculer XP"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
