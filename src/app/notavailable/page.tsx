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
               <h1 className="text-3xl sm:text-5xl font-medium mb-6">Progetto in Sviluppo</h1>
               <p className="text-foreground/70 text-base sm:text-lg">
                  Questo progetto non è ancora completato e si trova attualmente in fase di sviluppo.
               </p>
            </div>

            <div className="bg-white border border-neutral-300 rounded-2xl p-6 text-left">
               <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                     <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                     <h3 className="text-lg font-medium mb-2">Stato del Progetto</h3>
                     <p className="text-foreground/70 text-sm sm:text-base">
                        Il progetto è attualmente in produzione e sarà disponibile presto.
                     </p>
                  </div>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
               <Link 
                  href="/"
                  className='bg-white border border-neutral-300 text-sm font-semibold p-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 ease-out'
               >
                  Torna alla Home
               </Link>
               
               <Link 
                  href="/projects"
                  className='text-sm sm:text-base font-medium py-4 px-6 rounded-full text-foreground/70 hover:text-foreground transition-colors duration-200'
               >
                  Altri Progetti
               </Link>
            </div>
         </div>
      </main>
   );
}