module.exports = {
  lintOnSave: false,

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('raw-loader')
      .loader('raw-loader');
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // data: `@import "@/styles/prelude.scss";`
  //     }
  //   }
  // },
  assetsDir: 'static',
  publicPath: './'
}