'use client'
import { th } from 'framer-motion/client';
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { setTheme, theme } = useTheme()

  return (
    <>
      {theme === 'light' && <div
        onClick={() => setTheme('dark')}
        className='cursor-pointer'
        title='Switch to dark mode'
      >
        <Moon fill='currentColor' strokeWidth={1} className='w-6 h-6 sm:w-5 sm:h-5' />
      </div>}

      {theme === 'dark' && <div
        onClick={() => setTheme('light')}
        className='cursor-pointer'
        title='Switch to light mode'
      >
        <Sun fill='currentColor' strokeWidth={2} className='w-6 h-6 sm:w-5 sm:h-5' />
      </div>}

    </>
  )
}
