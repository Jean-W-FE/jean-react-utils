import { baseConfig } from './src/styles/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  ...baseConfig,
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
    },
  },
  plugins: [],
}

export default config