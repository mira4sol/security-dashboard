import { getVulnerabilityById } from '@/lib/markdown.util'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: Request | NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    if (!id)
      return NextResponse.json(
        { error: 'Param "id" is missing' },
        { status: 500 }
      )

    const vulnerability = await getVulnerabilityById(parseInt(id))
    return NextResponse.json(vulnerability)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load vulnerabilities' },
      { status: 500 }
    )
  }
}
