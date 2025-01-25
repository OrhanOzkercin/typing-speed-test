import { Link } from "@remix-run/react"
import { Button } from "~/components/ui/button"
import { ComputerDesktopIcon } from "@heroicons/react/24/outline"
import { useFocusMode } from "~/contexts/focus-mode-context"
import { cn } from "~/lib/utils"

export default function Header() {
  const { isFocusMode, setFocusMode } = useFocusMode()

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      isFocusMode && "opacity-0 hover:opacity-100 transition-opacity duration-200"
    )}>
      <Link to="/" className="flex items-center">
        <div className="flex items-center">
          <ComputerDesktopIcon className="h-8 w-8 text-primary rotate-[-10deg] transform" />
          <div className="ml-2">
            <span className="font-mono text-2xl font-bold tracking-tight">
              Type<span className="text-primary">Fast</span>
            </span>
          </div>
        </div>
      </Link>
      <Button variant="ghost" size="icon" onClick={() => setFocusMode(!isFocusMode)}>
        {isFocusMode ? "Focus Mode" : "Normal Mode"}
      </Button>
    </header>
  )
} 