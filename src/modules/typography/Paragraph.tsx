import React from 'react';
import { FelaRule, useFela } from 'react-fela';
import { SrachatPalette } from '../theme';

type Props = {
  size: 's' | 'm' | 'l';
  children?: React.ReactNode;
  color?: keyof SrachatPalette;
  className?: string;
  bold?: boolean;
};

export const Paragraph = React.memo<Props>(
  ({ children, color, size, className = '', bold = false }) => {
    const { css } = useFela({ color, size, bold });

    const compoundClassName = `${className} ${css(paragraphStyle)}`;

    return <p className={compoundClassName}>{children}</p>;
  }
);

const paragraphStyle: FelaRule<Omit<Props, 'className' | 'children'>> = ({
  theme,
  color,
  size,
  bold
}) => ({
  color: color ? theme.palette[color] : theme.palette.white,
  fontStyle: 'normal',
  fontSize: `${getFontSize({ size })}px`,
  lineHeight: `${getLineHeight({ size })}px`,
  fontWeight: bold ? 'bold' : 'normal'
});

const getFontSize = ({ size }: Pick<Props, 'size'>) => {
  switch (size) {
    case 's':
      return 12;
    case 'm':
      return 15;
    case 'l':
      return 18;

    default:
      return null;
  }
};
const getLineHeight = ({ size }: Pick<Props, 'size'>) => {
  switch (size) {
    case 's':
      return 16;
    case 'm':
      return 24;
    case 'l':
      return 28;

    default:
      return null;
  }
};
