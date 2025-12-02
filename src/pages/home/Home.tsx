import ListarCategorias from "../../components/categoria/listarcategorias/ListarCategorias";
import ModalCategoria from "../../components/categoria/modalcategorias/ModalCategoria";

function Home() {


    return (
        <>
            <div
                className="bg-red-200 flex justify-center"
            >
                {/* Grid que divide a tela em 2 colunas */}
                <div
                    className="container grid grid-cols-1 sm:grid-cols-2 text-gray-800"
                >
                    {/* Coluna Esquerda */}
                    <div
                        className="flex flex-col gap-4 items-center justify-center py-4"
                    >
                        <h2
                            className="text-5xl font-bold "
                        >Seja Bem Vinde!</h2>
                        <p
                            className="text-xl"
                        >Aqui você encontra o cuidado que merece e a atenção que precisa.</p>

                        {/* Link/Botão */}
                        <div
                            className="flex justify-around gap-4"
                        >
                            <ModalCategoria />
                        </div>
                    </div>

                    {/* Coluna Direita */}
                    <div
                        className="flex justify-center"
                    >
                        <img
                            src="https://ik.imagekit.io/qiazjnea4/produtos_farmacia/bannerfarmacia-min.png"
                            alt="Imagem da Página Home"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>
            <div className="py-2 md:py-0 md:mb-4">
                <ListarCategorias />
            </div>
        </>
    )
}

export default Home;