import { Github } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Resources } from '@/lib/res'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
            <h2 className="text-2xl font-bold">Advanced Layout Playground</h2>
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/flexbox"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Flexbox
            </Link>
            <Link
              href="/grid"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Grid
            </Link>
            <Link
              href="/examples"
              className="transition-colors hover:text-foreground/80 text-foreground"
            >
              Examples
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href={Resources.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
