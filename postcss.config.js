// postcss.config.js
module.exports = {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {},
    // cssnano を明示的に無効化（Next.js が内部的に使用しているものも含め）
    ...(process.env.NODE_ENV === 'production' ? { cssnano: false } : {})
  }
}
