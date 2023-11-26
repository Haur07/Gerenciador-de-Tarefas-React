import Tarefa from "@/core/Tarefa";
import Entrada from "./entrada";
import { useState } from "react";
import Botao from "./botao";

interface FormularioProps {
    tarefa: Tarefa
    tarefaMudou?: (tarefa: Tarefa) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.tarefa?.id
    const [nome, setNome] = useState(props.tarefa?.nome)
    const [prioridade, setPrioridade] = useState(props.tarefa?.prioridade)
    const [categoria, setCategoria] = useState(props.tarefa?.categoria)
    const [aviso, setAviso] = useState(false);

    const campoVazio = () => {
        if(!nome || !prioridade || !categoria) {
            setAviso(true)
            return false
        }
        return true
    }

    const campoStatus = () => {
        if(campoVazio()) setAviso(false)
    }

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Prioridade" valor={prioridade} onChange={setPrioridade}></Entrada>
            <Entrada texto="Caregoria" valor={categoria} onChange={setCategoria}></Entrada>
            <div className="flex justify-end mt-5">
                {aviso && (
                    <div className="bg-red-500 border text-white px-3 py-2 rounded mr-3">
                        Preencha todas as linhas
                    </div>
                )}
                <Botao className="mr-3" cor="bg-gradient-to-r from-sky-600 to-sky-800"
                    onClick={() => campoVazio() && props.tarefaMudou?.(new Tarefa(
                        id, nome, prioridade, categoria)) && campoStatus}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-600 to-gray-800"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}