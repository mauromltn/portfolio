import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotAvailable() {
   return (
      <main className='flex flex-col justify-center items-center min-h-screen px-6'>
         <div className="max-w-md w-full text-center space-y-8">
            <div className="w-16 h-16 text-foreground/60 mx-auto">
               <AlertTriangle size={64} strokeWidth={1.5} className="w-full h-full" />
            </div>

            <div>
               <h1 className="text-3xl sm:text-5xl font-medium mb-6">Project Under Development</h1>
               <p className="text-foreground/70 text-base sm:text-lg">
                  This project is not yet completed and is currently under development.
               </p>
            </div>

            <div className="bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-6 text-left">
               <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                     <h3 className="text-lg font-medium mb-2">Project Status</h3>
                     <p className="text-[var(--text-muted)] text-sm sm:text-base">
                        The project is currently in production and will be available soon.
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
               <Link 
                  href="/"
                  className='bg-[var(--card-bg)] border border-[var(--border-color)] text-sm font-semibold text-[var(--card-text)] p-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out'
               >
                  Back to Home
               </Link>
               
               <Link 
                  href="/projects"
                  className='text-sm sm:text-base font-medium py-4 px-6 rounded-full text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200'
               >
                  Other Projects
               </Link>
            </div>
         </div>
      </main>
   );
}