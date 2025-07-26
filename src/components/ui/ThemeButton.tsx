'use client'
import { Contrast } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
   const toggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
   }
  return (
    <div
      onClick={toggleTheme}
      className='cursor-pointer'
   >
      <Contrast size={20} />
    </div>
  )
}
