"use client";

import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/input/InputField";

export function NewsletterSection() {
  return (
    <section className="blue-bg py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Connected</h2>
        <p className="text-lg mb-8">
          Subscribe to get event updates, community news, and more.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <InputField
            type="email"
            placeholder="Enter your email"
            color="white"
            outline
            required
          />

          <Button color="gold" rounded type="submit">
            Subscribe
          </Button>
        </form>

        <p className="text-sm mt-4 opacity-80">
          We’ll never spam you. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
