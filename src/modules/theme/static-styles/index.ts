import { IRenderer } from 'fela';
import { StaticStyles } from '../types';

const allStyles: StaticStyles[] = [];

export const renderStaticStyles = (renderer: IRenderer, styles: StaticStyles): void => {
	const kyes = Object.keys(styles);
	for (const key of kyes) {
		renderer.renderStatic(styles[key], key);
	}
};

export function renderAllStaticStyles(renderer: IRenderer): void {
	for (const styles of allStyles) {
		renderStaticStyles(renderer, styles);
	}
}
