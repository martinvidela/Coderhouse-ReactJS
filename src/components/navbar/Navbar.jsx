import CartWidget from "../CartWidget/CartWidget"
import cat from './assets/cat.svg'
const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="container-lista">
                <img src={cat} alt="gato" />
                <ul className="lista">
                    <li><a href="">Supremas</a></li>
                    <li><a href="">Papas Fritas</a></li>
                    <li><a href="">Sopa</a></li>
                    
                </ul>
                <CartWidget />
            </div>
         
        </nav>
    )
}

export default NavBar