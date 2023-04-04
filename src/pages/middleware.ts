import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
