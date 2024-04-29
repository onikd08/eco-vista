"use client";
import { fetchLocationsList } from "@/lib/getLocationInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const [showBox, setShowBox] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const getLocationList = async () => {
      const list = await fetchLocationsList();
      setLocations(list);
    };
    getLocationList();
  }, []);
  return (
    <div className="relative">
      <button onClick={() => setShowBox(!showBox)}>
        <Image
          className="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
          width={36}
          height={36}
        />
      </button>
      {showBox && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations.length &&
              locations.map((location) => (
                <li key={location.location}>
                  <Link
                    href={`/${location.location}?latitude=${location.latitude}&longitude=${location.longitude}`}
                  >
                    {location.location}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
