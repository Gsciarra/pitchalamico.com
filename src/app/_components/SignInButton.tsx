import { Button } from "~/app/_components/ui/button";
import { SignInButton as ClerkSignInButton } from "@clerk/nextjs";
import type { PropsWithChildren } from "react";

export default function SignInButton({ children }: PropsWithChildren) {
  return (
    <ClerkSignInButton>
      <Button variant={"secondary"} className={"cursor-pointer"}>
        {children}
      </Button>
    </ClerkSignInButton>
  );
}
