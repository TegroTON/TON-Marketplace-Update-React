/* eslint-disable import/no-extraneous-dependencies */

import { Configuration, SourceMapDevToolPlugin, ProvidePlugin, NormalModuleReplacementPlugin, DefinePlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import * as dotenv from 'dotenv'
import * as path from 'path'
import 'webpack-dev-server'

dotenv.config({ path: '.env' })

const config: Configuration = {
    mode: 'none',
    entry: { app: path.join(__dirname, 'src', 'index.tsx') },
    target: 'web',
    devtool: 'inline-source-map',
    devServer: {
        static: { directory: path.join(__dirname, 'public') },
        compress: true,
        https: true,
        hot: true,
        historyApiFallback: true,
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/'
            },
            {
                test: /\.(css|scss)$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [ 'source-map-loader' ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: { limit: 10000 }
                    }
                ]
            }
        ]
    },
    ignoreWarnings: [ /Failed to parse source map/ ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, 'public', 'index.html') }),
        new SourceMapDevToolPlugin({ filename: '[file].map' }),
        new ProvidePlugin({ Buffer: [ 'buffer', 'Buffer' ] }),
        new ProvidePlugin({ process: 'process/browser' }),
        new DefinePlugin({ 'process.env': JSON.stringify(process.env) }),
        new NormalModuleReplacementPlugin(/node:/, (resource) => {
            const mod = resource.request.replace(/^node:/, '')
            switch (mod) {
                case 'crypto':
                    resource.request = 'crypto'
                    break
                default:
                    throw new Error(`Not found ${mod}`)
            }
        })
    ],
    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ],
        alias: { process: 'process/browser' },
        fallback: {
            util: require.resolve('util/'),
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            assert: require.resolve('assert'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify'),
            url: require.resolve('url')
        }
    }
}

// eslint-disable-next-line import/no-default-export
export default config
