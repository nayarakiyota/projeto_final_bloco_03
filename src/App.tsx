import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarCategorias from './components/categoria/listarcategorias/ListarCategorias'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
    return (
        <>
            <ToastContainer />
            <BrowserRouter>
                <Navbar />
                <div className='flex-1 w-full pt-16 pb-16 bg-red-200 '>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/categorias" element={<ListarCategorias />} />
                        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App;