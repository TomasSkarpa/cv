import fs from 'node:fs';
import path from 'node:path';

/** @param {string} dir */
function ensure404Html(dir) {
	if (!fs.existsSync(dir)) return false;

	const dest = path.join(dir, '404.html');
	const sources = ['not-found.html', 'not-found', '404.html', '404'];

	for (const name of sources) {
		const source = path.join(dir, name);
		if (!fs.existsSync(source) || source === dest) continue;

		fs.copyFileSync(source, dest);
		return true;
	}

	return fs.existsSync(dest);
}

const vercelStatic = '.vercel/output/static';
const vercelConfig = '.vercel/output/config.json';

if (ensure404Html(vercelStatic)) {
	if (fs.existsSync(vercelConfig)) {
		const config = JSON.parse(fs.readFileSync(vercelConfig, 'utf8'));
		if (config.overrides?.['404.html']) {
			delete config.overrides['404.html'];
			fs.writeFileSync(vercelConfig, `${JSON.stringify(config, null, 2)}\n`);
		}
	}

	process.stdout.write('ensure-vercel-404: wrote .vercel/output/static/404.html\n');
}

ensure404Html('build');
