import { QuickReveal } from "./ui/ViewReveal/QuickReveal";

export default function About() {
   return (
      <QuickReveal className="border-t border-[var(--border-color)]">
         <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:w-6xl px-6 sm:px-12 md:px-26 py-16 transition-all duration-500 ease-in-out">
            <h2 className="text-3xl sm:text-5xl font-medium mb-4">Hello.</h2>
            <p className="lg:w-170 text-base lg:text-lg">
               I’m a frontend developer who enjoys building things that actually work and look good. I mainly use Next.js with TypeScript 
               and Tailwind, I like creating websites that are fast, responsive, and easy to use. I started this journey because 
               I wanted to turn ideas into real things and it’s still what drives me every time I code.
            </p>
         </div>
      </QuickReveal>
   );
}