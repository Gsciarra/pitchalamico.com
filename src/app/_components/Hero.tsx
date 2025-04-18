import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/_components/ui/card";
import type { ReactNode } from "react";
import SignUpButton from "~/app/_components/SignUpButton";
import Section from "~/app/_components/Section";

type CardData = {
  title: string;
  description: string;
  image: { url: string; alt: string };
  footer: ReactNode;
};

const cardData: CardData[] = [
  {
    title: "Hai un amico da presentare?",
    description:
      "Conosci qualcuno che merita di trovare l'amore ma è troppo timido per mettersi in gioco? Aiutalo tu!",
    image: { url: "/pitching-friend.png", alt: "Pitchando l'amico" },
    footer: <SignUpButton className={"w-full"}>Presenta un amico</SignUpButton>,
  },
  {
    title: "Vuoi essere presentato?",
    description:
      "Sei stanco delle solite app di incontri? Lascia che sia un amico a raccontare chi sei veramente!",
    image: { url: "/pitching-friend.png", alt: "Pitchando l'amico" },
    footer: <SignUpButton className={"w-full"}>Fatti presentare</SignUpButton>,
  },
];

export default function Hero() {
  return (
    <Section className="dark:to-background bg-gradient-to-b from-rose-50 to-white dark:from-rose-950">
      <h1 className="text-primary mb-6 text-4xl font-bold tracking-tight md:text-6xl">
        L&apos;amore è questione di... amici!
      </h1>
      <p className="text-muted-foreground mb-10 max-w-3xl text-xl md:text-2xl">
        Perché nessuno conosce i tuoi pregi (e difetti) meglio dei tuoi amici.
        Lascia che siano loro a presentarti!
      </p>
      <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2">
        {cardData.map((card: CardData) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">{card.description}</p>
            </CardContent>
            <CardFooter>{card.footer}</CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
