import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "~/app/_lib/utils";

export default function Section({
  children,
  className,
  ...sectionProps
}: PropsWithChildren<ComponentProps<"section">>) {
  return (
    <section
      className={cn(
        "flex items-center justify-center py-20 md:py-32",
        className,
      )}
      {...sectionProps}
    >
      <div className="container flex flex-col items-center text-center">
        {children}
      </div>
    </section>
  );
}
