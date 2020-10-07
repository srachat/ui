const palette = {
  dark: '#111520',
  dark10: '#1F2631',
  dark20: '#373030',
  dark30: '#333841',
  orange: '#F54B2A',
  orange10: '#DF4325',
  orange20: '#C93D22',
  white: '#FFFFFF',
  gray: '#A79D9E',
  pink: '#D62546',
  pink10: '#A91A35',
  green: '#45B169',
  green10: '#379B58',
  blue: '#3000EE',
  red: '#FF3E3E',
  black: '#000000'
};

export const colors = {
  backgroundMain: palette.dark,
  backgroundSecondary: palette.dark10,
  mainActive: palette.orange,
  mainHovered: palette.orange10,
  mainPressed: palette.orange20,
  elParagraph: palette.white,
  elNeutral: palette.gray,
  elFirstTeamInactive: palette.pink,
  elFirstTeamActive: palette.pink10,
  elSecondTeamInactive: palette.green,
  elSecondTeamActive: palette.green10,
  elDisabled: palette.dark20
};

export const srachatTheme = {
  palette,
  colors
};

export type SrachatPalette = typeof palette;
export type SrachatColors = typeof colors;
export type SrachatTheme = typeof srachatTheme;
