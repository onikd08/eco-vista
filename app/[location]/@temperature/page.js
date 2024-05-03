import NotFound from "@/components/NotFound";
import TemperatureComponent from "@/components/TemperatureComponent";
import { resolveLocationInfo } from "@/lib/getLocationInfo";

export default async function TemperaturePage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  const resolve = await resolveLocationInfo(location, latitude, longitude);
  if (resolve?.lat && resolve?.lon) {
    return <TemperatureComponent lat={resolve.lat} lon={resolve.lon} />;
  } else {
    return <NotFound location={location} />;
  }
}
