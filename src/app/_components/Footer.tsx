import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-muted-foreground text-center text-sm">
          &copy; {new Date().getFullYear()} Pitcha l&apos;amico. Tutti i diritti
          riservati.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Termini
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground text-sm"
          >
            Contatti
          </Link>
        </div>
      </div>
    </footer>
  );
}
