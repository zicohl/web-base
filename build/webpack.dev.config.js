const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode:'development',
 
    entry: {
        app:[
            "@babel/polyfill",
            path.join(__dirname, '../src/index.tsx')
        ]
    },

    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.(js|jsx|ts|tsx)?$/,
            exclude: path.join(__dirname, '../node_modules'),
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, '../src')
        }]
    },

    devServer: {
        contentBase: path.join(__dirname, '../dist'), 
        compress: true,  // gzip压缩
        host: '0.0.0.0', // 允许ip访问
        hot:true, // 热更新
        historyApiFallback:true, // 解决启动后刷新404
        port: 3000 // 端口
    },
    
    resolve: {
        alias: {
            '@': path.join(__dirname, '../src/'),
        },
        extensions: ['.ts','.tsx','.js','.jsx']
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html')
        })
    ],

    devtool: 'inline-source-map'
};
