import AQIComponent from "@/components/AQIComponent";

export default function AQIPage({
  params: { location },
  searchParams: { longitude, latitude },
}) {
  return <AQIComponent lat={latitude} lon={longitude} />;
}
