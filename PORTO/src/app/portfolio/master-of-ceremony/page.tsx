'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Calendar, MapPin, User, FileText, Award, CheckCircle, Clock, Users, Target, BookOpen, Award as AwardIcon, Database, Zap, Shield, Smartphone, Mail, MessageCircle, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/hooks/use-theme'

export default function MasterOfCeremonyDetail() {
  const { isDark, toggleTheme } = useTheme()

  const projectDetails = {
    title: 'Master Of Ceremony',
    subtitle: 'Rekredensialing Klinik Pratama Ummi Nindira',
    duration: 'September 2025',
    location: 'Kabupaten Bekasi, Jawa Barat',
    role: 'MC & Event Coordinator',
    status: 'Completed',
    category: 'Event Management'
  }

  const features = [
    'Koordinasi acara rekredensialing',
    'Master of ceremony untuk sesi utama',
    'Manajemen timeline acara',
    'Koordinasi dengan pembicara dan narasumber',
    'Public speaking dan presentasi'
  ]

  const technologies = [
    {
      name: 'Event Tools',
      items: ['Microphone Systems', 'Sound Equipment', 'Presentation Software']
    },
    {
      name: 'Coordination', 
      items: ['Event Planning', 'Time Management', 'Communication Skills']
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-5 h-5" />,
      title: '10+ Peserta',
      description: 'Berhasil memandu acara dengan 10+ peserta dari berbagai institusi kesehatan'
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: 'Manajemen Waktu',
      description: 'Mengelola timeline acara dengan tepat waktu tanpa delay'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Keterlibatan Audiens',
      description: 'Mencapai 95% kepuasan peserta'
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Penampilan MC Terbaik',
      description: 'Mendapatkan apresiasi langsung dari Pimpinan Klinik'
    }
  ]

  const challenges = [
    {
      title: 'Koordinasi Multi-Pembicara',
      description: 'Mengkoordinasikan 5+ pembicara dari berbagai latar belakang profesional dengan jadwal yang padat dan materi yang beragam.'
    },
    {
      title: 'Manajemen Keterlibatan Audiens',
      description: 'Mempertahankan perhatian dan partisipasi audiens selama 2 jam acara dengan sesi yang padat dan teknis.'
    },
    {
      title: 'Pemecahan Masalah Langsung',
      description: 'Menangani berbagai isu teknis dan logistik secara real-time selama acara berlangsung tanpa mengganggu flow acara.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-orange-900/20"></div>
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
              <AwardIcon className="w-4 h-4" />
              {projectDetails.category}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent" style={{fontFamily: 'var(--font-playfair-display)'}}>
            {projectDetails.title}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            {projectDetails.subtitle}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <Calendar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.duration}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{projectDetails.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg">
              <User className="w-4 h-4 text-amber-600 dark:text-amber-400" />
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
                  <p className={`text-base leading-normal text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Bulan September tahun 2025 saya di tunjuk sebagai Master Of Ceremony (MC) oleh Pimpinan Klinik. namun pada saat itu adalah kali pertama saya menjadi seorang MC.
                  </p>
                  <p className={`text-base leading-normal mt-3 text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Ini adalah tantangan besar untuk saya yang belum pernah sekalipun menjadi seorang MC. Tawaran tersebut saya terima dengan senang hati, karena menurut saya ini adalah kesempatan baru yang belum tentu saya dapatkan di lain kesempatan. 1 hari setelah saya di tunjuk, saya mulai riset bagaimana caranya menjadi seorang MC Profesional dan apasaja yang perlu di siapkan. Dengan rasa percaya diri yang saya miliki, 16 September 2025 adalah hari dimana Tim Rekredensialing BPJS Kesehatan datang. Alhamdulillah saya berhasil menjalankan tugas sebagai seorang MC untuk pertama kalinya. Memang ada sedikit kekurangan, tapi itu menjadi pengalaman berharga bagi saya pribadi.
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
                      <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
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
                            className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-amber-900/30 text-amber-300' : 'bg-amber-100 text-amber-800'}`}
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
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">
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
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded text-sm">
                      {projectDetails.status}
                    </span>
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
                  Statistik Cepat
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Peserta</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>10+ Peserta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Durasi Acara</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>2 Jam</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Database className="w-5 h-5 text-amber-500" />
                    <div>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tingkat Kepuasan</p>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>95% Puas</p>
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
                      <div className="text-amber-500">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="mailto:septio.nugroho1@gmail.com"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Email Langsung</span>
            </a>
            <a
              href="https://wa.me/6281382733543"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
          <Link
            href="/#portfolio"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-lg font-semibold hover:bg-amber-50 dark:hover:bg-gray-800 transition-all duration-300"
          >
            Lihat Portfolio Lainnya
          </Link>
        </div>
      </section>
    </div>
  )
}