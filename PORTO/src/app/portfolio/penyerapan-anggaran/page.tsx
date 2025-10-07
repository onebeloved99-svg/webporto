'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Calendar, MapPin, User, FileText, Award, CheckCircle, Clock, Users, Target, BookOpen, Code, Database, Zap, Shield, Smartphone, Mail, MessageCircle, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/hooks/use-theme'

export default function PenyerapanAnggaranDetail() {
  const { isDark, toggleTheme } = useTheme()

  const projectDetails = {
    title: 'Penyerapan Anggaran Tahun 2020/2021',
    subtitle: 'Top 10 Puskesmas dengan Penyerapan Anggaran Terbesar',
    duration: '2020',
    location: 'Kota Bekasi',
    role: 'Staff Administrasi Keuangan',
    status: 'Completed',
    category: 'Budget Management System'
  }

  const responsibilities = [
    'Mengelola administrasi keuangan dalam program Bantuan Operasional Kesehatan (BOK) sesuai dengan ketentuan dan pedoman anggaran.',
    'Berkoordinasi dengan tim keuangan lainnya (BOK, JKN, dan BLUD) dalam pelaksanaan kegiatan keuangan dan pelaporan realisasi anggaran.',
    'Melaksanakan instruksi dan tanggung jawab yang diberikan oleh Kepala UPTD Puskesmas Kotabaru untuk mendukung efektivitas pengelolaan dana publik.',
    'Menyusun dan memastikan ketepatan laporan penggunaan anggaran secara periodik agar sesuai dengan target penyerapan yang telah ditetapkan.',
    'Berperan aktif dalam merealisasikan penyerapan anggaran secara maksimal, sebagai bentuk komitmen terhadap akuntabilitas dan efisiensi penggunaan anggaran.',
    'Berkontribusi terhadap pencapaian prestasi unit kerja, sehingga Puskesmas Kotabaru berhasil masuk dalam 10 besar Puskesmas terbaik se-Kota Bekasi dalam kategori kinerja penyerapan anggaran.'
  ]

  const skills = [
    'Manajemen Kesehatan',
    'Standar Akreditasi',
    'SOP Development',
    'Dokumentasi Medis',
    'Leadership',
    'Quality Assurance'
  ]

  const achievements = [
    {
      icon: <Award className="w-5 h-5" />,
      title: 'Penyerapan Anggaran Terbesar',
      description: 'Berhasil masuk kedalam top 10 Puskesmas dengan penyerapan anggaran terbesar'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Standar Terpenuhi',
      description: '91,30% Anggaran terserap'
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Tim Terlatih',
      description: 'Menjadi staf profesional dengan tim terlatih'
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Efisiensi Proses',
      description: 'Meningkatkan efisiensi proses penyerapan anggaran 30% lebih cepat'
    }
  ]

  const challenges = [
    {
      title: 'Pelaksanaan Kegiatan dan Penggunaan Anggaran',
      description: 'Menjalankan kegiatan sesuai dengan rencana kerja dan memastikan setiap transaksi keuangan terdokumentasi secara akurat.'
    },
    {
      title: 'Monitoring dan Evaluasi',
      description: 'Melakukan pemantauan terhadap realisasi anggaran serta menindaklanjuti hambatan yang muncul selama pelaksanaan.'
    },
    {
      title: 'Penyusunan Laporan Keuangan',
      description: 'Mengompilasi laporan realisasi anggaran untuk dilaporkan kepada Kepala UPTD Puskesmas Kotabaru secara tepat waktu dan akuntabel.'
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-black/10 dark:bg-black/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
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
                  <p className={`text-lg leading-relaxed text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Pada tahun anggaran 2020/2021, kami Tim Keuangan Puskesmas Kotabaru pada saat itu yang terbagi menjadi beberapa kepala Bendahara Keuangan yaitu BOK, JKN, dan BLUD bekerja keras untuk mencapai target penyerapan anggaran yang telah di tetapkan oleh Kepala UPTD Puskesmas Kotabaru.
                  </p>
                  <p className={`text-lg leading-relaxed mt-4 text-justify ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Saya yang pada saat itu bertugas sebagai Staff Administrasi Keuangan tergabung dalam tim BOK (Bantuan Operasional Kesehatan) Puskesmas beserta dengan Tim Keuangan lainnya, kami Alhamdulillah berhasil menyelesaikan tugas yang diberikan oleh Kepala UPTD Puskesmas Kotabaru pada saat itu. Dengan penyerapan Anggaran mencapai 91,30% membuat Puskesmas kami masuk kedalam Top 10 dari 41 Puskesmas se-Kota Bekasi.
                  </p>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Tanggung Jawab Utama
                </h2>
                <div className="space-y-4">
                  {responsibilities.map((responsibility, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-4 p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} hover:shadow-md transition-all duration-300`}
                    >
                      <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {responsibility}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div>
                <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{fontFamily: 'var(--font-playfair-display)'}}>
                  Proses Implementasi
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

              {/* Skills */}
              <div className={`p-6 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Keahlian yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm rounded-full ${isDark ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {skill}
                    </span>
                  ))}
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