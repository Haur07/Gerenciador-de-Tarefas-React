import axios from 'axios';
import Tarefa from '@/core/Tarefa';

const BASE_URL = 'http://localhost:3006';

export const fetchTarefa = async (): Promise<Tarefa[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/tarefas`);
        return response.data
    } catch (error) {
        throw new Error("Erro ao buscar tarefas")
    }
};

export const cadastrarTarefa = async (tarefa: Tarefa): Promise<Tarefa> => {
  try {
    const response = await axios.post(`${BASE_URL}/tarefas`, tarefa);
    if (response.status === 201) {
      return response.data;
    } else {
      console.error("Status inesperado: ", response.status);
      throw new Error("Erro ao cadastrar tarefa");
    }
  } catch (error) {
      console.error("Erro ao cadastrar tarefa: ", error);
      throw error;
  } 
};

export const atualizarTarefa = async (tarefa: Tarefa): Promise<Tarefa> => {
  try {
    const response = await axios.put(`${BASE_URL}/tarefas/${tarefa.id}`, tarefa);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
    throw error;
  }
};

export const excluirTarefa = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${BASE_URL}/tarefas/${id}`);
  } catch (error) {
    console.error("Erro ao excluir tarefa:", error);
    throw error;
  }
};