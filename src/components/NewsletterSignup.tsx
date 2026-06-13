"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <p className="text-primary uppercase tracking-[0.25em] text-xs mb-6">Stay Inspired</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          An Invitation to Beauty
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-10">
          Receive curated inspiration, exclusive studio updates, and behind-the-scenes glimpses
          from our most celebrated projects around the world.
        </p>
        {submitted ? (
          <p className="text-primary tracking-widest uppercase text-sm">
            Thank you — you&rsquo;re on the list.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 bg-background border border-foreground/20 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
