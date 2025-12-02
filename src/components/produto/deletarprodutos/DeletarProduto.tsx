import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { deletar, listar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import type Produto from "../../../models/Produto"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/produtos/${id}`, setProduto)
        } catch (error: any) {
            ToastAlerta('Produto não encontrado!', 'erro')
            console.error(error)
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produtos/${id}`)

            ToastAlerta('Produto apagado com sucesso!', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao apagar o produto', 'erro')
            console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/produtos")
    }

    return (
        <div className='container w-full max-w-md mx-auto px-4 pt-20 md:pt-6 '>
            <h1 className='text-3xl md:text-4xl text-center py-4 text-gray-800'>Deletar Produto</h1>
            <p className='text-center font-semibold mb-4 text-base md:text-lg text-gray-800'>
                Você tem certeza de que deseja apagar o produto a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-4 md:px-6 text-white bg-red-400 font-bold text-lg md:text-2xl'>
                    Produto
                </header>
                <p className='p-4 md:p-8 text-xl md:text-3xl bg-gray-200 text-gray-800 h-full'>{produto.nome}</p>
                <div className="flex flex-row">
                    <button
                        className='text-slate-50 bg-red-500 hover:bg-red-600 w-full py-2 text-base md:text-lg'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-50 bg-blue-400
                       hover:bg-blue-700 flex items-center justify-center text-base md:text-lg'
                        onClick={deletarProduto}
                    >
                        {isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarProduto