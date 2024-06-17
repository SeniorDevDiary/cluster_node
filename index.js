import { dirname } from "path";
import { fileURLToPath } from "url";
import cluster from "cluster";
import os from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));

const cpuCount = os.cpus().length;

cluster.setupPrimary({
  exec: __dirname + "/app.js",
});

for (let i = 0; i < cpuCount; i++) {
  cluster.fork();
}

cluster.on("exit", (worker, code, signal) => {
  // console.log("on exit, worker.process.pid: ", worker.process.pid);
  cluster.fork();
});
