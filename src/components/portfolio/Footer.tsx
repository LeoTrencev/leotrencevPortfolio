export function Footer() {
  return (
    <footer className="border-t border-hairline px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 font-display text-sm font-bold text-primary">
            LT
          </span>
          <div>
            <div className="text-sm font-medium text-foreground">
              Leo Trencev
            </div>
            <div className="text-xs text-muted-foreground">
              Software Engineering Student · FINKI
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Leo Trencev. Designed & built with care.
        </div>
      </div>
    </footer>
  );
}
