import express from "express";
import cors from "cors";
const PORT = 5002;
const app = express();
import worksRoute from "./routes/works.js";
import categoriesRoute from "./routes/categories.js";
import industriesRoute from "./routes/industries.js";

app.use(cors());

app.use("/api/works", worksRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/industries", industriesRoute);

app.get("/api/v1", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/v1", (req, res) => {
//   const url = 'https://api.webflow.com/v2/collections/collection_id';
//   const options = { method: 'GET', headers: { accept: 'application/json' } };

//   fetch(url, options)
//     .then(res => res.json())
//     .then(json => console.log(json))
//     .catch(err => console.error('error:' + err));
// });

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
