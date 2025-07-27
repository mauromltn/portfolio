import { navLinks } from '@/data/navLinks'
import { motion } from 'motion/react'
import ThemeButton from '@/components/ui/ThemeButton'

export default function Nav() {
   return (
      <div className="flex items-center h-full pl-7 text-xl sm:text-sm text-[var(--background)]">
         <div className="space-y-4 sm:space-y-3 w-full">
            {
               navLinks.map((link, i) => (
                  <motion.div
                     key={i}
                     className="relative overflow-hidden"
                     initial='initial'
                     whileHover='hovered'
                     exit={{ opacity: 0 }}
                  >
                     <a href={link.href} className="block w-full">
                        <motion.div
                           className="flex"
                           variants={{
                              initial: {},
                              hovered: {}
                           }}
                        >
                           {link.title.split('').map((letter, letterIndex) => (
                              <motion.span
                                 key={letterIndex}
                                 variants={{
                                    initial: { y: 0 },
                                    hovered: { y: '-100%' },
                                 }}
                                 transition={{
                                    duration: 0.45,
                                    ease: [0.33, 1, 0.68, 1],
                                    delay: letterIndex * 0.03
                                 }}
                              >
                                 {/*In case of spaces causing brakes in the animation this includes them */}
                                 {letter === ' ' ? '\u00A0' : letter}
                              </motion.span>
                           ))}
                        </motion.div>

                        <motion.div
                           className="absolute inset-0 flex"
                           variants={{
                              initial: {},
                              hovered: {}
                           }}
                        >
                           {link.title.split('').map((letter, letterIndex) => (
                              <motion.span
                                 key={letterIndex}
                                 variants={{
                                    initial: { y: '100%' },
                                    hovered: { y: 0 }
                                 }}
                                 transition={{
                                    duration: 0.45,
                                    ease: [0.33, 1, 0.68, 1],
                                    delay: letterIndex * 0.03
                                 }}
                              >
                                 {/*In case of spaces causing brakes in the animation this includes them */}
                                 {letter === ' ' ? '\u00A0' : letter}
                              </motion.span>
                           ))}
                        </motion.div>
                     </a>
                  </motion.div>
               ))
            }
         </div>

         <div className="flex items-end h-full pr-4 pb-4">
            <ThemeButton />
         </div>
      </div>
   )
}
