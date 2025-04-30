import { getVulnerabilityById } from '@/lib/markdown.util'
import { NextResponse } from 'next/server'

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    if (!params.id)
      return NextResponse.json(
        { error: 'Param "id" is missing' },
        { status: 500 }
      )

    const vulnerabilities = await getVulnerabilityById(parseInt(params.id))
    return NextResponse.json(vulnerabilities)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load vulnerabilities' },
      { status: 500 }
    )
  }
}
