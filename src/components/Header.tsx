export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-5 w-5 rounded-sm bg-neutral-900" aria-hidden />
          <span>CLVREST</span>
        </a>
        <nav className="flex items-center gap-3 text-sm">
          <a href="/prelaunch" className="rounded-md px-3 py-2 hover:bg-neutral-100">Sign In</a>
          <a href="/prelaunch" className="rounded-md bg-neutral-900 px-3 py-2 text-white hover:opacity-90">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
