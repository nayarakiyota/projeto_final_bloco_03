import { useNavigate, useParams } from "react-router-dom";
import { atualizar, cadastrar, listar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { useEffect, useState, type ChangeEvent } from "react";
import type Categoria from "../../../models/categoria/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada!', 'erro')
            console.error(error)
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria)

                ToastAlerta('Categoria atualizada com sucesso!', 'sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao atualizar a Categoria!', 'erro')
                console.error(error)
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                ToastAlerta('Categoria cadastrada com sucesso!', 'sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar a Categoria!', 'erro')
                console.error(error)
            }
        }

        setIsLoading(false)
        retornar();

    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto px-2 pt-4  ">
            <h1 className="text-3xl md:text-4xl text-center my-8 text-red-400 font-medium">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-full max-w-md md:max-w-1/2 flex flex-col gap-4 px-2 "
                onSubmit={gerarNovaCategoria}
            >
                <div className="flex flex-col gap-2 text-red-400 items-center font-medium text-2xl">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        type="text"
                        placeholder="Categoria"
                        name='nome'
                        className="bg-gray-200 border-2 border-gray-500 rounded p-2 utral-800 text-base md:text-lg"
                        required
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-red-400 
          hover:bg-red-700 w-full md:w-1/2 py-2 mx-auto flex justify-center text-base md:text-lg"
                    type="submit"
                >
                    {isLoading ?
                        <ClipLoader
                            color="#ffffff"
                            size={24}
                        />
                        :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;