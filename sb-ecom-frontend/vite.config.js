export default {
  server: {
    
      proxy: {
          '/api': {
              target: 'http://localhost:8090',
              changeOrigin: true,
              secure: false,
          },
      },
  },
};