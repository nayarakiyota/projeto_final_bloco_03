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
                            className="rounded py-2 w-1/3 cursor-pointer bg-red-400
                                hover:bg-red-700 text-white flex justify-center transition delay-2 font-medium"
                        >
                            Nova Categoria
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
        </>
    )
}

export default Home;