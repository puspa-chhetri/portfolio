import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Header() {
  return (
    <header className="px-4 py-2 flex justify-end bg-background text-foreground shadow-sm">
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}
