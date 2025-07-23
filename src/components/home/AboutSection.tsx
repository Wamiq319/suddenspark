"use client";
import { Button } from "../ui";
import Link from "next/link";

export const AboutSection = () => {
  return (
    <section className="bg-base-100 text-base-content py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What is Sudden Spark?
        </h2>

        <p className="text-lg mb-4 max-w-3xl mx-auto">
          Sudden Spark is a community-powered platform designed to help anyone
          share local events, organize meaningful gatherings, and promote causes
          that matter.
        </p>

        <p className="text-lg mb-10 max-w-3xl mx-auto">
          Whether you&apos;re hosting a small meetup, a volunteer initiative, or
          a creative event — Sudden Spark makes it easy to connect with people
          who care. Every event submission is reviewed to ensure quality,
          safety, and alignment with our mission.
        </p>

        <Link href="/about">
          <Button color="blue" outline rounded>
            Learn More About Us
          </Button>
        </Link>
      </div>
    </section>
  );
};
