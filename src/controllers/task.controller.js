import {
  postTaskService,
  getAllTasksService,
  patchTaskService,
  deleteMultipleTaksService,
  deleteTaskService,
} from "../services/task.service.js";

export const createTask = async (req, res) => {
  try {
    const { descricaoTarefa, prioridade } = req.body;

    if (!descricaoTarefa || !prioridade) {
      res.status(400).send({
        erro: "Entre com todos os campos para registrar a tarefa!",
      });
    }

    const createtask = await postTaskService(req.body);

    if (!createtask) {
      return res.status(400).send({
        mensagem: "Erro ao criar Tarefa!",
      });
    }

    res.status(201).send([
      {
        mensagem: "Tarefa criada com sucesso!",
      },
      {
        id: createtask._id,
        descricaoTarefa,
        prioridade,
      },
    ]);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tarefas = await getAllTasksService();

    if (tarefas.length === 0) {
      return res.status(400).send({ mensagem: "Não há tarefas cadastradas." });
    }

    res.status(200).send(tarefas);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const tarefa = req.tarefa;
    res.status(200).send(tarefa);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { descricao, prioridade } = req.body;

    if (!descricao && !prioridade) {
      res.status(400).send({
        erro: "Altere pelo menos um campo ao solicitar uma atualização!",
      });
      return;
    }

    const { tarefa, id } = req;

    await patchTaskService(id, descricao, prioridade);

    res.status(200).send([
      {
        mensagem: "Tarefa atualizada com sucesso!",
      },
    ]);
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const deleteSingleTask = async (req, res) => {
  try {
    const { id } = req;
    await deleteTaskService(id);

    res.status(200).send({
      mensagem: "Tarefa excluída com sucesso",
    });
  } catch (err) {
    res.status(500).send({ erro: err.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const { itemIds } = req.body;

    if (!itemIds || itemIds.length === 0) {
      res.status(400).send({
        error: "Selecione mais de uma tarefa para excluir.",
      });
      return;
    }

    await deleteMultipleTaksService(itemIds);

    res.status(200).send({
      message: "Tarefas excluídas com sucesso!",
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
