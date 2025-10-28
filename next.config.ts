import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = { reactStrictMode: true, swcMinify: true };

export default withContentlayer(nextConfig);
