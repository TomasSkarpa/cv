import { base } from '$app/paths';
import { site } from '$lib/data/site';

const buildBase = (base || import.meta.env.BASE_URL).replace(/\/$/, '');

export function canonicalUrl(pathname: string): string {
	let path = pathname;

	if (buildBase && path.startsWith(buildBase)) {
		path = path.slice(buildBase.length) || '/';
	}

	const url = new URL(path, site.url);

	if (url.pathname !== '/') {
		url.pathname = url.pathname.replace(/\/$/, '');
	}

	return url.href;
}
