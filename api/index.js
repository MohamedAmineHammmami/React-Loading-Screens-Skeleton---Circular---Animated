import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server is running at port:5000");
});
