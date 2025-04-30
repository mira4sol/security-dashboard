import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Chart from 'chart.js/auto'
import { useEffect, useRef } from 'react'

interface MonthlyTrendChartProps {
  data: {
    month: string
    amount: number
  }[]
}

const MonthlyTrendChart = ({ data }: MonthlyTrendChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current || !data.length) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext('2d')
    if (!ctx) return

    const months = data.map((item) => item.month)
    const amounts = data.map((item) => item.amount / 1000000) // Convert to millions

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Amount Stolen (in millions $)',
            data: amounts,
            borderColor: '#04D182',
            backgroundColor: 'rgba(4, 209, 130, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#04D182',
            pointBorderColor: '#0F1217',
            pointBorderWidth: 2,
            pointRadius: 4,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(75, 85, 99, 0.1)',
              // drawBorder: false,
            },
            ticks: {
              color: '#94A3B8',
              font: {
                family: "'Inter', sans-serif",
                size: 12,
              },
            },
          },
          x: {
            grid: {
              display: false,
              // drawBorder: false,
            },
            ticks: {
              color: '#94A3B8',
              font: {
                family: "'Inter', sans-serif",
                size: 12,
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [data])

  return (
    <Card>
      <CardHeader className='pb-2'>
        <CardTitle className='text-base font-mono'>
          Monthly Exploit Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='h-[280px] w-full'>
          <canvas ref={chartRef}></canvas>
        </div>
      </CardContent>
    </Card>
  )
}

export default MonthlyTrendChart
