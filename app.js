import express from "express";

const app = express();

app.get("/", (req, res) => {
  let j = 0;
  for (let i = 0; i < 25_000_000; i++) {
    j++;
  }

  res.send("Total: " + j);
});

app.listen(4000, () => {
  console.log("Is running on port:  http://localhost:4000 ");
  console.log(`worker pid: ${process.pid}`);
});
