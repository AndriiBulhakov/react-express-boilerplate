import express from "express";
import cors from "cors";
const PORT = 5002;
const app = express();
import worksRoute from "./routes/works.js";

app.use(cors());

app.use("/api/works", worksRoute);

app.get("/api/v1", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
