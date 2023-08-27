
export { default } from "next-auth/middleware";


export const config = {
    matcher: [
        "/dashboard/user/:path*",
        "/dashboard/admin/:path*",
        "/api/user/:path*",
        "/api/admin/:path*",
    ],
};

