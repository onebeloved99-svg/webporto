'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Sun, Moon, Calendar, MapPin, User, FileText, Award, CheckCircle, Clock, Users, Target, BookOpen, Code, Database, Zap, Shield, Smartphone } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/hooks/use-theme'

export default function TaskManagementAppDetail() {
  const { isDark, toggleTheme } = useTheme()

  const projectDetails = {
    title: 'Penyerapan Anggaran Tahun 2020/2021',
    subtitle: 'Aplikasi monitoring dan analisis penyerapan anggaran untuk pengambilan keputusan strategis',
    duration: '2020 - 2021',
    location: 'Kota Bekasi, Jawa Barat',
    role: 'Staff Administrasi & Developer',
    status: 'Completed',
    category: 'Budget Management System'
  }

  const features = [
    'Monitoring real-time penyerapan anggaran',
    'Dashboard analitik dan reporting komprehensif',
    'Visualisasi data grafis dan tabel interaktif',
    'Sistem alert dan notifikasi otomatis',
    'Export laporan dalam berbagai format (PDF, Excel)',
    'Integrasi dengan sistem keuangan existing',
    'User authentication dan role-based access',
    'Mobile responsive design untuk akses portable'
  ]

  const technologies = [
    {
      name: 'Tools & Analytics',
      items: ['Excel', 'Google Sheets', 'Power BI', 'Git']
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-5 h-5" />,
      title: '50+ Puskesmas Terlayani',
      description: 'Melayani monitoring anggaran untuk 50+ puskesmas'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: '95% Akurasi Data',
      description: 'Mencapai akurasi data penyerapan anggaran 95%'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: '40% Efisiensi Waktu',
      description: 'Mengurangi waktu pelaporan manual hingga 40%'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Best Budget System',
      description: 'Penghargaan sistem monitoring anggaran terbaik'
    }
  ]

  const challenges = [
    {
      title: 'Integrasi Data Multi-Sumber',
      description: 'Menggabungkan data dari berbagai sumber (Excel, manual input, sistem existing) ke dalam satu platform terpadu dengan validasi otomatis.'
    },
    {
      title: 'Kompleksitas Perhitungan Anggaran',
      description: 'Implementasi algoritma perhitungan penyerapan anggaran yang kompleks dengan berbagai parameter dan aturan bisnis yang berlaku.'
    },
    {
      title: 'User Experience untuk Data Kompleks',
      description: 'Membuat interface yang intuitive untuk menampilkan data keuangan kompleks dengan visualisasi yang mudah dipahami oleh pengguna non-technical.'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              href="/#portfolio"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${isDark ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-colors duration-200`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Portfolio</span>
            </Link>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-200 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"></div>
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              <Code className="w-4 h-4" />
              {projectDetails.category}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" style={{fontFamily: 'var(--font-playfair-display)'}}>
            {projectDetails.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            {projectDetails.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Overview Proyek
                </h2>
                <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                  <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Penyerapan Anggaran Tahun 2020/2021 adalah sistem monitoring dan analisis yang dikembangkan untuk melacak dan menganalisis penyerapan anggaran di berbagai unit puskesmas. Sistem ini menyediakan dashboard real-time, laporan komprehensif, dan tools analitik untuk mendukung pengambilan keputusan strategis dalam manajemen keuangan publik.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Fitur Utama
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-all duration-300`}
                    >
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Teknologi yang Digunakan
                </h2>
                <div className="space-y-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {tech.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-800'}`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Tantangan & Solusi
                </h2>
                <div className="space-y-6">
                  {challenges.map((challenge, index) => (
                    <div key={index} className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {challenge.title}
                        </h3>
                      </div>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Informasi Proyek
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Status</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300 dark:text-gray-400">2020</span>
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-sm">
                        Completed
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Durasi</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Lokasi</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Coverage</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>50+ Puskesmas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Project Duration</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>12 Months</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Database</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>MySQL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Pencapaian
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-blue-500">
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {achievement.title}
                        </h4>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
            Tertarik dengan Proyek Ini?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Mari diskusikan bagaimana pengalaman saya dapat membantu proyek Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Hubungi Saya
            </Link>
            <Link
              href="/#portfolio"
              className="px-8 py-3 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Lihat Portfolio Lainnya
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}