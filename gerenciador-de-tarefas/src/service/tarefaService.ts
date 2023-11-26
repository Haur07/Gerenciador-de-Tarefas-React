import axios from 'axios';
import Tarefa from '@/core/Tarefa';

interface ApiResponse {
    Tarefas: Tarefa[];
}

const BASE_URL = 'http://localhost:3001';

export const fetchTarefa = async (): Promise<Tarefa[]> => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}/tarefas`);
        return response.data.Tarefas;
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        throw new Error('Erro ao buscar tarefas');
    }
};

export const cadastrarTarefa = async (tarefa: Tarefa): Promise<Tarefa> => {
    try {
      const response = await axios.post<Tarefa>(`${BASE_URL}/tarefas`, tarefa);
      return response.data;
    } catch (error) {
      console.error("Erro ao cadastrar tarefa:", error);
      throw error;
    }
  };

  export const atualizarTarefa = async (tarefa: Tarefa): Promise<Tarefa> => {
    try {
      const response = await axios.put<Tarefa>(`${BASE_URL}/tarefas/${tarefa.id}`, tarefa);
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