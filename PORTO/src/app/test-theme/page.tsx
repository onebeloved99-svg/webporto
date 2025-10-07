'use client'

import { useTheme } from '@/hooks/use-theme'
import { Sun, Moon } from 'lucide-react'

export default function TestTheme() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'} p-8`}>
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Theme Persistence Test
        </h1>
        
        <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <p className={`mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Current theme: {isDark ? 'Dark' : 'Light'}
          </p>
          
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isDark 
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            Toggle Theme
          </button>
        </div>
        
        <div className={`mt-6 p-4 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Test Instructions:
          </p>
          <ol className={`list-decimal list-inside mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>Toggle the theme above</li>
            <li>Refresh the page (F5)</li>
            <li>The theme should persist</li>
            <li>Navigate to another page and back</li>
            <li>The theme should still persist</li>
          </ol>
        </div>
        
        <div className="mt-6">
          <a 
            href="/" 
            className={`inline-block px-4 py-2 rounded-lg ${
              isDark 
                ? 'bg-amber-600 text-white hover:bg-amber-700' 
                : 'bg-amber-500 text-white hover:bg-amber-600'
            }`}
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}