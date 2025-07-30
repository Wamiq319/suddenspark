import {
  Hero,
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
      <EventFlowSection />
      <AboutSection />
      <NewsletterSection />
    </main>
  );
}
