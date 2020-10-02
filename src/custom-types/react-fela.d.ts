import { IRenderer, IStyle } from 'fela';
import { StyleFunction } from 'react-fela';
import { SrachatTheme } from '../modules/theme';

declare module 'react-fela' {
  interface SrachatThemeProps {
    theme: SrachatTheme;
  }

  type FelaRule<TOwnProps = {}> = (props: TOwnProps & SrachatThemeProps) => IStyle;

  export type ICssFelaStyle<T, P> = IStyle | StyleFunction<T, P> | FelaRule<P>;

  export type ICssFunction<T, P> = (...style: ICssFelaStyle<T, P>[]) => string;

  export interface IFelaHookProps<T, P> {
    css: ICssFunction<T, P>;
    theme: T;
    renderer: IRenderer;
  }

  export function useFela<T = {}, P = {}>(props?: P): IFelaHookProps<T, P>;
}
