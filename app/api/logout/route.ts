import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );

  response.cookies.delete("token");

  return response;
}
