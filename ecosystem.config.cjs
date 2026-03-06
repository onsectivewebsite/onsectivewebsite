module.exports = {
  apps: [
    {
      name: 'onsective-enterprise',
      script: 'server.js',
      instances: 'max', // or a specific number based on server resources
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
