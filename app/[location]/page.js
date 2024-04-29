import LocationInfo from "@/components/LocationInfo";

export default function LocationPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <LocationInfo lat={latitude} lon={longitude} />;
}
