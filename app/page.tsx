import Image from "next/image"
import { Coffee } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Ported from design/DofusIn Landing Page.html — same copy/structure,
// rebuilt as real components instead of inline-styled divs.

// The GitHub mark isn't in lucide (a generic icon set, no brand logos) —
// kept as the raw SVG from the design, unlike the coffee cup below which
// uses lucide's own Coffee icon.
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.5 0 12.26c0 5.41 3.44 9.99 8.21 11.61.6.11.82-.27.82-.59 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.33-1.8-1.33-1.8-1.09-.76.08-.75.08-.75 1.2.09 1.84 1.26 1.84 1.26 1.07 1.88 2.8 1.34 3.49 1.02.11-.79.42-1.34.76-1.65-2.67-.31-5.47-1.37-5.47-6.08 0-1.34.47-2.44 1.24-3.3-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.26a11.3 11.3 0 0 1 6.01 0c2.29-1.59 3.3-1.26 3.3-1.26.66 1.69.24 2.94.12 3.25.77.86 1.24 1.96 1.24 3.3 0 4.72-2.81 5.76-5.49 6.07.43.38.81 1.13.81 2.28 0 1.65-.01 2.97-.01 3.38 0 .32.22.71.83.59A12.02 12.02 0 0 0 24 12.26C24 5.5 18.63 0 12 0Z" />
    </svg>
  )
}

const FAQ_ITEMS = [
  {
    question: "DofusIn est-il lié à Ankama ?",
    answer: "Non, DofusIn est un projet fan-made, non affilié à Ankama.",
  },
  {
    question: "Est-ce gratuit ?",
    answer: "Oui, DofusIn est entièrement gratuit.",
  },
  {
    question: "Comment y accéder ?",
    answer:
      "Téléchargez l'installeur ci-dessus, double-cliquez dessus, et suivez les étapes d'installation.",
  },
  {
    question: "Faut-il un compte ?",
    answer:
      "La connexion via Discord est obligatoire pour utiliser l'application.",
  },
  {
    question: "Mes données sont-elles stockées ?",
    answer:
      "En dehors des données de jeu que vous renseignez, aucune donnée personnelle n'est requise. Concernant Discord, seuls votre pseudo et le lien vers votre image de profil sont stockés.",
  },
]

export default function Page() {
  // Same route dofusin-api serves the installer from (see
  // dofusin-api/src/routes/download.ts) — the hero button *is* the
  // download link now, there's no separate download card below it
  // anymore (the FAQ's "Comment y accéder ?" answer assumes this).
  const downloadUrl =
    process.env.NEXT_PUBLIC_DOFUSIN_DOWNLOAD_URL ??
    "http://localhost:3000/download"
  // Optional — not in the repo's env yet, links are hidden rather than
  // pointing at "#" until these are set.
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL
  const coffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL

  return (
    <div className="flex min-h-svh flex-col items-center">
      <nav className="flex w-full max-w-[1040px] items-center gap-2.5 px-6 pt-7">
        <Image
          src="/assets/lockup.svg"
          alt="DofusIn"
          width={130}
          height={35}
          priority
        />
      </nav>

      <section className="flex max-w-[640px] flex-col items-center gap-4.5 px-6 pt-[70px] pb-10 text-center">
        <span className="rounded-full border border-border bg-background px-4 py-1.5 text-[12.5px] font-semibold text-muted-foreground">
          L&apos;outil communautaire d&apos;entraide entre joueurs
        </span>
        <h1 className="font-heading text-[44px] leading-[1.15] font-extrabold text-balance">
          Trouvez un artisan dispo,
          <br />
          sans y passer la soirée.
        </h1>
        <p className="max-w-[480px] text-[17px] leading-relaxed text-muted-foreground">
          Rendez vos personnages disponibles pour dépanner sur des quêtes
          (comme les quêtes d&apos;alignement), et repérez en un clin
          d&apos;œil qui peut fabriquer, améliorer ou craft pour vous.
          Simple, rapide, gratuit.
        </p>

        <a
          href={downloadUrl}
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2.5 h-auto rounded-2xl px-8 py-4 font-heading text-[17px] font-bold shadow-[0_4px_0_#2E5C3F]"
          )}
        >
          Télécharger DofusIn
        </a>
        <span className="text-[13px] text-muted-foreground">
          Windows — gratuit
        </span>
      </section>

      <section className="w-full max-w-[640px] px-6 pb-[60px]">
        <h2 className="mb-4.5 text-center font-heading text-xl font-bold">
          Questions fréquentes
        </h2>
        <div className="flex flex-col gap-3">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border bg-card px-[22px] py-[18px]"
            >
              <div className="mb-1.5 font-heading text-[15px] font-bold">
                {item.question}
              </div>
              <div className="text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full max-w-[800px] flex-col items-center gap-4 px-6 pb-[90px]">
        <h2 className="font-heading text-xl font-bold">Voir la démo</h2>
        <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-[20px] border border-border bg-foreground">
          <span className="text-sm text-background">
            Vidéo démo à venir
          </span>
        </div>
      </section>

      <footer className="flex w-full flex-col items-center gap-3.5 border-t border-border px-6 py-5.5">
        {githubUrl || coffeeUrl ? (
          <div className="flex items-center gap-4">
            {githubUrl ? (
              <a
                href={githubUrl}
                title="Voir le projet sur GitHub"
                className="flex size-9 items-center justify-center rounded-[10px] border border-border bg-card text-foreground"
              >
                <GithubIcon className="size-[18px]" />
              </a>
            ) : null}
            {coffeeUrl ? (
              <a
                href={coffeeUrl}
                title="Buy me a coffee"
                className="flex h-9 items-center gap-2 rounded-[10px] bg-accent px-4 font-heading text-[13px] font-bold text-accent-foreground no-underline hover:bg-accent/90"
              >
                <Coffee className="size-4" />
                Buy me a coffee
              </a>
            ) : null}
          </div>
        ) : null}
        <div className="text-[12.5px] text-muted-foreground">
          DofusIn — fan-made, non affilié à Ankama.
        </div>
      </footer>
    </div>
  )
}
