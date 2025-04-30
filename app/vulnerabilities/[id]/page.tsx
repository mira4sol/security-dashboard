import VulnerabilitiesDetailsPage from './VulnerabilityDetailPage'

export default async function VulnerabilityDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return <VulnerabilitiesDetailsPage id={parseInt(id)} />
}
