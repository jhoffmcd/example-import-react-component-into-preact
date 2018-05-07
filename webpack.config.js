const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
        },
        symlinks: false
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
};
