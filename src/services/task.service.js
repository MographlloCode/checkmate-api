import { Task } from "../models/Task.js";

export const getAllTasksService = () => Task.find();
export const getTaskService = (id) => Task.findById(id);
export const postTaskService = (body) => Task.create(body);
export const deleteTaskService = (id) => Task.findByIdAndDelete(id);
export const patchTaskService = (id, descricaoTarefa, prioridade) =>
  Task.findOneAndUpdate(
    { _id: id },
    {
      descricaoTarefa,
      prioridade,
    }
  );
export const deleteMultipleTaksService = (itemIds) =>
  Task.deleteMany({ _id: { $in: itemIds } });
