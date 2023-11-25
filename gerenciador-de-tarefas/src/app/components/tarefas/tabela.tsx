import Tarefa from '@/core/tarefas'

interface TabelaProps {
    tarefas: Tarefa[]
}

export default function Tabela(props: TabelaProps) {
    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-3">id</th>
                <th className="text-left p-3">nome</th>
                <th className="text-left p-3">prioridade</th>
                <th className="text-left p-3">categoria</th>
            </tr>
        )
    }

    function renderDados() {
        return props.tarefas?.map((tarefa, i) => {
            return (
                <tr key={ tarefa.id } className={`${i % 2 === 0 ? 'bg-gradient-to-r from-sky-300 to-sky-200' : 'bg-gradient-to-r from-sky-200 to-sky-100'}`}>
                    <td className="text-left p-3">{ tarefa.id }</td>
                    <td className="text-left p-3">{ tarefa.nome }</td>
                    <td className="text-left p-3">{ tarefa.prioridade }</td>
                    <td className="text-left p-3">{ tarefa.categoria }</td>
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from-sky-800 via-sky-600 to-sky-700`}>
                { renderHeader() }
            </thead>
            <tbody>
                { renderDados() }
            </tbody>
        </table>
    )
}