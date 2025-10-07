'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon, Mail, Phone, MapPin, ExternalLink, Linkedin, Instagram, Send, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/hooks/use-theme'

export default function Home() {
  const { isDark, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if we're at the bottom of the page
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        setActiveSection('contact')
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Reveal animations
      const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const skills = [
    { name: 'Manajemen Anggaran', icon: '💰' },
    { name: 'Akreditasi Puskesmas', icon: '🏥' },
    { name: 'SOP & SK Management', icon: '📋' },
    { name: 'Budget Monitoring', icon: '📊' },
    { name: 'Quality Assurance', icon: '✅' },
    { name: 'Public Speaking', icon: '🎤' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Akreditasi Puskesmas',
      description: 'Penanggung jawab SOP & SK Puskesmas',
      period: '2022 - Sekarang',
      location: 'Puskesmas Jakarta',
      role: 'Koordinator Akreditasi',
      image: 'https://z-cdn-media.chatglm.cn/files/d167f0ac-afcb-4660-831a-5fbd746183e1_pasted_image_1759738722940.png?auth_key=1791355880-9fd657efeee34a97808c65bd85b08aac-0-179248216132678b4fd270599acd1b44'
    },
    {
      id: 2,
      title: 'Penyerapan Anggaran',
      subtitle: 'Budget Management System',
      description: 'Monitoring & analisis penyerapan anggaran',
      period: '2020 - 2021',
      location: 'Jakarta, Indonesia',
      role: 'Staff Administrasi & Developer',
      image: 'https://z-cdn-media.chatglm.cn/files/a27b4122-b8b8-4be8-b00f-c8f6aed6b95d_pasted_image_1759739347548.png?auth_key=1791355880-315d962df22149a6b0cc4ce9f86c1719-0-fe6d267380df50322614e4ca0c689c97'
    },
    {
      id: 3,
      title: 'Re-Akreditasi Puskesmas',
      subtitle: 'Healthcare Quality Management',
      description: 'Sistem manajemen dokumen dan monitoring proses re-akreditasi fasilitas kesehatan',
      period: '2022 - 2023',
      location: 'Jakarta, Indonesia',
      role: 'Quality Assurance & Documentation Officer',
      image: 'https://z-cdn-media.chatglm.cn/files/1a933807-4080-4f0a-9004-fc599a431bc3_pasted_image_1759739649490.png?auth_key=1791355880-da68091d87ed4b9fb07a7d78c48394db-0-51a4dd536b27fa855ca0f7267a36b8d4'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      subtitle: 'Real-time Weather Monitoring',
      description: 'Dashboard cuaca real-time dengan data visualisasi',
      period: '2024',
      location: 'Jakarta, Indonesia',
      role: 'Full Stack Developer',
      image: 'https://z-cdn-media.chatglm.cn/files/510d3b23-1479-47b9-923a-2aec33d0644a_pasted_image_1759738037019.png?auth_key=1791355880-c17db07ca3d54f30b319b82c3ccd76c3-0-5bd5739bb7e4d8c8a489629419962761'
    }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isDark ? 'bg-gray-900/95 backdrop-blur-sm border-gray-800' : 'bg-white/95 backdrop-blur-sm border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Septio Nugroho
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'portfolio', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 glowing-nav ${activeSection === item ? (isDark ? 'text-amber-400 font-semibold' : 'text-amber-600 font-semibold') : (isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900')}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:rotate-12 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-800' : 'bg-white'} border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'portfolio', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md ${activeSection === item ? (isDark ? 'bg-gray-900 text-amber-400' : 'bg-gray-100 text-amber-600') : (isDark ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50')}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden reveal">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8 float-animation">
            <div className="relative inline-block">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl mx-auto pulse-glow">
                <img
                  src="/profile.jpg"
                  alt="Septio Nugroho"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-12 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent gradient-animate drop-shadow-lg" style={{fontFamily: 'var(--font-playfair-display)'}}>
            Septio Nugroho
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300">
            Staff Administrasi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Lihat Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 rounded-full font-semibold hover:bg-amber-50 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Hubungi Saya
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent reveal" style={{fontFamily: 'var(--font-playfair-display)'}}>
            Tentang Saya
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="reveal-left space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-500 shadow-lg">
                  <img
                    src="/profile.jpg"
                    alt="Septio Nugroho"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                    Septio Nugroho
                  </h3>
                  <p className={`text-lg ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                    Staff Administrasi
                  </p>
                </div>
              </div>
              <p className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Saya Septio Nugroho, profesional di bidang Kesehatan & Pelayanan dengan latar belakang pendidikan D3 Sistem Informasi. Berpengalaman lebih dari 3 tahun sebagai Staff Administrasi di Puskesmas Jakarta dengan fokus pada manajemen anggaran, akreditasi fasilitas kesehatan, dan pengembangan sistem monitoring.
              </p>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Saya bertanggung jawab dalam pelaksanaan instruksi dan pengelolaan anggaran untuk mendukung efektivitas operasional Puskesmas. Keahlian saya meliputi manajemen anggaran, monitoring penyerapan dana, akreditasi Puskesmas, pengelolaan SOP & SK, serta quality assurance dalam pelayanan kesehatan.
              </p>
            </div>
            
            <div className="reveal-right">
              <h3 className={`text-2xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Tanggung Jawab Utama
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`p-6 rounded-lg border ${isDark ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'} hover:shadow-md transition-all duration-300 reveal flex flex-col items-center justify-center`}
                    style={{transitionDelay: `${index * 100}ms`}}
                  >
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h4 className={`font-semibold text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent reveal" style={{fontFamily: 'var(--font-playfair-display)'}}>
            Portfolio Saya
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 reveal"
                style={{transitionDelay: `${index * 100}ms`, backgroundColor: isDark ? '#1f2937' : '#ffffff'}}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.image.startsWith('https') ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    {project.id === 1 ? (
                      <Link 
                        href="/portfolio/akreditasi-puskesmas"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
                      >
                        Lihat Detail
                      </Link>
                    ) : project.id === 2 ? (
                      <Link 
                        href="/portfolio/penyerapan-anggaran"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
                      >
                        Lihat Detail
                      </Link>
                    ) : project.id === 3 ? (
                      <Link 
                        href="/portfolio/re-akreditasi-puskesmas"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
                      >
                        Lihat Detail
                      </Link>
                    ) : project.id === 4 ? (
                      <Link 
                        href="/portfolio/weather-dashboard"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100"
                      >
                        Lihat Detail
                      </Link>
                    ) : (
                      <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium">
                        Lihat Detail
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className={`text-sm font-medium mb-2 ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                      {project.subtitle}
                    </p>
                  )}
                  <p className={`text-sm mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="space-y-1 text-xs">
                    <div className={`flex items-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="font-medium">Periode:</span>
                      <span>{project.period}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="font-medium">Lokasi:</span>
                      <span>{project.location}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      <span className="font-medium">Peran:</span>
                      <span>{project.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent reveal" style={{fontFamily: 'var(--font-playfair-display)'}}>
            Hubungi Saya
          </h2>
          
          {/* Direct Contact Buttons */}
          <div className="mb-12 reveal">
            <div className="text-center mb-6">
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Atau hubungi saya langsung melalui:
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Septio Nugroho. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/septio-nugroho/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/septioo_n" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .reveal-left {
          opacity: 0;
          transform: translateX(-30px);
          transition: all 0.8s ease;
        }
        .reveal-left.active {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(30px);
          transition: all 0.8s ease;
        }
        .reveal-right.active {
          opacity: 1;
          transform: translateX(0);
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.3); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.6); }
        }
        .gradient-animate {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glowing-nav {
          animation: glowing 2s ease-in-out infinite;
        }
        @keyframes glowing {
          0% { 
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.5),
                     0 0 10px rgba(251, 191, 36, 0.3),
                     0 0 15px rgba(251, 191, 36, 0.2);
          }
          50% { 
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.8),
                     0 0 20px rgba(251, 191, 36, 0.6),
                     0 0 30px rgba(251, 191, 36, 0.4);
          }
          100% { 
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.5),
                     0 0 10px rgba(251, 191, 36, 0.3),
                     0 0 15px rgba(251, 191, 36, 0.2);
          }
        }
      `}</style>
    </div>
  )
}