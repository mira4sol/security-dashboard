'use client'

import ExploitTypesChart from '@/components/dashboard/ExploitTypesChart'
import MonthlyTrendChart from '@/components/dashboard/MonthlyTrendChart'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { formatCurrency } from '@/lib/utils'
import { Vulnerability } from '@/types/markdown'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const AnalyticsPage = () => {
  const { data: vulnerabilities, isLoading } = useQuery<Vulnerability[]>({
    queryKey: ['/api/vulnerabilities'],
  })

  // const { data: stats, isStatLoading } = useQuery<VulnerabilityStats>({
  //   queryKey: ['stats'], // Unique key for this data fetch
  //   queryFn: async () => {
  //     const data = await getVulnerabilityStats()
  //     return data
  //   },
  // })

  // Calculate stats
  const stats = React.useMemo(() => {
    if (!vulnerabilities || vulnerabilities.length === 0) return null

    const totalAmountStolen = vulnerabilities.reduce(
      (sum, item) => sum + item.amountStolen,
      0
    )

    // Exploit type distribution
    const exploitTypeCount: Record<string, number> = {}
    const exploitTypeAmount: Record<string, number> = {}
    vulnerabilities.forEach((v) => {
      exploitTypeCount[v.exploitType] =
        (exploitTypeCount[v.exploitType] || 0) + 1
      exploitTypeAmount[v.exploitType] =
        (exploitTypeAmount[v.exploitType] || 0) + v.amountStolen
    })

    // Protocol type distribution
    const protocolTypeCount: Record<string, number> = {}
    const protocolTypeAmount: Record<string, number> = {}
    vulnerabilities.forEach((v) => {
      protocolTypeCount[v.protocolType] =
        (protocolTypeCount[v.protocolType] || 0) + 1
      protocolTypeAmount[v.protocolType] =
        (protocolTypeAmount[v.protocolType] || 0) + v.amountStolen
    })

    // Monthly trend
    const monthlyData: Record<string, number> = {}
    vulnerabilities.forEach((v) => {
      const date = new Date(v.exploitDate)
      const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`
      monthlyData[monthYear] = (monthlyData[monthYear] || 0) + v.amountStolen
    })

    // Audited vs unaudited
    const auditedVulnerabilities = vulnerabilities.filter(
      (v) =>
        v.auditor &&
        v.auditor.toLowerCase() !== 'unaudited' &&
        v.auditor.toLowerCase() !== 'n/a'
    )

    const auditedAmount = auditedVulnerabilities.reduce(
      (sum, item) => sum + item.amountStolen,
      0
    )

    return {
      totalAmountStolen,
      exploitTypeCount,
      exploitTypeAmount,
      protocolTypeCount,
      protocolTypeAmount,
      monthlyData,
      auditedCount: auditedVulnerabilities.length,
      auditedAmount,
      totalCount: vulnerabilities.length,
    }
  }, [vulnerabilities])

  // Format data for charts
  const exploitTypeData = React.useMemo(() => {
    if (!stats) return []
    return Object.entries(stats.exploitTypeCount).map(([type, count]) => ({
      type,
      count,
    }))
  }, [stats])

  const monthlyTrendData = React.useMemo(() => {
    if (!stats) return []

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    const trends = Object.entries(stats.monthlyData)
      .map(([key, value]) => {
        const [year, monthNum] = key.split('-')
        const monthLabel = `${monthNames[parseInt(monthNum) - 1]} ${year.slice(
          2
        )}`
        return {
          month: monthLabel,
          amount: value || 0,
          // Add sortKey for correct sorting
          sortKey: `${year}-${monthNum.padStart(2, '0')}`,
        }
      })
      .sort((a, b) => a.sortKey.localeCompare(b.sortKey)) // Sort by year and month
      .map(({ month, amount }) => ({ month, amount })) // Remove the sortKey from final output

    return trends
  }, [stats])

  const protocolTypeData = React.useMemo(() => {
    if (!stats) return []
    return Object.entries(stats.protocolTypeCount).map(([type, count]) => ({
      type,
      count,
    }))
  }, [stats])

  return (
    <div className='relative'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='gradient-circle h-[800px] w-[800px] absolute top-0 left-1/2 -translate-x-1/2'></div>
      </div>

      <header className='relative z-10 p-6 border-b border-border'>
        <h1 className='text-2xl font-mono font-bold'>Analytics Dashboard</h1>
        <p className='text-gray-400 text-sm'>
          Visualize Solana security trends and patterns
        </p>
      </header>

      <div className='relative z-10 p-6 space-y-8'>
        {/* Overview Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card>
            <CardContent className='pt-6'>
              <div className='text-center'>
                <h3 className='text-gray-400 text-sm'>Total Funds Stolen</h3>
                {isLoading ? (
                  <Skeleton className='h-10 w-32 mx-auto mt-2' />
                ) : (
                  <p className='text-3xl font-mono font-bold mt-2'>
                    {formatCurrency(stats?.totalAmountStolen || 0)}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='text-center'>
                <h3 className='text-gray-400 text-sm'>Average Hack Size</h3>
                {isLoading ? (
                  <Skeleton className='h-10 w-32 mx-auto mt-2' />
                ) : (
                  <p className='text-3xl font-mono font-bold mt-2'>
                    {formatCurrency(
                      (stats?.totalAmountStolen || 0) / (stats?.totalCount || 1)
                    )}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='text-center'>
                <h3 className='text-gray-400 text-sm'>Audited vs Unaudited</h3>
                {isLoading ? (
                  <Skeleton className='h-10 w-32 mx-auto mt-2' />
                ) : (
                  <p className='text-3xl font-mono font-bold mt-2'>
                    {stats
                      ? `${Math.round(
                          (stats.auditedCount / stats.totalCount) * 100
                        )}%`
                      : '0%'}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className='pt-6'>
              <div className='text-center'>
                <h3 className='text-gray-400 text-sm'>Most Common Exploit</h3>
                {isLoading ? (
                  <Skeleton className='h-10 w-32 mx-auto mt-2' />
                ) : (
                  <p className='text-xl font-mono font-bold mt-2'>
                    {stats && Object.entries(stats.exploitTypeCount).length > 0
                      ? Object.entries(stats.exploitTypeCount).sort(
                          (a, b) => b[1] - a[1]
                        )[0][0]
                      : 'N/A'}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <ExploitTypesChart data={exploitTypeData} />
          <MonthlyTrendChart data={monthlyTrendData} />
        </div>

        {/* Protocol Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className='font-mono'>
              Protocol Types Most Affected
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Skeleton className='h-[200px] w-full' />
            ) : (
              <div className='space-y-4'>
                {stats &&
                  Object.entries(stats.protocolTypeAmount)
                    .sort((a, b) => b[1] - a[1])
                    .map(([type, amount], index) => (
                      <div key={type} className='space-y-2'>
                        <div className='flex justify-between'>
                          <span className='font-mono'>{type}</span>
                          <span className='text-gray-400'>
                            {formatCurrency(amount)}
                          </span>
                        </div>
                        <div className='h-2 bg-muted rounded-full overflow-hidden'>
                          <div
                            className='h-2 bg-primary rounded-full'
                            style={{
                              width: `${
                                (amount / (stats.totalAmountStolen || 1)) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}

                {(!stats ||
                  Object.keys(stats.protocolTypeAmount).length === 0) && (
                  <div className='text-center py-8 text-gray-400'>
                    <p>No data available</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Advanced Analytics */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <Card>
            <CardHeader>
              <CardTitle className='font-mono'>
                Most Costly Exploit Types
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className='h-[200px] w-full' />
              ) : (
                <div className='space-y-4'>
                  {stats &&
                    Object.entries(stats.exploitTypeAmount)
                      .sort((a, b) => b[1] - a[1])
                      .map(([type, amount], index) => (
                        <div key={type} className='space-y-2'>
                          <div className='flex justify-between'>
                            <span className='font-mono'>{type}</span>
                            <span className='text-gray-400'>
                              {formatCurrency(amount)}
                            </span>
                          </div>
                          <div className='h-2 bg-muted rounded-full overflow-hidden'>
                            <div
                              className='h-2 bg-secondary rounded-full'
                              style={{
                                width: `${
                                  (amount / (stats.totalAmountStolen || 1)) *
                                  100
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}

                  {(!stats ||
                    Object.keys(stats.exploitTypeAmount).length === 0) && (
                    <div className='text-center py-8 text-gray-400'>
                      <p>No data available</p>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className='font-mono'>
                Audit Impact on Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className='h-[200px] w-full' />
              ) : (
                <div className='space-y-6'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <h3 className='text-gray-400 text-sm'>
                        Audited Protocols
                      </h3>
                      <p className='text-xl font-mono font-bold mt-1'>
                        {stats ? stats.auditedCount : 0}
                      </p>
                      <p className='text-sm text-gray-400'>
                        {stats
                          ? `${Math.round(
                              (stats.auditedCount / stats.totalCount) * 100
                            )}%`
                          : '0%'}{' '}
                        of hacks
                      </p>
                    </div>
                    <div>
                      <h3 className='text-gray-400 text-sm'>
                        Funds Lost by Audited
                      </h3>
                      <p className='text-xl font-mono font-bold mt-1'>
                        {formatCurrency(stats?.auditedAmount || 0)}
                      </p>
                      <p className='text-sm text-gray-400'>
                        {stats
                          ? `${Math.round(
                              (stats.auditedAmount / stats.totalAmountStolen) *
                                100
                            )}%`
                          : '0%'}{' '}
                        of total
                      </p>
                    </div>
                  </div>

                  <div className='pt-4'>
                    <h3 className='text-gray-400 text-sm mb-2'>
                      Audit Effectiveness
                    </h3>
                    <div className='h-4 bg-muted rounded-full overflow-hidden flex'>
                      <div
                        className='h-4 bg-destructive rounded-l-full'
                        style={{
                          width: `${
                            stats
                              ? (stats.auditedAmount /
                                  stats.totalAmountStolen) *
                                100
                              : 0
                          }%`,
                        }}
                      ></div>
                      <div
                        className='h-4 bg-primary'
                        style={{
                          width: `${
                            stats
                              ? 100 -
                                (stats.auditedAmount /
                                  stats.totalAmountStolen) *
                                  100
                              : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className='flex justify-between text-xs mt-1'>
                      <span>Audited losses</span>
                      <span>Unaudited losses</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage
