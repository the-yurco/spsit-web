/** @type {import('next').NextConfig} */
const nextConfig = {};

const path = require('path');

module.exports = {
	...nextConfig, // Merge the default configuration if needed
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
};
