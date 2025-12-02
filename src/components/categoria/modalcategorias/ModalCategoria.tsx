import 'reactjs-popup/dist/index.css';
import FormCategoria from '../formcategoria/FormCategoria';
import Popup from 'reactjs-popup';

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className="border rounded px-4 py-2 font-bold bg-red-400
                                hover:bg-red-700 text-white flex justify-center transition delay-2"
                    >
                        Nova Categoria
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalProduto;