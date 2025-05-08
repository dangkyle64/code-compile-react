import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './public/index.html',
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
        historyApiFallback: true,
    },
    mode: 'development',
};
