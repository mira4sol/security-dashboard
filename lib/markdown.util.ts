import { Vulnerability, VulnerabilityStats } from '@/types/markdown'
import { readdir, readFile } from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

export const getVulnerabilities = async (): Promise<Vulnerability[]> => {
  const dir = path.join(process.cwd(), 'data/vulnerabilities')
  const files = await readdir(dir)

  const vulnerabilities = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const filePath = path.join(dir, file)
        const content = await readFile(filePath, 'utf8')
        const { data, content: markdownContent } = matter(content)
        return {
          ...(data as Omit<Vulnerability, 'contentMarkdown' | 'id'>),
          id: parseInt(data.id),
          contentMarkdown: markdownContent,
        } as Vulnerability
      })
  )

  return vulnerabilities
}

export const getVulnerabilityById = async (
  id: number
): Promise<Vulnerability | null> => {
  const vulnerabilities = await getVulnerabilities()
  const found = vulnerabilities.find((v) => v.id === id)
  return found || null
}

export const getVulnerabilityStats = async (): Promise<VulnerabilityStats> => {
  const vulnerabilities = await getVulnerabilities()

  // Calculate total amount stolen
  const totalAmountStolen = vulnerabilities.reduce(
    (sum, v) => sum + v.amountStolen,
    0
  )

  // Calculate total exploits
  const totalExploits = vulnerabilities.length

  // Calculate exploit type distribution
  const exploitTypeDistribution: Record<string, number> = {}
  vulnerabilities.forEach((v) => {
    exploitTypeDistribution[v.exploitType] =
      (exploitTypeDistribution[v.exploitType] || 0) + 1
  })

  // Calculate monthly trend
  const monthlyTrend: Record<string, number> = {}
  vulnerabilities.forEach((v) => {
    const date = new Date(v.exploitDate)
    const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`
    monthlyTrend[monthYear] = (monthlyTrend[monthYear] || 0) + v.amountStolen
  })

  // Calculate percentage of audited protocols
  const auditedProtocols = vulnerabilities.filter(
    (v) =>
      v.auditor &&
      v.auditor.toLowerCase() !== 'unaudited' &&
      v.auditor.toLowerCase() !== 'n/a'
  ).length
  const auditedProtocolsPercent =
    totalExploits > 0 ? (auditedProtocols / totalExploits) * 100 : 0

  return {
    totalAmountStolen,
    totalExploits,
    exploitTypeDistribution,
    monthlyTrend,
    auditedProtocolsPercent,
  }
}
