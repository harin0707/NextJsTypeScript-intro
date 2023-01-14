/** @type {import('next').NextConfig} */

const API_KEY = "724b8aaa1e15cd140090c718dab6ece0";

const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/old-blog/:path",
        destination: "/new-blog/:path",
        permanent: false,
      },
    ];
  },

  async rewrites(){
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      }
    ]
    

  },
}
module.exports = nextConfig;


