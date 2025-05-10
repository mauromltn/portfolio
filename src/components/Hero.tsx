import { TextGenerateEffectDemo } from "./Text/HeroText";
import { ViewReveal } from "./ui/ViewReveal";

export default function Hero() {
   return (
      <main className='flex flex-col justify-center w-250 mt-30'>
         <TextGenerateEffectDemo />
         <ViewReveal>
            <a
               href="mailto:dev.montane@gmail.com"
               className='bg-white ring ring-neutral-300 font-semibold py-4 px-5 rounded-full hover:shadow-[0px_8px_12px_0px_rgba(0,0,0,0.105)] hover:scale-101 duration-200'
            >
               Get in touch
            </a>

            <div className='flex gap-3 items-center'>
               <div className='bg-[#12C971] rounded-full w-3 h-3'></div>
               <p className='text-[#088046] font-medium'>Open to New Opportunities</p>
            </div>
         </ViewReveal>
      </main>
   )
}
