const path = require('path')
module.export = {
    entry:"./src/index.js",
    output:{
        path:__dirname,
        filename: '[name].js'
    },
    module:{
        rules:[{
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [path.resolve(__dirname, 'src')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            }]
    }
}