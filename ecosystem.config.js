module.exports = {
  deploy: {
    production: {
      user: "ubuntu",
      host: "34.214.61.24",
      ref: "origin/master",
      key: "~/.ssh/id_rsa",
      repo: "git@github.com:AmbrePalanque/AmbrePalanque.github.io.git",
      path: "/var/www/website",
      "pre-deploy-local": "",
      "post-deploy": "sudo serve -l tcp://0.0.0.0:80",
      "pre-setup": "",
    },
  },
};