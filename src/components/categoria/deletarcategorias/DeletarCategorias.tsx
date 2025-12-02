import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import { deletar, listar } from '../../../services/Service'
import { ToastAlerta } from '../../../utils/ToastAlerta'
import type Categoria from '../../../models/Categoria'

function DeletarCategoria() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada!', 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            ToastAlerta('Categoria apagada com sucesso!', 'sucesso')
        } catch (error) {
            ToastAlerta('Erro ao apagar a categoria!', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate('/categorias')
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="py-4 text-4xl text-center text-gray-800">
                Deletar Categoria
            </h1>
            <p className="mb-4 font-semibold text-center text-gray-800">
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>
            <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
                <header className="px-6 py-2 text-2xl font-bold text-white bg-red-400">
                    Categoria
                </header>
                <p className="h-full p-8 text-3xl bg-gray-200 text-gray-800">
                    {categoria.nome}
                </p>
                <div className="flex">
                    <button
                        className="w-full py-2 bg-red-500 text-slate-50 hover:bg-red-600"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="flex items-center justify-center w-full bg-blue-400
                       hover:bg-blue-700 text-slate-50"
                        onClick={deletarCategoria}
                    >
                        {isLoading ? (
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria