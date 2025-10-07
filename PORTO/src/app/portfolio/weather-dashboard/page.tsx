'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge, AlertTriangle, Thermometer, MapPin, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import { useTheme } from '@/hooks/use-theme'

interface WeatherData {
  location: {
    name: string
    country: string
    lat: number
    lon: number
  }
  current: {
    temperature: number
    humidity: number
    windSpeed: number
    windDirection: string
    pressure: number
    visibility: number
    uvIndex: number
    condition: string
    icon: string
    feelsLike: number
    dewPoint: number
  }
  forecast: Array<{
    date: string
    day: string
    high: number
    low: number
    condition: string
    icon: string
    precipitation: number
    humidity: number
  }>
  hourly: Array<{
    time: string
    temp: number
    condition: string
    icon: string
  }>
  alerts: Array<{
    type: string
    title: string
    description: string
    validFrom: string
    validTo: string
  }>
  lastUpdated: string
}

export default function WeatherDashboard() {
  const { isDark } = useTheme()
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const fetchWeatherData = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/weather')
      if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const getWeatherIcon = (icon: string) => {
    switch (icon) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />
      case 'partly-cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-600" />
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />
      case 'thunderstorm':
        return <CloudRain className="w-8 h-8 text-purple-500" />
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />
    }
  }

  if (loading) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <RefreshCw className="w-12 h-12 animate-spin mx-auto mb-4 text-amber-500" />
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Memuat data cuaca...</p>
        </div>
      </div>
    )
  }

  if (error || !weatherData) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{error || 'Data tidak tersedia'}</p>
          <button
            onClick={fetchWeatherData}
            className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/#portfolio"
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
              >
                <ArrowLeft className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
              </Link>
              <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Weather Dashboard
              </h1>
            </div>
            <button
              onClick={fetchWeatherData}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
              disabled={loading}
            >
              <RefreshCw className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-700'} ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Location Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {weatherData.location.name}, {weatherData.location.country}
            </h2>
          </div>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Terakhir diperbarui: {new Date(weatherData.lastUpdated).toLocaleString('id-ID')}
          </p>
        </div>

        {/* Weather Alert */}
        {weatherData.alerts.length > 0 && (
          <div className="mb-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">
                  {weatherData.alerts[0].title}
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  {weatherData.alerts[0].description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Current Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className={`lg:col-span-2 p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  {getWeatherIcon(weatherData.current.icon)}
                  <div>
                    <p className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {weatherData.current.temperature}°C
                    </p>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Terasa seperti {weatherData.current.feelsLike}°C
                    </p>
                  </div>
                </div>
                <p className={`text-xl font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {weatherData.current.condition}
                </p>
              </div>
              <div className="text-right">
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  UV Index: {weatherData.current.uvIndex}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Titik Embun: {weatherData.current.dewPoint}°C
                </p>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Detail Cuaca
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wind className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Angin</span>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {weatherData.current.windSpeed} km/h {weatherData.current.windDirection}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Kelembaban</span>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {weatherData.current.humidity}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gauge className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Tekanan</span>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {weatherData.current.pressure} hPa
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Jarak Pandang</span>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {weatherData.current.visibility} km
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg mb-8`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Perkiraan Per Jam
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {weatherData.hourly.map((hour, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-3 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} text-center`}
              >
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{hour.time}</p>
                <div className="my-2">{getWeatherIcon(hour.icon)}</div>
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {hour.temp}°C
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Perkiraan 5 Hari
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} text-center`}
              >
                <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{day.day}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{day.date}</p>
                <div className="my-3">{getWeatherIcon(day.icon)}</div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{day.condition}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {day.high}°
                  </span>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {day.low}°
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Droplets className="w-3 h-3 text-blue-500" />
                  <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {day.precipitation}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}