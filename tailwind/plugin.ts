import plugin from 'tailwindcss/plugin'

export const button = plugin(({ addUtilities }) => {
  addUtilities({
    '.btn': {
      '@apply px-2 py-1 border border-gray-darkest bg-white hoverable rounded-md hover:bg-gray-light':
        {}
    },
    '.btn-block': {
      '@apply w-full': {}
    }
  })

  const colors = ['primary']

  const colorButtons = colors.map((color) => ({
    [`.btn-${color}`]: {
      [`@apply text-white bg-${color} border-${color} hover:bg-${color}-light`]: {}
    },
    [`.btn-${color}-outline`]: {
      [`@apply text-gray-darkest `]: {}
    }
  }))

  addUtilities(colorButtons)
})

export const ratio = plugin(({ addUtilities }) => {
  const ratio = [
    [1, 1],
    [5, 4],
    [4, 3],
    [3, 2],
    [5, 3],
    [2, 1],
    [3, 1],
    [16, 5],
    [16, 9],
    [21, 9],
    [32, 9],
    [4, 5],
    [3, 4],
    [2, 3],
    [3, 5],
    [1, 2],
    [1, 3],
    [9, 16],
    [9, 21],
    [9, 32]
  ]

  const ratioClass = ratio.map(([x, y]) => ({
    [`ratio-${x}by${y}`]: {
      [`@apply pb-[calc(${(y / x) * 100}%)]`]: {}
    }
  }))

  addUtilities(ratioClass)
})

export const helper = plugin(({ addUtilities }) => {
  addUtilities({
    '.responsive': {
      '@apply relative': {},
      '> *': {
        '@apply absolute w-full h-full': {}
      },
      '> img': {
        '@apply object-cover': {}
      }
    }
  })

  addUtilities({
    '.transitable': {
      '@apply transition-all duration-300': {}
    },
    '.hoverable': {
      '@apply transition-all duration-300 cursor-pointer': {}
    }
  })

  addUtilities({
    '.flex-center': {
      '@apply flex items-center jutify-center': {}
    },
    '.inline-flex-center': {
      '@apply inline-flex items-center jutify-center': {}
    },
    '.absolute-center': {
      '@apply absolute right-half bottom-half translate-x-half translate-y-half': {}
    }
  })
})
