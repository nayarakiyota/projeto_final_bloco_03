import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-ug0p.onrender.com/'
})

// Função para listar 
export const listar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

// Função para cadastrar 
export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

// Função para atualizar 
export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

// Função para deletar 
export const deletar = async (url: string) => {
    await api.delete(url)
}