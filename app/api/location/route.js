import { NextResponse } from "next/server";
import { getLocations } from "./location.utils";

export const GET = async (_request) => {
  const data = getLocations();
  return NextResponse.json(data);
};
