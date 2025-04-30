interface collaborator {
  username: string
  url: string
}

export interface Vulnerability {
  id: number
  title: string
  protocol: string
  protocolType: string
  exploitDate: string
  amountStolen: number
  exploitType: string
  technique: string
  status: string
  contentMarkdown: string
  contributors: Array<collaborator>
  auditor: string
}

export interface VulnerabilityStats {
  totalAmountStolen: number
  totalExploits: number
  exploitTypeDistribution: Record<string, number>
  monthlyTrend: Record<string, number>
  auditedProtocolsPercent: number
}
