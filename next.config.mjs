// next.config.mjs
export default {
    target: 'serverless',  // This ensures SSR is supported on AWS Amplify
    experimental: {
        outputStandalone: true, // Ensures standalone output for SSR
    },
    reactStrictMode: true,  // Optional: Helps with React optimizations
};
