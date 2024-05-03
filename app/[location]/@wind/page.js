import NotFound from "@/components/NotFound";
import WindComponent from "@/components/WindComponent";
import { resolveLocationInfo } from "@/lib/getLocationInfo";

export default async function AQIPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolve = await resolveLocationInfo(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <WindComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NotFound location={location} />;
  }
}
