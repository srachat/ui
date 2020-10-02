import React from 'react';
import { FelaRule, useFela } from 'react-fela';
import { SrachatPalette } from '../theme';

type Props = {
  size: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
  color?: keyof SrachatPalette;
  className?: string;
};

export const Title = React.memo<Props>(({ size, children, color, className = '' }) => {
  const { css } = useFela({ color, size });

  const compoundClassName = `${className} ${css(titleStyle)}`;

  switch (size) {
    case 1:
      return <h1 className={compoundClassName}>{children}</h1>;
    case 2:
      return <h2 className={compoundClassName}>{children}</h2>;
    case 3:
      return <h3 className={compoundClassName}>{children}</h3>;
    case 4:
      return <h4 className={compoundClassName}>{children}</h4>;
    case 5:
      return <h5 className={compoundClassName}>{children}</h5>;
    case 6:
      return <h6 className={compoundClassName}>{children}</h6>;

    default:
      return null;
  }
});

const titleStyle: FelaRule<Pick<Props, 'color' | 'size'>> = ({ theme, color, size }) => ({
  color: color ? theme.palette[color] : theme.palette.white,
  fontStyle: 'normal',
  fontSize: `${getFontSize({ size })}px`,
  lineHeight: `${getLineHeight({ size })}px`,

  ...(size === 6
    ? {
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontWeight: 500
      }
    : {})
});

const getFontSize = ({ size }: Pick<Props, 'size'>) => {
  switch (size) {
    case 1:
      return 44;
    case 2:
      return 36;
    case 3:
      return 30;
    case 4:
      return 25;
    case 5:
      return 20;
    case 6:
      return 12;

    default:
      return null;
  }
};
const getLineHeight = ({ size }: Pick<Props, 'size'>) => {
  switch (size) {
    case 1:
      return 60;
    case 2:
      return 48;
    case 3:
      return 40;
    case 4:
      return 36;
    case 5:
      return 28;
    case 6:
      return 16;

    default:
      return null;
  }
};
