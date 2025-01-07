import express from "express";
import cors from "cors";
import { videos, user } from "./dummyData.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/videos", (req, res) => {
  try {
    res.status(200).json({ success: true, videos });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

app.get("/api/user", (req, res) => {
  try {
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ success: false, msg: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is running at port:5000");
});
