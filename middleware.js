import { NextResponse } from "next/server";

export function middleware(req) {
    const isLaunched = false;
    const { pathname } = req.nextUrl;

    // ✅ allow Next.js internals & static files
    if (
        pathname.startsWith("/_next") ||   // Next.js files
        pathname.startsWith("/api") ||     // API routes
        pathname.startsWith("/image") ||   // your images folder
        pathname === "/favicon.ico" ||     // favicon
        pathname.includes(".")             // any file (.js, .css, .png, etc)
    ) {
        return NextResponse.next();
    }

    // ✅ allow coming-soon page
    if (pathname === "/coming-soon" && isLaunched === false) {
        return NextResponse.next();
    }

    // 🚧 redirect everything else
    if (!isLaunched) {
        return NextResponse.redirect(new URL("/coming-soon", req.nextUrl));
    }

    return NextResponse.next();
}