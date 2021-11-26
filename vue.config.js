module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/css/_variables.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/starwars/' : '/',
};
