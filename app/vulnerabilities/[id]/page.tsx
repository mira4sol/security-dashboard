import VulnerabilitiesDetailsPage from './VulnerabilityDetailPage'

export default function VulnerabilityDetail({
  params,
}: {
  params: { id: string }
}) {
  return <VulnerabilitiesDetailsPage id={parseInt(params.id)} />
}
