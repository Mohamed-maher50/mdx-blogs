import type { NextConfig } from "next";
const { withContentlayer } = require("next-contentlayer2");
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = { reactStrictMode: true };

export default withContentlayer(nextConfig);
