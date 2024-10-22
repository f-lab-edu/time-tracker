export default {
  root: 'src',
  build: {
    outDir: '../dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  server: {
    port: 3070,
  },
};
