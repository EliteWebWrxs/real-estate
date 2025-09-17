import { notFound } from "next/navigation"
import { sanityClient } from "@/lib/sanity"
import { PropertyDetails } from "@/components/property-details"

interface PropertyPageProps {
  params: {
    slug: string
  }
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await sanityClient.getPropertyBySlug(params.slug)

  if (!property) {
    notFound()
  }

  return <PropertyDetails property={property} />
}

export async function generateStaticParams() {
  const properties = await sanityClient.getFeaturedProperties()

  return properties.map((property) => ({
    slug: property.slug.current,
  }))
}
