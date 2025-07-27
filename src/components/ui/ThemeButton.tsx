'use client'
import { Contrast } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ThemeButton() {
  const { setTheme, theme } = useTheme()
  
  return (
    <div
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='cursor-pointer hover:opacity-70 transition-opacity'
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <Contrast size={20} />
    </div>
  )
}
