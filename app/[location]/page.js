import LocationInfo from "@/components/LocationInfo";
import NotFound from "@/components/NotFound";
import { resolveLocationInfo } from "@/lib/getLocationInfo";

export default async function LocationPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  const resolve = await resolveLocationInfo(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <LocationInfo lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NotFound location={location} />;
  }
}
