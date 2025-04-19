import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SignInButton from "~/app/_components/SignInButton";
import SignUpButton from "~/app/_components/SignUpButton";
import Logo from "~/app/_components/Logo";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 flex justify-center border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link
          href="/"
          className="text-primary flex items-center gap-2 text-xl font-bold"
        >
          <Logo />
          Pitcha l&apos;amico
        </Link>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton>Accedi</SignInButton>
            <SignUpButton>Registrati</SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
