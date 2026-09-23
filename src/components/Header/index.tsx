"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarPlus, Menu } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface INavItems {
  _title: string
  _url: string
}

const NAV_ITEMS: INavItems[] = [
  { _title: "Servicios", _url: "/servicios" },
  { _title: "Empresas", _url: "/empresas" },
  { _title: "Cursos", _url: "/cursos" },
]

const CTA_ITEM = { title: "Agendar proyecto", url: "/agendar-proyecto" }

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-brand-surface text-brand-ink sticky top-0 z-50 shadow-[0_1px_0_0_rgba(255,255,255,0.06)]">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold">
          Negocio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item._url}
              href={item._url}
              className={cn(
                "text-brand-muted hover:text-brand-ink text-sm font-medium transition-colors",
                pathname === item._url && "text-brand-ink"
              )}
            >
              {item._title}
            </Link>
          ))}

          <Link
            href={CTA_ITEM.url}
            className="bg-brand-accent text-brand-accent-ink focus-visible:outline-brand-accent inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <CalendarPlus className="size-4" />
            {CTA_ITEM.title}
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger
            className="border-brand-border text-brand-ink hover:bg-white/5 inline-flex items-center justify-center rounded-md border p-3 md:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-brand-border bg-brand-surface text-brand-ink w-72"
          >
            <SheetHeader>
              <SheetTitle className="text-brand-ink">Negocio</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) => (
                <SheetClose
                  key={item._url}
                  render={<Link href={item._url} />}
                  className={cn(
                    "text-brand-muted hover:bg-brand-bg hover:text-brand-ink rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    pathname === item._url && "bg-brand-bg text-brand-ink"
                  )}
                >
                  {item._title}
                </SheetClose>
              ))}
              <SheetClose
                render={<Link href={CTA_ITEM.url} />}
                className="bg-brand-accent text-brand-accent-ink mt-2 flex items-center justify-center gap-2 rounded-md px-3 py-3 text-center text-sm font-semibold hover:opacity-90"
              >
                <CalendarPlus className="size-4" />
                {CTA_ITEM.title}
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
