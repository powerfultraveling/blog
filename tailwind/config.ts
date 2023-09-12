function buildSpacing(max: number) {
  return [...Array(max + 1).keys()].reduce((spacing, i) => {
    return {
      ...spacing,
      [i]: `${i * 0.25}rem`
    }
  }, {})
}

const MAX_NUNBER = 160

export const inset = {
  ...buildSpacing(MAX_NUNBER),
  px: '1px',
  auto: 'auto',
  half: '50%',
  full: '100%'
}

export const spacing = {
  ...inset,
  min: 'min-content',
  max: 'max-content',
  fix: 'fix-content'
}

export const width = { ...spacing, screen: '100vw' }
export const height = { ...spacing, screen: '100vh' }
