'use client';
import Image from 'next/image';
import { ProjectDetails } from '@/lib/types';
import { Minus } from 'lucide-react';

export default function DetailsCard({ index, mockup, title, type, link }: ProjectDetails) {
   return (
      <div 
         onClick={() => window.open(`${link}`, '_blank')}
         className='group w-full rounded-xl transition-all duration-300 ease-in-out cursor-pointer'
      >
         <div className='relative w-full aspect-[575/376] overflow-hidden rounded-xl'>
            <Image
            key={index}
            src={mockup}
            fill
            placeholder='blur'
            alt="project image"
            className='object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out'
         />
         </div>
          <div className="flex items-center mt-4 transition-all duration-300 ease-in-out">
            <p className='text:sm lg:text-lg lg:font-medium transition-all duration-300 ease-in-out'>{title}</p>
            <Minus strokeWidth={1} className='lg:hidden transition-all duration-300 ease-in-out' />
            <Minus strokeWidth={2} className='hidden lg:block transition-all duration-300 ease-in-out' />
            <p className='text:sm lg:text-lg lg:font-medium transition-all duration-300 ease-in-out'>{type}</p>
          </div>
      </div>
   )
}
