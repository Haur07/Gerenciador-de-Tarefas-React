import Tarefa from "@/core/Tarefa"
import { IconeEdicao, IconeLixo } from "../icones/tabela"

interface TabelaProps {
    tarefas: Tarefa[]
    tarefaSelecionada?: (tarefa: Tarefa) => void
    tarefaExcluida?: (tarefa: Tarefa) => void
}

export default function Tabela(props: TabelaProps) {
    
    const exibirAcoes = props.tarefaSelecionada || props.tarefaExcluida

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">prioridade</th>
                <th className="text-left p-3">categoria</th>
                { exibirAcoes ? <th className="p-3">Ações</th> : false }
            </tr>
        )
    }

    function renderDados() {
        return props.tarefas?.map((tarefa, i) => {
            return (
                <tr key={tarefa.id}
                    className={`${i % 2 === 0 ? 'bg-gradient-to-r from-sky-200 to-sky-300' : 'bg-gradient-to-r from-sky-300 to-sky-400'} `}>
                    <td className="text-left p-3 font-bold">{tarefa.id}</td>
                    <td className="text-left p-3">{tarefa.nome}</td>
                    <td className="text-left p-3">{tarefa.prioridade}</td>
                    <td className="text-left p-3">{tarefa.categoria}</td>
                    { exibirAcoes ? renderizarAcoes(tarefa) : false }
                </tr>
            )
        })
    }

    function renderizarAcoes(tarefa: Tarefa) {
        return (
            <td className="flex justify-center">
                { props.tarefaSelecionada ? (
                    <button onClick={() => props.tarefaSelecionada?.(tarefa)} className={`flex justify-center items text-green-600 rounded-full p-2 m-1 hover:bg-gray-100`}>
                        { IconeEdicao }
                    </button>
                ) : false }
                { props.tarefaExcluida ? (
                    <button onClick={() => props.tarefaExcluida?.(tarefa)} className={`flex justify-center items text-red-600 rounded-full p-2 m-1 hover:bg-gray-100`}>
                        { IconeLixo }
                    </button>
                ) : false }
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from-sky-800 via-sky-600 to-sky-700`}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderDados()}
            </tbody>
        </table>
    )
}