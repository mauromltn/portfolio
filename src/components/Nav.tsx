import { navLinks } from '@/data/navLinks'
import { motion } from 'framer-motion'

const perspective = {
   initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 40,
      translateX: -20,
   },
   
   enter: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
         duration: 0.65,
         opacity: {duration: 0.35},
         delay: 0.3 + (i * 0.1),
         ease: [0.215, 0.61, 0.355, 1],
      },
   }),

   exit: {
      opacity: 0
   }
}

export default function Nav() {
  return (
    <div className="flex items-center h-full px-6 text-black text-2xl font-medium">
      <div className="top">
         {
            navLinks.map((link, i) => (
               <div key={i} className="perspective-normal perspective-origin-right">
                  <motion.div
                     custom={i}
                     className="flex py-1"
                     variants={perspective}
                     initial="initial"
                     animate="enter"
                     exit="exit"
                  >
                     <a href={link.href}>{link.title}</a>
                  </motion.div>
               </div>
            ))
         }
      </div>

      <div className="bottom">

      </div>
    </div>
  )
}
