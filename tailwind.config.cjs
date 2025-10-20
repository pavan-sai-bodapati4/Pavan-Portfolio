module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#06b6d4',
        brand: {
          DEFAULT: '#06b6d4',
          deep: '#0891b2'
        },
        glass: 'rgba(255,255,255,0.04)'
      },
      boxShadow: {
        'card-lg': '0 10px 30px -10px rgba(2,6,23,0.6), 0 2px 8px rgba(2,6,23,0.4)'
      }
    }
  },
  plugins: []
}