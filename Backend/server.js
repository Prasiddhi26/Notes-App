import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import noteRoutes from "./Routes/noteRoute.js";
import "./Config/db.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/notes", noteRoutes);

// test route
app.get("/", (req, res) => {
  console.log("working");
  res.send("Server working");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});