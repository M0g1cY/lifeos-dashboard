'use client';

import React from 'react';

interface HeroQuoteProps {
  quote?: string;
}

export function HeroQuote({
  quote = "不必追赶所有的浪潮，你只需成为自己的舵手。"
}: HeroQuoteProps) {
  return (
    <div className="hero-quote text-center py-16 px-8">
      <p className="text-3xl md:text-4xl font-light text-white/90 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}
