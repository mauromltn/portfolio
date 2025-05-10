"use client";
import { TextGenerateEffect } from "../text-generate-effect";

const words = 'I build-responsive, high-performance web apps—using clean code, UX best practices, and tailored UI design.';

export function HeroText() {
  return <TextGenerateEffect duration={2} words={words} className="text-3xl sm:text-5xl font-medium py-10 sm:py-15" />;
}
