// Call to action section for homepage, styled with daisyUI
"use client";

import { Button } from "@/components";

export const CallToAction = () => {
  return (
    <section className="bg-primary text-primary-content py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Spark Change?
        </h2>
        <p className="text-lg mb-6">
          Join our community and make a difference today.
        </p>
        <Button
          variant="outline"
          onClick={() => (window.location.href = "/submit")}
        >
          Get Started
        </Button>
      </div>
    </section>
  );
};
