import { getVulnerabilityStats } from '@/lib/markdown.util'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const stats = await getVulnerabilityStats()
    return NextResponse.json(stats)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load stats' }, { status: 500 })
  }
}
