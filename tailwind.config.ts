import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

import { addDynamicIconSelectors } from '@iconify/tailwind'

export default <Partial<Config>>{
  content: [
    'content/**/*.md',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: 'i',
    }),
  ],
}
