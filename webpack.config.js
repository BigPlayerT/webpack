const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {VueLoaderPlugin} = require('vue-loader')

module.exports = {
    entry: './src/main.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: false,
        port: 9000
    },
    plugins: [
        // new VueLoaderPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "public",
                    to: "", 
                    filter: (path) =>{
                        if (path.includes('index.html')) {
                            console.log('path')
                            return false
                        }
                        return true
                    }
                }
            ],
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            publicPath: ''
        })
    ],
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.vue$/i,
                use: [
                    path.resolve(__dirname, './myLoader/myVueLoader.js')
                ],
            },
        ]
    },
    performance: {
        hints: 'warning',
        // 入口起点的最大体积
        maxEntrypointSize: 50000000,
        // 生成文件的最大体积
        maxAssetSize: 30000000,
        // 只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js')
        }
      }
}