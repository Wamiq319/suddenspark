import {
  Hero,
  EventFlowSection,
  AboutSection,
  EventIdeasScroller,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventIdeasScroller />
      <EventFlowSection />
      <AboutSection />
    </main>
  );
}
