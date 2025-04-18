import Section from "~/app/_components/Section";
import SignUpButton from "~/app/_components/SignUpButton";

export default function VenuesCTASection() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-8 text-center shadow-md dark:bg-gray-800">
        <h2 className="mb-4 text-3xl font-bold">
          Sei un locale e vuoi ospitare un evento?
        </h2>
        <p className="text-muted-foreground mb-6 text-xl">
          Hai un bar, ristorante o spazio eventi? Diventa partner di Pitcha
          l&apos;amico e ospita i nostri eventi!
        </p>
        <SignUpButton className="w-full">Diventa Partner</SignUpButton>
      </div>
    </Section>
  );
}
