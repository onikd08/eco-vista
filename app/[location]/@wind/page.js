import WindComponent from "@/components/WindComponent";

export default function WindPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <WindComponent lat={latitude} lon={longitude} />;
}
