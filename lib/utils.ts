import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: string | Date): string {
  try {
    const dateObj = new Date(date)
    // Check if date is valid
    if (isNaN(dateObj.getTime())) {
      return 'Invalid date'
    }
    return dateObj.toISOString().split('T')[0]
  } catch (error) {
    console.error('Error formatting date:', error)
    return 'Invalid date'
  }
}

export function getBadgeVariantForExploitType(
  exploitType: string
):
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'signature'
  | 'price'
  | 'validation'
  | 'reentrancy'
  | 'other' {
  const map: Record<
    string,
    'signature' | 'price' | 'validation' | 'reentrancy'
  > = {
    'Signature Spoofing': 'signature',
    'Price Manipulation': 'price',
    'Account Validation': 'validation',
    Reentrancy: 'reentrancy',
  }

  return map[exploitType] || 'other'
}

export const colorMap: Record<string, string> = {
  'Signature Spoofing': '#2563EB',
  Vulnerability: '#25eb39',
  'Price Manipulation': '#F59E0B',
  'Account Validation': '#EF4444',
  Reentrancy: '#8B5CF6',
  'Flash Loan Attack': '#EC4899',
  'Integer Overflow': '#6366F1',
  'Logic Error': '#F43F5E',
  'Access Control': '#0EA5E9',
  'Oracle Attack': '#2d4a57',
  Other: '#10B981',
}

export function truncateString(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str
  return str.substring(0, maxLength) + '...'
}
