import { resolve } from '$app/paths';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function appHref(href: string): string {
	if (
		href.startsWith('http://') ||
		href.startsWith('https://') ||
		href.startsWith('mailto:') ||
		href.startsWith('#')
	) {
		return href;
	}

	return resolve(href);
}

export function isAppPathActive(href: string, pathname: string): boolean {
	const resolved = appHref(href).replace(/\/$/, '') || '/';
	const current = pathname.replace(/\/$/, '') || '/';

	if (href === '/') {
		return current === resolved;
	}

	return current === resolved || current.startsWith(`${resolved}/`);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;

export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;

export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};
