import { ProjectCardProps } from '../../lib/types'

export default function ProjectCard({ index, title, link, setModal }: ProjectCardProps) {
   return (
      <div
         onClick={() => link !== '/not-available' ? window.open(`${link}`) : (window.location.href = '/not-available')}
         onMouseEnter={() => setModal({ active: true, index })}
         onMouseLeave={() => setModal({ active: false, index })}
         className="group flex items-center justify-between w-full py-8 px-5 md:py-12.5 md:px-25 border-t border-[var(--border-color)] cursor-pointer hover:opacity-40 duration-200 active:opacity-40"
      >
         <h2 className="text-xl lg:text-5xl group-hover:translate-x-2.5 duration-200 group-active:translate-x-2.5">{title}</h2>
         <p className='text-xs lg:text-base font-light group-hover:-translate-x-2.5 duration-200 group-active:-translate-x-2.5'>Design & Development</p>
      </div>
   )
}