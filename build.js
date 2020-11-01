'use strict';

const fse = require('fs-extra');

async function main() {
	const args = process.argv.slice(2);
	if (args.length < 1) {
		throw new Error('Args: name');
	}
	const [name] = args;

	console.log('build: start');
	await fse.outputJson(`dist/build-${name}.json`, {
		platform: process.platform,
		arch: process.arch,
		date: new Date()
	}, {spaces: '\t'});
	console.log('build: end');
}
main().catch(err => {
	process.exitCode = 1;
	console.error(err);
});
