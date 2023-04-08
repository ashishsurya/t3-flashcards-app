import { getServerSession } from "next-auth";
import { NextResponse, type NextRequest } from "next/server";

export default  function middleware(req: NextRequest) {
  console.log("MIDDLEWARE RUNNING")
  // const session = await getServerSession();

  // if (!session) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}
