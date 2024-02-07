import * as jwt from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === "test" && password === "test") {
    const user = {
      id: "4f52d570-76d0-4ee6-8c98-56c3721849c9",
      username: "test",
    };
    const secret = new TextEncoder().encode("test");
    const alg = "HS256";
    const token = await new jwt.SignJWT({ userId: user.id })
      .setProtectedHeader({ alg })
      .sign(secret);

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
    });

    return response;
  }
  return NextResponse.json(
    { message: "Incorrect username or password" },
    { status: 401 }
  );
}
