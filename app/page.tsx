import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Ported from dofus-dispo/docs/index.html — same copy/structure, rebuilt as
// real components instead of inline-styled divs.

export default function Page() {
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

        <Link
          href="#download"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-2.5 h-auto rounded-2xl px-8 py-4 font-heading text-[17px] font-bold shadow-[0_4px_0_#2E5C3F]"
          )}
        >
          Télécharger DofusIn
        </Link>
        <span className="text-[13px] text-muted-foreground">
          Windows — gratuit
        </span>
      </section>

      <section
        id="download"
        className="w-full max-w-[640px] scroll-mt-6 px-6 pt-5 pb-[60px]"
      >
        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border border-border bg-card p-7">
          <div>
            <div className="mb-1 font-heading text-[17px] font-bold">
              Installeur DofusIn
            </div>
            <div className="text-[13px] text-muted-foreground">
              Version 1.0 · Windows
            </div>
          </div>
          <a
            href={
              process.env.NEXT_PUBLIC_DOFUSIN_DOWNLOAD_URL ??
              "http://localhost:3000/download"
            }
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-auto rounded-2xl bg-accent px-6 py-3.5 font-heading text-[15px] font-bold text-accent-foreground whitespace-nowrap hover:bg-accent/90"
            )}
          >
            ⬇ Télécharger
          </a>
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

      <footer className="w-full border-t border-border px-6 py-5.5 text-center text-[12.5px] text-muted-foreground">
        DofusIn — fan-made, non affilié à Ankama.
      </footer>
    </div>
  )
}
