import { NextResponse } from "next/server";
import { getLocationByName } from "../location.utils";

export const GET = async (_request, { params }) => {
  const { name } = params;
  const data = getLocationByName(name);
  return NextResponse.json(data);
};
