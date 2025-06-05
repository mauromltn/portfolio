'use client'
import { useState } from 'react'
import { projectsData } from '../data/projectsData'
import { RevealAnimation } from './ui/ViewReveal/RevealAnimation'
import ProjectCard from './ui/ProjectCard'
import ProjectModal from './ui/ProjectModal'

export default function Projects() {

   const [modal, setModal] = useState({ active: false, index: 0 })

   return (
      <>
         <RevealAnimation className='w-full px-5 md:max-w-220 lg:w-250 m-auto mt-30 mb-20 lg:mt-50 lg:mb-40 select-none'>
            {
               projectsData.map((project, index) => {
                  return (
                     <ProjectCard
                        key={index}
                        index={index}
                        title={project.title}
                        setModal={setModal}
                     />
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
