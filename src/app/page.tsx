import Header from "~/app/_components/Header";
import Hero from "~/app/_components/Hero";
import HowDoesItWork from "~/app/_components/HowDoesItWork";
import NextEvents from "~/app/_components/NextEvents";
import VenuesCTASection from "~/app/_components/VenuesCTASection";
import Footer from "~/app/_components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowDoesItWork />
        <NextEvents />
        <VenuesCTASection />
      </main>
      <Footer />
    </div>
  );
}
