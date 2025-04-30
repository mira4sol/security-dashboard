export const vulnerabilityExploitTypes = [
  'Signature Spoofing',
  'Price Manipulation',
  'Account Validation',
  'Reentrancy',
  'Flash Loan Attack',
  'Integer Overflow',
  'Logic Error',
  'Access Control',
  'Other',
] as const

export const vulnerabilityProtocolTypes = [
  'Bridge',
  'DEX',
  'Lending',
  'Stablecoin',
  'AMM',
  'Yield Farming',
  'NFT Marketplace',
  'Wallet',
  'Oracle',
  'Other',
] as const

export const vulnerabilityStatusTypes = [
  'draft',
  'pending_review',
  'published',
  'rejected',
] as const

// Statistics for the dashboard
export interface VulnerabilityStats {
  totalAmountStolen: number
  totalExploits: number
  exploitTypeDistribution: Record<string, number>
  monthlyTrend: Record<string, number>
  auditedProtocolsPercent: number
}
