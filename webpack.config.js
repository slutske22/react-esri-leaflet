var path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'index.js',
		library: 'ReactEsriLeaflet',
		libraryTarget: 'umd',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				exclude: /(node_modules|bower_components|build)/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
		],
	},
	externals: {
		'react-dom': 'commonjs react-dom',
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L',
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet',
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React',
		},
		'esri-leaflet': {
			commonjs: 'esri-leaflet',
			commonjs2: 'esri-leaflet',
			root: 'L.esri',
		},
	},
};
