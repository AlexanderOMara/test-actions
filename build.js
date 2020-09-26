'use strict';

const fse = require('fs-extra');

async function main() {
	console.log('build: start');
	await fse.outputFile('dist/build.txt', (new Date()).toISOString());
	console.log('build: end');
}
main().catch(err => {
	process.exitCode = 1;
	console.error(err);
});
