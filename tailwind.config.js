/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        //main colors
        'midnightNavy': '#0A122A',
        'astralBlue': '#24476C',
        'uranianBlue': '#A0DDFF',
        'eclipseBlack': '#1B1B1B',
        'moonlightGray': '#A8A9AD',
        'stardustWhite': '#E6E8E6',

        primary: '#3B82F6',
        secondary: '#10B981',
        'primaryText': '#6B7280',
        'secondaryText': '#9CA3AF',
        white: '#FFFFFF',

        // Dark Colors
        'dark-1': '#0A0E27',
        'dark-2': '#1A202E',
        'dark-3': '#2D3748',
        'dark-4': '#374151',
        'dark-5': '#4B5563',
        'dark-6': '#9CA3AF',
        'dark-7': '#D1D5DB',
        'dark-8': '#E5E7EB',

        // Gray Colors
        'gray-1': '#F3F4F6',
        'gray-2': '#E5E7EB',
        'gray-3': '#D1D5DB',
        'gray-4': '#9CA3AF',
        'gray-5': '#6B7280',
        'gray-6': '#4B5563',
        'gray-7': '#374151',

        // Yellow Colors
        yellow: '#F59E0B',
        'yellow-dark': '#D97706',
        'yellow-dark-2': '#EA580C',
        'yellow-light': '#FCD34D',
        'yellow-light-2': '#FDE68A',
        'yellow-light-3': '#FEF3C7',
        'yellow-light-4': '#FFFBEB',

        // Orange Colors
        orange: '#F97316',
        'orange-dark': '#EA580C',
        'orange-light': '#FB923C',
        'orange-light-2': '#FDBA74',
        'orange-light-3': '#FED7AA',
        'orange-light-4': '#FFEDD5',
        'orange-light-5': '#FFF7ED',

        // Red Colors
        red: '#EF4444',
        'red-dark': '#DC2626',
        'red-light': '#F87171',
        'red-light-2': '#FCA5A5',
        'red-light-3': '#FECACA',
        'red-light-4': '#FEE2E2',
        'red-light-5': '#FEF2F2',

        // Pink Colors
        pink: '#D946EF',
        'pink-dark': '#C026D3',
        'pink-light': '#E879F9',
        'pink-light-2': '#F0ABFC',
        'pink-light-3': '#F5D0FE',
        'pink-light-4': '#FAE8FF',

        // Purple Colors
        purple: '#8B5CF6',
        'purple-dark': '#7C3AED',
        'purple-dark-2': '#6D28D9',
        'purple-light': '#A78BFA',
        'purple-light-2': '#C4B5FD',
        'purple-light-3': '#DDD6FE',
        'purple-light-4': '#EDE9FE',

        // Blue Colors
        blue: '#3B82F6',
        'blue-dark': '#2563EB',
        'blue-dark-2': '#1D4ED8',
        'blue-light': '#60A5FA',
        'blue-light-2': '#93C5FD',
        'blue-light-3': '#BFDBFE',
        'blue-light-4': '#DBEAFE',

        // Cyan Colors
        cyan: '#06B6D4',
        'cyan-dark': '#0891B2',
        'cyan-light': '#22D3EE',
        'cyan-light-2': '#67E8F9',
        'cyan-light-3': '#A5F3FC',

        // Teal Colors
        teal: '#14B8A6',
        'teal-dark': '#0D9488',
        'teal-light': '#2DD4BF',
        'teal-light-2': '#5EEAD4',
        'teal-light-3': '#99F6E4',

        // Green Colors
        green: '#22C55E',
        'green-dark': '#16A34A',
        'green-light': '#4ADE80',
        'green-light-2': '#86EFAC',
        'green-light-3': '#BBF7D0',
        'green-light-4': '#D1FAE5',
        'green-light-5': '#DCFCE7',
      },
    },
  },
  plugins: [],
}
