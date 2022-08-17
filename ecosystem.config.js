module.exports = {
  apps: [
    {
      name: 'tvl-watcher',
      script: './src/main.js',
      instances: 1,
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
