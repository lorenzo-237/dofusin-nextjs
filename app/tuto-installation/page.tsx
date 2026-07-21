import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Tuto d'installation — DofusIn",
  description:
    "Le fonctionnement de DofusIn en 7 étapes : personnages, métiers, disponibilité, recherche, notification, entraide et système d'xp.",
}

// Screenshots live in public/tuto/<file> — 430x900, the app's own window
// size (see dofus-dispo's tauri.conf.json), hence the aspect-[430/900] on
// Screenshot below.
const STEPS = [
  {
    number: 1,
    title: "Vos personnages",
    image: "01-personnages.png",
    text: "Renseignez le nom, la classe et le niveau de chacun de vos personnages, serveur par serveur. C'est ce qui permet aux autres joueurs de vous retrouver quand ils cherchent une classe précise — pour l'ouverture de Kralamour, une quête d'alignement, ou tout autre contenu qui impose une composition de classes spécifique.",
  },
  {
    number: 2,
    title: "Vos métiers",
    image: "02-metiers.png",
    text: "Les métiers (Bûcheron, Forgemage, etc.) sont liés au serveur plutôt qu'au personnage : tous vos personnages du même serveur partagent les mêmes niveaux, pas besoin de les ressaisir à chaque fois. Une fois renseignés, ils apparaissent dans la recherche par métier pour que d'autres joueurs puissent vous solliciter pour un craft.",
  },
  {
    number: 3,
    title: "Se rendre disponible",
    image: "03-disponibilite.png",
    text: "Depuis l'onglet Disponibilité, activez un personnage ou un métier pour la journée, gratuitement ou contre rémunération. Une fois disponible, vous apparaissez dans les résultats de recherche des autres joueurs — jusqu'à ce que vous vous désactiviez, ou que l'app le fasse pour vous à la fermeture, si vous le confirmez.",
  },
  {
    number: 4,
    title: "Rechercher un aidant",
    image: "04-recherche.png",
    text: "Filtrez par serveur, classe ou métier et niveau minimum pour retrouver instantanément qui est disponible. Un clic sur « Copier le message » prépare une commande de chuchotement prête à coller en jeu, avec le tag [Gratuit] ou [Payant - Nk] déjà inclus.",
  },
  {
    number: 5,
    title: "Notification",
    image: "05-notification.png",
    text: "Besoin urgent d'un artisan ou d'une classe précise ? Depuis l'accueil, lancez une demande d'aide : tous les joueurs actuellement disponibles qui correspondent à vos critères (serveur, classe ou métier, niveau minimum) reçoivent une notification instantanée, même en arrière-plan.",
  },
  {
    number: 6,
    title: "Entraide",
    image: "06-entraide.png",
    text: "Depuis l'onglet Entraide, acceptez ou déclinez les demandes reçues, suivez le statut de vos propres demandes dans « Mes réponses », et validez une aide une fois qu'elle a bien eu lieu — ce qui rapporte de l'xp aux deux joueurs.",
  },
  {
    number: 7,
    title: "Le système d'xp",
    image: "07-xp.png",
    text: "L'xp gagné en aidant est cumulé sur votre Profil, aux côtés de votre rang et de vos statistiques, et le Classement général affiche tous les joueurs triés par xp. C'est encore une première version et elle est susceptible d'évoluer avec le temps, vos retours sont les bienvenus.",
  },
]

function Screenshot({ step }: { step: (typeof STEPS)[number] }) {
  return (
    <div className="aspect-430/900 w-full max-w-80 shrink-0 overflow-hidden rounded-[20px] border border-border bg-card shadow-sm">
      <Image
        src={`/tuto/${step.image}`}
        alt={step.title}
        width={430}
        height={900}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default function TutoInstallationPage() {
  return (
    <div className="flex min-h-svh flex-col items-center">
      <nav className="flex w-full max-w-[1040px] items-center justify-between gap-2.5 px-6 pt-7">
        <Link href="/">
          <Image
            src="/assets/lockup.svg"
            alt="DofusIn"
            width={130}
            height={35}
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-[13px] font-semibold text-muted-foreground hover:text-foreground"
        >
          Retour à l&apos;accueil
        </Link>
      </nav>

      <section className="flex max-w-[640px] flex-col items-center gap-3.5 px-6 pt-[50px] pb-[70px] text-center">
        <h1 className="font-heading text-[34px] leading-[1.15] font-extrabold text-balance">
          Le fonctionnement de DofusIn, étape par étape
        </h1>
        <p className="max-w-[480px] text-[16px] leading-relaxed text-muted-foreground">
          Un aperçu en images de tout ce que fait l&apos;application, de la
          configuration de vos personnages jusqu&apos;à l&apos;entraide en
          direct.
        </p>
      </section>

      <section className="flex w-full max-w-[880px] flex-col gap-16 px-6 pb-[100px]">
        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className={cn(
              "flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-12",
              index % 2 === 1 && "md:flex-row-reverse"
            )}
          >
            <Screenshot step={step} />
            <div className="flex flex-col items-center gap-2.5 text-center md:items-start md:text-left">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                {step.number}
              </span>
              <h2 className="font-heading text-xl font-bold">{step.title}</h2>
              <p className="max-w-[420px] text-[15px] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      <SiteFooter />
    </div>
  )
}
