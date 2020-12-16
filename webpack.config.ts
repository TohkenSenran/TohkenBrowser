import path from 'path';

const config = () => ({
  mode: 'production',
  entry: {
    background: path.join(__dirname, 'src', 'background', 'index.ts'),
    content: path.join(__dirname, 'src', 'content', 'index.tsx'),
    devtools: path.join(__dirname, 'src', 'devtools', 'devtools.ts'),
    handbook: path.join(__dirname, 'src', 'handbook', 'index.tsx'),
  },
  output: {
    // distディレクトリにcontent_scripts.jsを吐く
    path: path.join(__dirname, 'dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
});

export default config;
