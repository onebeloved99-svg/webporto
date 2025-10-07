'use client'

import { useTheme as useNextTheme } from '@/components/theme-provider'

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  
  const isDark = theme === 'dark' || (theme === 'system' && 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }
  
  return {
    theme,
    isDark,
    setTheme,
    toggleTheme
  }
}