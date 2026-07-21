import { Coffee } from "lucide-react"

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

// Shared between the landing page and the tutorial page — kept as one
// component so the optional GitHub/coffee links stay in sync instead of
// duplicating the env-var gating in two places.
export function SiteFooter() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL
  const coffeeUrl = process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL

  return (
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
  )
}
