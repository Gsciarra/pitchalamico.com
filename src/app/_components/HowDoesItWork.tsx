import Section from "~/app/_components/Section";
import { Card, CardContent, CardHeader } from "~/app/_components/ui/card";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Crea un Profilo",
    description: "Registrati ed invita un amico/a",
  },
  {
    number: 2,
    title: "Partecipa a un Evento",
    description:
      "Vieni ai nostri eventi dove gli amici presentano i propri amici single a potenziali partner.",
  },
  {
    number: 3,
    title: "Connettiti e Trova l'Amore",
    description:
      "Fai domande, connettiti con persone interessanti e trova la tua anima gemella in modo autentico.",
  },
];

export default function HowDoesItWork() {
  return (
    <Section>
      <h2 className="mb-12 text-center text-3xl font-bold">Come Funziona</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <Card key={step.number}>
            <CardHeader className={"flex flex-col items-center"}>
              <div className="bg-primary flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
