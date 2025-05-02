import AppLayout from '@/components/layout/AppLayout'
import VulnerabilitiesDetailsPage from './VulnerabilityDetailPage'

export default async function VulnerabilityDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <AppLayout>
      <VulnerabilitiesDetailsPage id={parseInt(id)} />
    </AppLayout>
  )
}
