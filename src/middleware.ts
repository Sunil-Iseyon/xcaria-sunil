import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/src/utils/supabase/server";
// import { updateSession } from "@/src/utils/supabase/middleware";

export async function middleware(request: NextRequest) {

  const path = request.nextUrl.pathname;

  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  const isPublicPath = path === '/login' ||
   path === '/signup'

   const token = request.cookies.get('token')?.value || '';

   if(isPublicPath && data?.user){
    return NextResponse.redirect(new URL ('/' , request.url))
   }

   if(!isPublicPath && !data?.user) {
    return NextResponse.redirect(new URL('/login', request.url))
   }

  // return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/(?!_next/static)",
    // '/',
    // '/login',
    // '/signup',
    '/blog',
    '/showcase',
    '/projects',
    
    "/showcase/:path*"
  ],
};
