// vue.config.js
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/',
    outputDir: 'dist',
    productionSourceMap: false
}