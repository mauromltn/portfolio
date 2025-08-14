'use client'
import { useState } from 'react'
import { projectsData } from '../../data/projectsData'
import { RevealAnimation } from '../ui/ViewReveal/RevealAnimation'
import ProjectModal from './ProjectModal'

export default function Projects() {

   const [modal, setModal] = useState({ active: false, index: 0 })

   return (
      <>
         <RevealAnimation className='w-full px-5 md:max-w-220 lg:w-250 m-auto mt-30 mb-20 lg:mt-50 select-none'>
            {
               projectsData.slice(0, 4).map((project, index) => { 
                  const { title, link } = project;
                  return (
                     <div
                        key={index}
                        onClick={() => link !== '/not-available' ? window.open(`${link}`) : (window.location.href = '/not-available')}
                        onMouseEnter={() => setModal({ active: true, index })}
                        onMouseLeave={() => setModal({ active: false, index })}
                        className="group flex items-center justify-between w-full py-8 px-5 md:py-12.5 md:px-25 border-t border-[var(--border-color)] cursor-pointer hover:opacity-40 duration-200 active:opacity-40"
                     >
                        <h2 className="text-xl lg:text-5xl group-hover:translate-x-2.5 duration-200 group-active:translate-x-2.5">{title}</h2>
                        <p className='text-xs lg:text-base font-light group-hover:-translate-x-2.5 duration-200 group-active:-translate-x-2.5'>Design & Development</p>
                     </div>
                  )
               })
            }
         </RevealAnimation>
         <ProjectModal
            modal={modal}
            projectsData={projectsData}
         />
      </>
   )
}
