import { NextRequest, NextResponse } from "next/server";
import data from "@/data/server.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    data.map((server) => server.data.analytics[0].server),
    { status: 200 }
  );
}
