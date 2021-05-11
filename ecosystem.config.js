module.exports = {
  apps: [
    {
      port: 3000,
      name: "website",
      script: "sudo serve -l tcp://0.0.0.0:80 /var/www/website/current", 
      exec_mode: "cluster", 
    },
  ],
  deploy: {
    production: {
      user: "ubuntu",
      host: "34.214.61.24",
      ref: "origin/master",
      key: "~/.ssh/id_rsa",
      repo: "git@github.com:AmbrePalanque/AmbrePalanque.github.io.git",
      path: "/var/www/website",
      "pre-deploy-local": "",
      "post-deploy": "pm2 reload ecosystem.config.js --env production && pm2 save",
      "pre-setup": "",
    },
  },
};