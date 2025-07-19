import { useEffect } from 'react'
import { ProjectModalProps } from '../../lib/types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function ProjectModal({ modal, projectsData }: ProjectModalProps) {

  const { active, index } = modal

  useEffect(() => {
    const moveContainerX = gsap.quickTo("#project-modal", "left", { duration: 0.8, ease: "power3" });
    const moveContainerY = gsap.quickTo("#project-modal", "top", { duration: 0.8, ease: "power3" });
    const moveCursorX = gsap.quickTo("#cursor", "left", { duration: 0.5, ease: "power3" });
    const moveCursorY = gsap.quickTo("#cursor", "top", { duration: 0.5, ease: "power3" });
    const moveCursorLabelX = gsap.quickTo("#cursor-label", "left", { duration: 0.45, ease: "power3" });
    const moveCursorLabelY = gsap.quickTo("#cursor-label", "top", { duration: 0.45, ease: "power3" });

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  }, [])

  return (
    <>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className='hidden md:flex items-center justify-center fixed top-0 left-0 overflow-hidden w-60 h-45 md:w-100 md:h-87.5 pointer-events-none'
        id='project-modal'
      >
        <div style={{ top: index * -100 + "%" }} className='absolute w-full h-full transition-[top-cubic-bezier(0.76,0,024,1)] duration-500'>
          {
            projectsData.map((project, index) => {
              const { src, color } = project
              return (
                <div
                  key={`modal_${index}`}
                  style={{ backgroundColor: color }}
                  className='relative flex items-center justify-center h-full'
                >
                  <Image
                    key={index}
                    src={src}
                    width={200}
                    height={0}
                    alt="project image"
                    className='md:w-75'
                  />
                </div>
              )
            })
          }
        </div>
      </motion.div>

      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className='hidden md:block fixed top-0 left-0 w-13 h-13 md:w-20 md:h-20 rounded-full bg-blue-600 pointer-events-none'
        id='cursor'
      ></motion.div>
      <motion.div
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "open" : "closed"}
        className='hidden md:block fixed top-0 left-0 text-white text-xs md:text-base pointer-events-none'
        id='cursor-label'
      >
        View
      </motion.div>
    </>
  )
}
