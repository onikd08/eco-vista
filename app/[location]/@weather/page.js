import NotFound from "@/components/NotFound";
import WeatherComponent from "@/components/WeatherComponent";
import { resolveLocationInfo } from "@/lib/getLocationInfo";

export default async function WeatherPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolve = await resolveLocationInfo(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <WeatherComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NotFound location={location} />;
  }
}
