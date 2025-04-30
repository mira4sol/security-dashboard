import { getVulnerabilities } from '@/lib/markdown.util'
import { NextResponse } from 'next/server'

export const GET = async () => {
  try {
    const vulnerabilities = await getVulnerabilities()
    return NextResponse.json(vulnerabilities)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load vulnerabilities' },
      { status: 500 }
    )
  }
}
