import express from "express";

import {
  createTask,
  deleteSingleTask,
  deleteTasks,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";
import { validId, validTask } from "../middlewares/global.middlewares.js";

export const route = express.Router();

route.post("/", createTask);
route.get("/", getAllTasks);
route.get("/:id", validId, validTask, getTask);
route.delete("/:id", validId, validTask, deleteSingleTask);
route.delete("/", deleteTasks);
route.patch("/:id", validId, validTask, updateTask);
