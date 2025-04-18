import { Button } from "~/app/_components/ui/button";
import Link from "next/link";
import Section from "~/app/_components/Section";
import {
  Building,
  Calendar,
  CalendarIcon,
  MapPin,
  MapPinIcon,
} from "lucide-react";
import SignUpButton from "~/app/_components/SignUpButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/app/_components/ui/card";

type Event = {
  id: number;
  city: string;
  date: string;
  venue: string;
};

const events: Event[] = [
  {
    id: 1,
    city: "Milano",
    date: "Data in definizione",
    venue: "21 House Of Stories",
  },
  {
    id: 2,
    city: "Milano",
    date: "Data in definizione",
    venue: "Cascina Cuccagna",
  },
  {
    id: 3,
    city: "Milano",
    date: "Data in definizione",
    venue: "Yellowsquare",
  },
];

export default function NextEvents() {
  return (
    <Section className="bg-rose-50 dark:bg-rose-900/20">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold">Prossimi Eventi</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex h-40 items-center justify-center bg-rose-200 dark:bg-rose-800">
                  <span className="text-2xl font-bold text-rose-600 dark:text-rose-300">
                    Pitch Night {event.city}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    Pitch Night {event.city}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex items-center justify-center">
                    <span className={"flex items-center"}>
                      <Calendar className={"mr-2"} /> {event.date}
                    </span>
                    <span className={"mx-2"}>•</span>
                    <span className={"flex items-center"}>
                      <Building className={"mr-2"} />
                      {event.venue}
                    </span>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <SignUpButton className={"w-full"}>
                  Registrati e Partecipa
                </SignUpButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
