export default class Tarefa {
    id: number | null;
    nome: string;
    prioridade: string;
    categoria: string;

    constructor(id: number | null, nome: string, prioridade: string, categoria: string) {
        this.id = id;
        this.nome = nome;
        this.prioridade = prioridade;
        this.categoria = categoria;
    }

    static geraTarefas() {
        return [
            new Tarefa(1, "Trabalho Front-End", "Alta", "Atividades"),
            new Tarefa(2, "Estudar Prova SO2", "Alta", "Estudos")
        ]
    }

    static vazio(): Tarefa {
        return new Tarefa(null, "", "", "");
      }
}