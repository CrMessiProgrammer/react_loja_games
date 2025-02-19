

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <img src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1714775486354" alt="Logo - Loja Games" />

                    <div className='flex gap-4'>
                        Produtos
                        Categorias
                        Cadastrar categoria
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar