
module.exports = {
    chainWebpack: config => {
        config.module
        .rule('vue')
        .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                return {
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        img: 'src',
                        image: 'xlink:href',
                        'b-avatar': 'src',
                        'b-img': 'src',
                        'b-img-lazy': ['src', 'blank-src'],
                        'b-card': 'img-src',
                        'b-card-img': 'src',
                        'b-card-img-lazy': ['src', 'blank-src'],
                        'b-carousel-slide': 'img-src'
                    }
                }
            })
    },
    // devServer: {
    //     https: false,
    //     port: 7890
    // },
    "configureWebpack": {
        module: {
            rules: [
                {
                    test: /\.(csv|xlsx|xls)$/,
                    loader: "file-loader",
                }
            ]
        },
        "resolve": {
        "alias": {
            "vue$": "vue/dist/vue.esm.js"
        }
        },
        "output": { filename: '[name].[hash].bundle.js' } 
    }
}
