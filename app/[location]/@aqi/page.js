import AQIComponent from "@/components/AQIComponent";
import NotFound from "@/components/NotFound";
import { resolveLocationInfo } from "@/lib/getLocationInfo";

export default async function AQIPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolve = await resolveLocationInfo(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <AQIComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NotFound location={location} />;
  }
}
