const palette = {
  red: '#F51D46',
  orange: '#F54B2A',
  white: '#FFFFFF',
  dark: '#1B1A1F',
  grayDark: '#122A31',
  green: '#5CF34F',
  black: '#000000',
  black80: '#111111',
  black70: '#111520',
  black60: '#1F2631',
  gray80: '#606060',
  gray50: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
  gray30: '#CCCCCC',
  gray20: '#E6E6E6',
  gray10: '#F2F2F2'
};

export const colors = {
  primary: palette.red,
  secondary: palette.white,
  background: palette.dark,
  inputMessages: palette.grayDark,
  success: palette.green
};

export const srachatTheme = {
  palette,
  colors,
};

export type SrachatTheme = typeof srachatTheme;