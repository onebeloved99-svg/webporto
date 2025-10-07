'use client'

import { useTheme } from '@/hooks/use-theme'
import { Sun, Moon, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioTest() {
  const { isDark, toggleTheme } = useTheme()

  const portfolioPages = [
    { href: '/portfolio/akreditasi-puskesmas', title: 'Akreditasi Puskesmas' },
    { href: '/portfolio/penyerapan-anggaran', title: 'Penyerapan Anggaran' },
    { href: '/portfolio/re-akreditasi-puskesmas', title: 'Re-Akreditasi Puskesmas' },
    { href: '/portfolio/master-of-ceremony', title: 'Master Of Ceremony' },
    { href: '/portfolio/top-puskesmas', title: 'Top Puskesmas' },
    { href: '/portfolio/tenaga-perbantuan', title: 'Tenaga Perbantuan' },
    { href: '/portfolio/task-management-app', title: 'Task Management App' }
  ]

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'} p-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            href="/"
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              isDark 
                ? 'hover:bg-gray-800 text-gray-300' 
                : 'hover:bg-gray-100 text-gray-700'
            } transition-colors duration-200`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              isDark 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            Toggle Theme
          </button>
        </div>

        <div className={`p-8 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Portfolio Theme Test
          </h1>
          
          <p className={`mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Current theme: <span className="font-bold">{isDark ? 'Dark' : 'Light'}</span>
          </p>
          
          <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} mb-8`}>
            <h2 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Test Instructions:
            </h2>
            <ol className={`list-decimal list-inside space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <li>Toggle the theme above</li>
              <li>Click on any portfolio page below</li>
              <li>The theme should persist on the portfolio page</li>
              <li>Use the back button or navigate back here</li>
              <li>The theme should still be the same</li>
              <li>Try refreshing the page - theme should persist</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`block p-4 rounded-lg border transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 hover:bg-gray-600 text-white' 
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900'
                }`}
              >
                <h3 className="font-semibold">{page.title}</h3>
                <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Click to test theme persistence
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}