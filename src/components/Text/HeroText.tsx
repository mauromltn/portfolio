"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = 'I build-responsive, high-performance web apps—using clean code, UX best practices, and tailored UI design.';

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect duration={1.5} words={words} className="text-5xl font-medium py-15" />;
}
