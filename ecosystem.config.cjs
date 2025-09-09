module.exports = {
    apps: [
      {
        name: 'isi-frontend',
        script: 'npm',
        args: 'start',
        instances: '1',
        exec_mode: 'fork',
        env: {
          NODE_ENV: 'production'
        },
      }
    ]
  }
