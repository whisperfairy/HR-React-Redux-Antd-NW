/**
 * Created by hurong on 2016/11/30.
 */
'use strict'
var path = require('path');
var webpack = require('webpack');
const config = require('../config/config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var base = require('./base');
const merge = require('webpack-merge')
const autoprefixerBrowsers = [
    'last 2 versions',
    '> 5%',
    'safari >= 5',
    'ie >= 8',
    'opera >= 12',
    'Firefox ESR',
    'iOS >= 6',
    'android >= 4'
];
// base.entry.index.unshift(
//     'react-hot-loader/patch',
//     'webpack/hot/only-dev-server'
// );
module.exports = merge(base, {
    target:'node-webkit',
    devtool: "inline-source-map",
    output: {
        filename: './[name].js',
        path: path.resolve(__dirname,'../dist'),
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {importLoaders: 1}
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader:'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                            sourceMap: true,
                            sourceMapContents: true
                        }
                    }
                ]
            },{
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif|mp4|webm)(\?\S*)?$/,
                loader: 'url-loader?limit=1&name=assets/imgs/[name].[ext]'
            }
        ]
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin(),
        // //activates HMR
        // new webpack.NamedModulesPlugin(),
        //prints more readable module names in the browser console on HMR updates
        // new ExtractTextPlugin({filename:path.join(config.dirname,'dist','bundle.css'), allChunks: true})
        new webpack.optimize.UglifyJsPlugin(), //最小化一切
        new webpack.optimize.AggressiveMergingPlugin()//合并块
    ],
    devServer:{
        publicPath:'/',//bundle输出的伪路径相对于html
        inline:true,
        historyApiFallback: true,
        contentBase: config.dirname,
        //watchContentBase:'true',//是否监听ContentBase下的文件结构变化，默认为false，只监听现有文件变化，新增不监听，耗内存打慎用
        watchOptions:{
            aggregateTimeout:500
            //poll:1000,//自动刷新耗内存打不建议开
        }
    }
})
