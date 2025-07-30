import {
  Hero,
  RecentEventsSection,
  EventFlowSection,
  AboutSection,
  NewsletterSection,
  EventIdeasScroller,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Hero />
      <EventIdeasScroller />
      {/* <RecentEventsSection /> */}
      <EventFlowSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}
