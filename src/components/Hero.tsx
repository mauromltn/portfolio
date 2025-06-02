import { HeroText } from "./ui/ViewReveal/HeroText";
import { RevealAnimation } from "./ui/ViewReveal/RevealAnimation";

export default function Hero() {
   return (
      <main className='flex flex-col justify-center max-w-250 mt-20 sm:mt-30 px-6 lg:px-0'>
         <HeroText />
         <RevealAnimation className="flex flex-col sm:flex-row gap-9 sm:items-center">
            <a
               href="mailto:dev.montane@gmail.com"
               className='w-fit bg-white ring ring-neutral-300 text-sm sm:text-base font-semibold text-center py-4.5 px-5 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-hover duration-200 ease-out'
            >
               Get in Touch
            </a>

            <div className='flex gap-2 sm:gap-3 items-center'>
               <div className='bg-[#12C971] rounded-full w-2.5 h-2.5 sm:w-3 sm:h-3'></div>
               <p className='text-[#088046] font-medium'>Open to New Opportunities</p>
            </div>
         </RevealAnimation>
      </main>
   )
}
