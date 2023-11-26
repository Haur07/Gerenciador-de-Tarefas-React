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

    static vazio(): Tarefa {
        return new Tarefa(null, "", "", "");
      }
}