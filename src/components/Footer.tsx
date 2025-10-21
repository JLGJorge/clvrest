export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="inline-block h-4 w-4 rounded-sm bg-neutral-900" aria-hidden />
          <span>CLVREST</span>
        </div>
        <p>© {new Date().getFullYear()} CLVREST. The social marketplace for UGC deals.</p>
      </div>
    </footer>
  );
}
