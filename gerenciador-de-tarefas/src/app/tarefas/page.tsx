'use client';
import Botao from "@/components/tarefas/botao";
import Formulario from "@/components/tarefas/formulario";
import Layout from "@/components/tarefas/layout";
import Tabela from "@/components/tarefas/tabela";
import Tarefa from "@/core/Tarefa";
import { atualizarTarefa, cadastrarTarefa, excluirTarefa, fetchTarefa } from "@/service/tarefaService";
import { useEffect, useState } from "react";

export default function Tarefas() {

  const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadTarefas = async () => {
        try {
          const dados = await fetchTarefa();
          setTarefas(dados);
        } catch (error) {
          console.error("Erro ao buscar as tarefas:", error);
        }
      }
  
      loadTarefas();
    }
  }, [visivel]);  

  function tarefaSelecionada(tarefa: Tarefa) {
    setTarefa(tarefa)
    setVisivel('form')
  }

  async function tarefaExcluida(tarefa: Tarefa) {
    const confirmacao = window.confirm("Tem certeza de que deseja excluir esta tarefa?");
    if (confirmacao) {
      try {
        if (tarefa.id !== null) {
          await excluirTarefa(tarefa.id);
        } else {
          console.error("ID da tarefa é nula");
        }
        setTarefas(prevTarefas => prevTarefas.filter(tf => tf.id !== tarefa.id));
      } catch (error) {
        console.error("Erro ao excluir a tarefa:", error);
      }
    }
  }

  function salvarOuAlterarTarefa(tarefa: Tarefa) {
    if (tarefa.id) {
      alterarTarefa(tarefa)
    } else {
      salvarTarefa(tarefa)
    }
  }

  async function alterarTarefa(tarefa: Tarefa) {
    try {
      const tarefaAtualizada = await atualizarTarefa(tarefa);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar a tarefa:", error);
    }
  }

  async function salvarTarefa(tarefa: Tarefa) {
    try {
      const novaTarefa = await cadastrarTarefa(tarefa);
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar a tarefa:", error);
    }
  }

  function novaTarefa() {
    setTarefa(Tarefa.vazio())
    setVisivel("form")
  }

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r from-sky-900 via-sky-700 to-sky-800 text-white`}>
      <Layout titulo="Cadastro de tarefas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="bg-gradient-to-r from-sky-600 to-sky-700"
                onClick={() => novaTarefa()}>
                Nova Tarefa
              </Botao>
            </div>
            <Tabela tarefas={tarefas}
              tarefaSelecionada={tarefaSelecionada}
              tarefaExcluida={tarefaExcluida}></Tabela>
          </>
        ) : (
          <Formulario tarefa={tarefa}
            tarefaMudou={salvarOuAlterarTarefa}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}