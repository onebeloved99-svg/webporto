import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Mock weather data for Jakarta
    const weatherData = {
      location: {
        name: 'Jakarta',
        country: 'Indonesia',
        lat: -6.2088,
        lon: 106.8456
      },
      current: {
        temperature: 28,
        humidity: 75,
        windSpeed: 12,
        windDirection: 'NE',
        pressure: 1010,
        visibility: 10,
        uvIndex: 8,
        condition: 'Partly Cloudy',
        icon: 'partly-cloudy',
        feelsLike: 31,
        dewPoint: 23
      },
      forecast: [
        {
          date: '2024-01-15',
          day: 'Senin',
          high: 30,
          low: 24,
          condition: 'Partly Cloudy',
          icon: 'partly-cloudy',
          precipitation: 20,
          humidity: 70
        },
        {
          date: '2024-01-16',
          day: 'Selasa',
          high: 31,
          low: 25,
          condition: 'Sunny',
          icon: 'sunny',
          precipitation: 10,
          humidity: 65
        },
        {
          date: '2024-01-17',
          day: 'Rabu',
          high: 29,
          low: 23,
          condition: 'Thunderstorm',
          icon: 'thunderstorm',
          precipitation: 80,
          humidity: 85
        },
        {
          date: '2024-01-18',
          day: 'Kamis',
          high: 28,
          low: 22,
          condition: 'Rainy',
          icon: 'rainy',
          precipitation: 60,
          humidity: 80
        },
        {
          date: '2024-01-19',
          day: 'Jumat',
          high: 30,
          low: 24,
          condition: 'Partly Cloudy',
          icon: 'partly-cloudy',
          precipitation: 25,
          humidity: 72
        }
      ],
      hourly: [
        { time: '12:00', temp: 28, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
        { time: '13:00', temp: 29, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
        { time: '14:00', temp: 30, condition: 'Sunny', icon: 'sunny' },
        { time: '15:00', temp: 30, condition: 'Sunny', icon: 'sunny' },
        { time: '16:00', temp: 29, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
        { time: '17:00', temp: 28, condition: 'Partly Cloudy', icon: 'partly-cloudy' },
        { time: '18:00', temp: 27, condition: 'Cloudy', icon: 'cloudy' },
        { time: '19:00', temp: 26, condition: 'Cloudy', icon: 'cloudy' }
      ],
      alerts: [
        {
          type: 'warning',
          title: 'Peringatan Hujan Lebat',
          description: 'Potensi hujan lebat disertai petir di wilayah Jakarta Selatan dan Jakarta Timur',
          validFrom: '2024-01-15T14:00:00Z',
          validTo: '2024-01-15T20:00:00Z'
        }
      ],
      lastUpdated: new Date().toISOString()
    }

    return NextResponse.json(weatherData)
  } catch (error) {
    console.error('Weather API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch weather data' },
      { status: 500 }
    )
  }
}