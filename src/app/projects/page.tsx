import DetailsCard from '@/components/ProjectModal/DetailsCard'
import { projectsData } from '@/data/projectsData'

export default function ProjectsPage() {
  return (
    <section className='flex flex-col justify-center my-20 sm:mt-20 px-6 lg:px-26 transition-all duration-500 ease-in-out'>
      <h1 className='text-3xl sm:text-5xl font-medium sm:pt-15 mb-2 sm:mb-4'>Projects</h1>
      <p className='font-light'>A selection of my recent projects:</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 mt-10 sm:mt-20 transition-all duration-500 ease-in-out'>
      {
        projectsData.map((project, index) => {
          return (
            <DetailsCard
              key={index}
              index={index}
              title={project.title}
              type={project.type}
              mockup={project.mockup}
              link={project.link}
            />
          )
        })}
      </div>
    </section>
  )
}
