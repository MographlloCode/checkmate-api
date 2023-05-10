import mongoose from "mongoose";
import { getTaskService } from "../services/task.service.js";

export const validId = (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ erro: "Id Inválido" });
    }

    next();
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const validTask = async (req, res, next) => {
  try {
    const id = req.params.id;

    const tarefa = await getTaskService(id);

    if (!tarefa) {
      return res.status(400).send({ erro: "Tarefa não encontrada." });
    }

    req.id = id;
    req.tarefa = tarefa;

    next();
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};
