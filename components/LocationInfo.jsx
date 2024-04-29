import { getLocationData } from "@/lib/getLocationInfo";
import LanguageSwitcher from "./LanguageSwitcher";

const LocationInfo = async ({ lat, lon }) => {
  const { continent, countryName, principalSubdivision } =
    await getLocationData(lat, lon);
  const currentDate = new Date();

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {continent}
          </h2>
          <LanguageSwitcher />
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {countryName} | {principalSubdivision}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{currentDate.toLocaleTimeString()}</span>{" "}
          <span>{currentDate.toDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
