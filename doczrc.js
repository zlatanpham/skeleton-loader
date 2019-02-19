import doczPluginNetlify from "docz-plugin-netlify";

// doczrc.js
export default {
  plugins: [doczPluginNetlify()],
  title: 'Skeleton Screen',
  description: 'Description',
  source: './src',
  typescript: true,
  themeConfig: {
    colors: {
      primary: 'tomato',
    },
    source: './src',
    styles: {
      h1: {
        fontSize: 100,
      },
    },
  },
};
