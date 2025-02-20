import { ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                <Link to='/home' className="text-2xl font-bold">
                    <img src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1714775486354" alt="Logo - Loja Games" />
                </Link>

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar categoria
                        <a href="/home">
                            <User size={32} weight='bold' />
                        </a>
                        <a href="/home">
                            <ShoppingCart size={32} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar