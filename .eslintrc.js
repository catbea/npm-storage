module.exports = {
    root:true,
    "env": {
        "browser": true,
        "node": true
    },
    parser: 'babel-eslint',
    "extends": "eslint:recommended",
    "parserOptions": {
        sourceType: 'module',
        "ecmaVersion": 5
    },
    plugins: [
        // 此插件用来识别.html 和 .vue文件中的js代码
        'html',
        // standard风格的依赖包
        "standard",
        // standard风格的依赖包
        "promise"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "no-console":"error",
        "semi": [
            "error",
            "always"
        ]
    },
    "globals": {
        "var1": true,
        "var2": false 
    }
};