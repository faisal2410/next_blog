/** @type {import('next').NextConfig} */

const config = require("./config");

const nextConfig = {
    env: {
        DB_URI: config.DB_URI,
        API: config.API,
        NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
        GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,


    }


}

module.exports = nextConfig
