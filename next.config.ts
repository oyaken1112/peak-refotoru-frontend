/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Azure App Service で必要
  eslint: {
    ignoreDuringBuilds: true, // 本番ビルドでは ESLint を無視
  },
  typescript: {
    ignoreBuildErrors: true, // 型エラーでビルドが止まらないように
  },
  images: {
    unoptimized: true, // Image 最適化を無効（Next.jsの外部ホストでデプロイする場合に便利）
  },
  swcMinify: false, // SWC による JS/CSS の圧縮を無効（cssnano-simple のエラー防止）
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    optimizeCss: false, // CSS 最適化を無効（cssnano-simple エラーの原因）
  },
};

export default nextConfig;
