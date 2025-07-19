import DetailsCard from '@/components/ProjectModal/DetailsCard'
import { projectsData } from '@/data/projectsData'

export default function ProjectsPage() {
  return (
    <section className='flex flex-col justify-center mt-20 sm:mt-20 px-6 md:px-26'>
      <h1 className='text-3xl sm:text-5xl font-medium sm:pt-15 mb-2 sm:mb-4'>Projects</h1>
      <p className='font-light'>A selection of my recent projects:</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mt-10 sm:mt-20'>
      {
        projectsData.map((project, index) => {
          return (
            <DetailsCard
              key={index}
              index={index}
              title={project.title}
              type={project.type}
              mockup={project.mockup}
            />
          )
        })}
      </div>
    </section>
  )
}
