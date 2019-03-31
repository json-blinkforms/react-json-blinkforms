require('typescript-require');

// shared config (dev and prod)
const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'index.ts', 'index.tsx', 'index.js', 'index.jsx'],
    alias: {
      'scss': path.join(__dirname, '..', '..', 'src', 'scss'),
      'components': path.join(__dirname, '..', '..', 'src', 'components', 'universal'),
      'pages': path.join(__dirname, '..', '..', 'src', 'components', 'pages'),
      'langs': path.join(__dirname, '..', '..', 'src', 'langs'),
      'routes': path.join(__dirname, '..', '..', 'src', 'routes'),
      'themes': path.join(__dirname, '..', '..', 'src', 'themes'),
      'modules': path.join(__dirname, '..', '..', 'src', 'modules'),
      'img': path.join(__dirname, '..', '..', 'src', 'assets', 'img')
    }
  },
  context: path.resolve(__dirname, '../../src'),
  module: {
    rules: [
      /*{
        test: /\.ts|\.tsx$/,
        enforce: 'pre',
        use: [
           {
              loader: 'tslint-loader',
              options: {
                  configFile: 'tslint.json',
                  typeCheck: true,
                  tsConfigFile: 'tsconfig.json',
                  emitErrors: true,
                  failOnHint: true,
                  fix: true
              }
           }
        ]
      },*/
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
  ],
  performance: {
    hints: false,
  },
};