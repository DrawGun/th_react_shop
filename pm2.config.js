module.exports = {
  apps: [{
    name: 'eshop',
    script: './initializers/server/index.js',
    cwd: '/home/eshop/eshop/current',
    instances: 2,
    exec_mode: 'cluster'
  }],
  deploy: {
    production: {
      user: 'eshop',
      host: ['185.4.74.175'],
      ref: 'origin/master',
      repo: 'git@github.com:indevelope/eshop.git',
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart pm2.config.js --env production',
      path: '/home/eshop/eshop/',
      ssh_options: 'StrictHostKeyChecking=no'
    }
  }
};
