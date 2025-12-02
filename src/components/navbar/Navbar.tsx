import { FirstAidIcon } from "@phosphor-icons/react";

function Navbar() {

    return (
        <>

            <div className="w-full flex justify-center py-4 bg-gray-500 text-white">

                <div className="container flex justify-between text-lg mx-8">

                    <div className="flex items-center gap-2">
                        <FirstAidIcon size={32} className="text-red-600" />
                        <span className="font-bold">Farmácia</span>
                    </div>

                    <div className="flex gap-4 font-medium hover:text-red-400">
                        Categorias
                    </div>
                </div>
            </div>

        </>

    )

}

export default Navbar;