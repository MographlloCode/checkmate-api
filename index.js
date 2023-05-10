import dotenv from "dotenv";
dotenv.config();

import { route as TaskRoutes } from "./src/routes/task.route.js";

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

import { databaseConnection } from "./src/database/db.js";

databaseConnection();
app.use(express.json());

app.use("/", TaskRoutes);

app.listen(port, () => {
  console.log(`Checkmate API v1 running on port ${port}`);
});
