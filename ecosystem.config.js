module.exports = {
  apps: [
    {
      name: 'tvl-watcher',
      script: './src/main.js',
      instances: 1,
      exec_mode: 'fork',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
