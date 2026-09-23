import Link from "next/link"
import { Bot, CalendarPlus, Check } from "lucide-react"

export function Hero() {
  return (
    <section className="bg-brand-bg text-brand-ink relative overflow-hidden">
      <div className="bg-grid-fade pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="animate-hero-rise flex flex-col gap-6">
          <p className="text-brand-accent font-mono text-xs tracking-wide uppercase sm:text-sm">
            // Automatización con IA para pymes
          </p>
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Tus ventas ya generan datos.{" "}
            <span className="text-brand-accent">
              Falta que alguien los use.
            </span>
          </h1>
          <p className="text-brand-muted max-w-[60ch] text-lg">
            Construimos páginas y automatizaciones con IA para pymes: leads
            que se atienden solos, reportes que se arman solos. Rápido de
            implementar, sin precio de agencia grande.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/agendar-proyecto"
                className="bg-brand-accent text-brand-accent-ink focus-visible:outline-brand-accent inline-flex items-center gap-2 rounded-md px-8 py-4 text-base font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <CalendarPlus className="size-5" />
                Agendar proyecto
              </Link>
              <Link
                href="/servicios"
                className="border-brand-border text-brand-ink focus-visible:outline-brand-accent inline-flex items-center gap-2 rounded-md border px-8 py-4 text-base font-semibold transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Ver servicios
              </Link>
            </div>
            <p className="text-brand-muted text-sm">
              Diagnóstico inicial sin costo, sin compromiso.
            </p>
          </div>
        </div>

        <div className="animate-hero-rise relative mt-10">
          <div className="bg-brand-accent text-brand-accent-ink absolute -top-[4.5rem] right-6 flex size-16 items-center justify-center rounded-full shadow-lg shadow-black/40">
            <Bot className="size-8" />
          </div>
          <div className="border-brand-border bg-brand-surface rounded-lg border shadow-2xl shadow-black/40">
            <div className="border-brand-border flex items-center gap-2 border-b px-4 py-3">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ec97c] opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-[#3ec97c]" />
              </span>
              <span className="text-brand-muted font-mono text-xs">
                Chat de ventas — en vivo
              </span>
            </div>
            <div className="flex flex-col gap-3 px-5 py-5">
              <div className="border-brand-border bg-brand-bg max-w-[85%] rounded-lg rounded-tl-sm border px-3 py-2 text-sm">
                Hola, ¿tienen disponible el plan premium?
              </div>
              <div className="border-brand-accent/40 bg-brand-accent/10 ml-auto max-w-[85%] rounded-lg rounded-tr-sm border px-3 py-2 text-sm">
                <span className="text-brand-accent mr-1 font-mono text-[10px] font-bold tracking-wide uppercase">
                  IA
                </span>
                ¡Hola! Sí, tenemos 3 planes disponibles. Te comparto precios y
                agendo una demo si quieres.
              </div>
            </div>
            <div className="border-brand-border text-brand-muted flex items-center gap-2 border-t px-5 py-3 font-mono text-xs">
              <Check className="size-3.5 text-[#3ec97c]" />
              Respondido en 8 segundos · lead agregado al reporte
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
