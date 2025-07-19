import Image from 'next/image';
import { ProjectDetails } from '@/lib/types';
import { Minus } from 'lucide-react';

export default function DetailsCard({ index, mockup, title, type }: ProjectDetails) {
   return (
      <div className='w-fit bg-white rounded-xl p-2 pb-4 sm:p-4 sm:pb-8'>
         <Image
            key={index}
            src={mockup}
            width={2000}
            height={0}
            placeholder='blur'
            alt="project image"
            className='md:w-175 max-h-[376px] rounded-xl'
         />
          <div className="flex items-center mt-4">
            <p className='text:sm sm:text-lg sm:font-medium'>{title}</p>
            <Minus strokeWidth={1} className='sm:hidden' />
            <Minus strokeWidth={2} className='hidden sm:block' />
            <p className='text:sm sm:text-lg sm:font-medium'>{type}</p>
          </div>
      </div>
   )
}
