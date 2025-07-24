'use client'
import { Moon,Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Switchtheme() {
    
    const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  // On first load: sync with localStorage or system
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) {
      applyTheme(savedTheme)
      setTheme(savedTheme)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const systemTheme = prefersDark ? 'dark' : 'light'
      applyTheme(systemTheme)
      setTheme(systemTheme)
    }
  }, [])

  const applyTheme = (newTheme: 'light' | 'dark') => {
    document.documentElement.setAttribute('data-theme', newTheme)

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
  }

  return(
    <button onClick={toggleTheme} className='' aria-label='Switch to ${theme}'> {theme === 'light' ? <Moon /> : <Sun /> } </button>
  );
};