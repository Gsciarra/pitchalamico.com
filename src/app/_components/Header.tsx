import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "~/app/_components/ui/button";
import SignInButton from "~/app/_components/SignInButton";
import SignUpButton from "~/app/_components/SignUpButton";

export default function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 flex justify-center border-b">
      <div className="container flex h-16 items-center justify-between py-4">
        <Link href="/" className="text-primary text-xl font-bold">
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
