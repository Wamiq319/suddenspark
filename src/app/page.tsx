import {
  Hero,
  RecentEventsSection,
  EventFlowSection,
  CallToAction,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentEventsSection />
      <EventFlowSection />
      <CallToAction />
      <Testimonials />
    </main>
  );
}
