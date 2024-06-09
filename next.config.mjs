/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "academic-robin-982.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" }
		],
	},
};

export default nextConfig;