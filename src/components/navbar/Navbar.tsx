import { FirstAidIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-gray-500 text-white">
                <div className="container flex justify-between text-lg mx-8">

                    <div className="flex items-center gap-2">
                        <Link to="/home" className="flex items-center gap-2">
                            <FirstAidIcon size={32} className="text-red-600" />
                            <span className="font-bold">Farmácia</span>
                        </Link>
                    </div>

                    <div className="flex gap-4 font-medium ">
                        <Link to='/categorias' className='hover:text-red-400 font-medium'>Categorias</Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Navbar;
