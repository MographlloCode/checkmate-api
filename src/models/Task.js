import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  descricaoTarefa: {
    type: String,
    required: true,
  },
  prioridade: {
    type: String,
    required: true,
  },
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
