/** @type {import('next').NextConfig} */

const config = require("./config");

const nextConfig = {
    env: {
        DB_URI: config.DB_URI,
        API: config.API,
        NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
        GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
        CLOUDINARY_UPLOAD_PRESET: config.CLOUDINARY_UPLOAD_PRESET,
        CLOUDINARY_URL: config.CLOUDINARY_URL,


    }


}

module.exports = nextConfig
