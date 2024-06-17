import cluster from "cluster";
import { cpus } from "os";
import express from "express";

const numCPUs = cpus().length;

// console.log("Outside");

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker?.process?.pid} died`);
    cluster.fork();
  });
} else {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from worker ${process.pid}`);
  });

  const server = app.listen(3000, () => {
    console.log(
      `Worker ${process.pid} started, server running at http://localhost:3000/`
    );
  });
}
