import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Ported from design/DofusIn Landing Page.html — same copy/structure,
// rebuilt as real components instead of inline-styled divs.

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

  return (
    <div className="flex min-h-svh flex-col items-center">
      <nav className="flex w-full max-w-[1040px] items-center justify-between gap-2.5 px-6 pt-7">
        <Image
          src="/assets/lockup.svg"
          alt="DofusIn"
          width={130}
          height={35}
          priority
        />
        <Link
          href="/tuto-installation"
          className="text-[13px] font-semibold text-muted-foreground hover:text-foreground"
        >
          Tuto d&apos;installation
        </Link>
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

      <section className="flex w-full max-w-[640px] flex-col items-center gap-4 px-6 pb-[60px] text-center">
        <div className="flex w-full flex-col items-center gap-4 rounded-2xl border border-border bg-card px-[22px] py-[22px]">
          <span className="rounded-full bg-accent/15 px-3 py-1 text-[12px] font-bold text-accent">
            À savoir
          </span>
          <h2 className="font-heading text-lg font-bold">
            Un avertissement Windows peut s&apos;afficher
          </h2>
          <p className="max-w-[480px] text-sm leading-relaxed text-muted-foreground">
            DofusIn est un projet indépendant, pas encore reconnu comme
            éditeur par Microsoft : Windows peut donc afficher un
            avertissement SmartScreen au lancement de l&apos;installeur.
            C&apos;est normal — cliquez sur « Informations complémentaires »,
            puis sur « Exécuter quand même » pour continuer.
          </p>
          <div className="flex w-full gap-4">
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/install/install1.png"
                  alt="Fenêtre Windows : cliquer sur Informations complémentaires"
                  width={532}
                  height={498}
                  className="h-auto w-full"
                />
              </div>
              <span className="text-[12px] font-semibold text-muted-foreground">
                1. Informations complémentaires
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-1.5">
              <div className="overflow-hidden rounded-xl border border-border">
                <Image
                  src="/install/install2.png"
                  alt="Fenêtre Windows : cliquer sur Exécuter quand même"
                  width={532}
                  height={498}
                  className="h-auto w-full"
                />
              </div>
              <span className="text-[12px] font-semibold text-muted-foreground">
                2. Exécuter quand même
              </span>
            </div>
          </div>
        </div>
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

      <section className="flex w-full max-w-[800px] flex-col items-center gap-4 px-6 pb-[90px] text-center">
        <h2 className="font-heading text-xl font-bold">Comment ça marche ?</h2>
        <p className="max-w-[480px] text-[15px] leading-relaxed text-muted-foreground">
          Personnages, disponibilité, recherche, entraide, xp — un tour guidé
          en images de tout ce que fait DofusIn.
        </p>
        <Link
          href="/tuto-installation"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-auto rounded-2xl px-7 py-3.5 font-heading text-[15px] font-bold"
          )}
        >
          Voir le tuto d&apos;installation
        </Link>
      </section>

      <SiteFooter />
    </div>
  )
}
