import Link from "next/link"
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react"
import { BsThreads } from "react-icons/bs";
import { PageAnimation } from "./ViewReveal/PageAnimation";

export default function Footer() {
   return (
      <PageAnimation>
         <footer className="border-t border-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-16">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                  {/* Brand Section */}
                  <div className="md:col-span-2">
                     <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                           <Image
                              src={"/icon.svg"}
                              alt="Logo"
                              width={30}
                              height={30}
                              className="border-2 border-black rounded-full"
                           />
                           <h3 className="text-xl md:text-2xl font-medium text-stone-900">Mauro Montane</h3>
                        </div>
                        <p className="text-stone-600 text-base md:text-lg leading-relaxed max-w-md">
                           Building responsive, high-performance web applications with clean code and exceptional user experiences.
                        </p>
                     </div>
                     <div className="flex items-center gap-1 text-sm text-stone-500">
                        <div className="w-2 h-2 bg-[#12C971] rounded-full"></div>
                        <span className="">Open to New Opportunities</span>
                     </div>
                  </div>

                  {/* Navigation */}
                  <div>
                     <h4 className="text-stone-900 font-semibold mb-6">Navigation</h4>
                     <nav className="space-y-4">
                        <Link href="/" className="block text-stone-600 hover:text-stone-900 transition-colors">
                           Home
                        </Link>
                        <Link href="/about" className="block text-stone-600 hover:text-stone-900 transition-colors">
                           About
                        </Link>
                        <Link href="/projects" className="block text-stone-600 hover:text-stone-900 transition-colors">
                           Projects
                        </Link>
                        <Link href="/contact" className="block text-stone-600 hover:text-stone-900 transition-colors">
                           Contact
                        </Link>
                     </nav>
                  </div>

                  {/* Connect */}
                  <div>
                     <h4 className="text-stone-900 font-semibold mb-6">Connect</h4>
                     <div className="space-y-4">
                        <Link
                           href="mailto:dev.montane@gmail.com"
                           className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                           target="_blank"
                        >
                           <Mail className="w-4 h-4" />
                           <span>Email</span>
                        </Link>
                        <Link
                           href="https://linkedin.com/in/mauromontane"
                           className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                           target="_blank"
                        >
                           <Linkedin className="w-4 h-4" />
                           <span>LinkedIn</span>
                        </Link>
                        <Link
                           href="https://github.com/mauromltn"
                           className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                           target="_blank"
                        >
                           <Github className="w-4 h-4" />
                           <span>GitHub</span>
                        </Link>
                        <Link
                           href="https://threads.net/mauromontane"
                           className="flex items-center gap-3 text-stone-600 hover:text-stone-900 transition-colors"
                           target="_blank"
                        >
                           <BsThreads className="w-4 h-4" />
                           <span>Threads</span>
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Bottom Section */}
               <div className="pt-8 border-t border-stone-200">
                  <p className="text-stone-500 text-sm">© 2025 Portfolio. All rights reserved.</p>
               </div>
            </div>
         </footer>
      </PageAnimation>
   )
}
