module.exports = {
  apps: [
    {
      name: "dofusin-page",
      script: "npm",
      args: "start",
      cwd: "/home/ubuntu/prod/dofusin-page",
      instances: 1,
      exec_mode: "fork",
      max_restarts: 10,
      restart_delay: 5000,
      env: {
        NODE_ENV: "production",
        PORT: 4026,
      },
    },
  ],
}
