import { NextRequest, NextResponse } from "next/server";
import data from "@/data/server.json";

export async function GET(request: NextRequest) {
  const serverId = request.nextUrl.searchParams.get("serverId") as string;

  let server;

  if (serverId !== "undefined") {
    server = data.find((d) => d.data.analytics[0].server === serverId);
  } else {
    server = data[0];
  }

  return NextResponse.json(server || data[0], { status: 200 });
}
