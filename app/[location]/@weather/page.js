import WeatherComponent from "@/components/WeatherComponent";

export default function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <WeatherComponent lat={latitude} lon={longitude} />;
}
