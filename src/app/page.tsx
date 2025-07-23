import {
  Hero,
  RecentEventsSection,
  EventFlowSection,
  AboutSection,
  NewsletterSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <RecentEventsSection />
      <EventFlowSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}
