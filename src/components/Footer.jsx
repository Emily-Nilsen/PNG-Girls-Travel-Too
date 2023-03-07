import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative pt-5 pb-20 bg-secondary/50 sm:pb-32 sm:pt-14">
      <div className="absolute inset-x-0 top-0 h-32 text-primary/30 [mask-image:linear-gradient(white,transparent)]">
        <GridPattern x="50%" />
      </div>
      <div className="relative text-sm text-center text-neutral-600">
        <p>Copyright &copy; {new Date().getFullYear()} PNG Girls Travel Too</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  )
}
