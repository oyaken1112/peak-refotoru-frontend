/** @type {import('next').NextConfig} */
export default async () => {
  let userConfig = undefined;

  try {
    userConfig = await import('./v0-user-next.config.mjs');
  } catch (e) {
    try {
      userConfig = await import('./v0-user-next.config');
    } catch (innerError) {
      // ignore error
    }
  }

  const nextConfig = {
    output: 'standalone', // デプロイ時に追加
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    experimental: {
      webpackBuildWorker: true,
      parallelServerBuildTraces: true,
      parallelServerCompiles: true,
    },
  };

  if (userConfig) {
    const config = userConfig.default || userConfig;

    for (const key in config) {
      if (
        typeof nextConfig[key] === 'object' &&
        !Array.isArray(nextConfig[key])
      ) {
        nextConfig[key] = {
          ...nextConfig[key],
          ...config[key],
        };
      } else {
        nextConfig[key] = config[key];
      }
    }
  }

  return nextConfig;
};
