/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_KEY_SUPABASEURL: process.env.NEXT_PUBLIC_API_KEY_SUPABASEURL,
        NEXT_PUBLIC_API_KEY_SUPABASEKEY: process.env.NEXT_PUBLIC_API_KEY_SUPABASEKEY,
      },
};

export default nextConfig;
