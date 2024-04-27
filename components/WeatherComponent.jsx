import { getWeatherData } from "@/lib/getWeatherInfo";
import Image from "next/image";
import Card from "./Card";

const WeatherComponent = async ({ lat, lon }) => {
  const { main, description } = await getWeatherData(lat, lon);
  return (
    <Card className="card">
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
          width={20}
          height={20}
        />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  );
};

export default WeatherComponent;
