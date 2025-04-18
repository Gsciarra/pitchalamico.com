import { Button } from "~/app/_components/ui/button";
import { SignUpButton as ClerkSignUpButton } from "@clerk/nextjs";
import type { ComponentProps, PropsWithChildren } from "react";

export default function SignUpButton({
  children,
  ...buttonProps
}: PropsWithChildren<ComponentProps<"button">>) {
  return (
    <ClerkSignUpButton>
      <Button className={"cursor-pointer"} {...buttonProps}>
        {children}
      </Button>
    </ClerkSignUpButton>
  );
}
