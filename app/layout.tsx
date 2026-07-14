import { Baloo_2, Quicksand } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DofusIn — l'outil communautaire d'entraide entre joueurs",
  description:
    "Rendez vos personnages disponibles pour dépanner sur des quêtes, et repérez qui peut fabriquer, améliorer ou craft pour vous. Simple, rapide, gratuit.",
}

// Same two families as dofus-dispo (Baloo 2 for headings, Quicksand for
// body) — there it's @fontsource-variable since it's not a Next project,
// here next/font/google self-hosts them the same way with no extra deps.
const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn("antialiased", baloo2.variable, "font-sans", quicksand.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
