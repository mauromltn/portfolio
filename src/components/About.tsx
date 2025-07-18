import { RevealAnimation } from "./ui/ViewReveal/RevealAnimation";

export default function About() {
   return (
      <RevealAnimation className="border-t border-stone-200">
         <div className="flex justify-between w-6xl px-26 py-16">
            <h2 className="text-3xl sm:text-5xl font-medium">Hello.</h2>
            <p className="w-170 text-base lg:text-lg">
               I’m a web developer who enjoys building things that actually work and look good. I mainly use Next.js with TypeScript 
               and Tailwind, and I like creating websites that are fast, responsive, and easy to use. I started this journey because 
               I wanted to turn ideas into real things and it’s still what drives me every time I write code.
            </p>
         </div>
      </RevealAnimation>
   );
}