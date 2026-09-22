"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
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
  _title: string;
  _url: string;
}

const NAV_ITEMS: INavItems[] = [
  { _title: "Servicios", _url: "/servicios" },
  { _title: "Empresas", _url: "/empresas" },
  { _title: "Cursos", _url: "/cursos" },
] as const

const CTA_ITEM = { title: "Agendar proyecto", url: "/agendar-proyecto" }

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Negocio
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item._url}
              href={item._url}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                pathname === item._url && "text-foreground"
              )}
            >
              {item._title}
            </Link>
          ))}
          
          <div className="hidden md:block">
            <Button render={<Link href={CTA_ITEM.url} />}>
              {CTA_ITEM.title}
            </Button>
          </div>
        </nav>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              />
            }
          >
            <Menu />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>Negocio</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_ITEMS.map((item) => (
                <SheetClose
                  key={item._url}
                  render={<Link href={item._url} />}
                  className={cn(
                    "rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    pathname === item._url && "bg-muted text-foreground"
                  )}
                >
                  {item._title}
                </SheetClose>
              ))}
              <SheetClose
                render={<Link href={CTA_ITEM.url} />}
                className="mt-2 rounded-md bg-primary px-2 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {CTA_ITEM.title}
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
