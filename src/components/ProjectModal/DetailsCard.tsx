'use client';
import Image from 'next/image';
import { ProjectDetails } from '@/lib/types';
import { Minus } from 'lucide-react';
import { useState, useEffect } from "react"
import { motion } from "motion/react"

export default function DetailsCard({ index, mockup, title, type, link }: ProjectDetails) {
   
   const [isHovered, setIsHovered] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   
   // Track mouse position
   useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
         setMousePosition({ x: e.clientX, y: e.clientY });
      }
   
      document.addEventListener('mousemove', handleMouseMove);
   
      return () => {
         document.removeEventListener('mousemove', handleMouseMove);
      };
   }, []);

   return (
      <>
         <motion.div
            onClick={() => window.open(`${link}`, '_blank')}
            className='group w-full rounded-xl transition-all duration-300 ease-in-out cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
         >
            <div className='relative w-full aspect-[575/376] overflow-hidden rounded-xl'>
               <Image
                  key={index}
                  src={mockup}
                  fill
                  placeholder='blur'
                  alt="project image"
                  className='object-cover group-hover:scale-105 transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)]'
               />
            </div>
            <div className="flex items-center mt-4 transition-all duration-300 ease-in-out">
               <p className='text:sm lg:text-lg lg:font-medium transition-all duration-300 ease-in-out'>{title}</p>
               <Minus strokeWidth={1} className='lg:hidden transition-all duration-300 ease-in-out' />
               <Minus strokeWidth={2} className='hidden lg:block transition-all duration-300 ease-in-out' />
               <p className='text:sm lg:text-lg lg:font-medium transition-all duration-300 ease-in-out'>{type}</p>
            </div>
         </motion.div>

         {/* Mouse follow text */}
         <motion.div
            className="fixed z-10 bg-black text-[var(--background)] text-xs px-2 py-1.5 rounded-full whitespace-nowrap pointer-events-none"
            style={{
               left: mousePosition.x,
               top: mousePosition.y - 22,
               transformOrigin: 'center',
               x: '-50%'
            }}
            animate={{
               scaleX: isHovered ? 1 : 0,
            }}
            transition={{
               duration: 0.2,
               ease: [0.25, 1, 0.5, 1]
            }}
         >
            VISIT WEBSITE
         </motion.div>
      </>
   );
}
