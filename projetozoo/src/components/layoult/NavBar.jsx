import { Link } from 'react-router-dom'
import Container from './Container'

import { FaKiwiBird } from 'react-icons/fa';

import styles from './NavBar.module.css'
import logo from '../../../imagens/lion-72px.png'
import jungle from '../../../imagens/jungle-savage.jpg'


function NavBar() {
    return (
        <nav className={styles.navbar}>
            
            


                <Link to="/">
                    <div className={styles.icons}>
                        <FaKiwiBird />
                    </div>
                </Link>
                <ul>
                    <li>
                        <Link to="/animalstest">
                            <p>Animais</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/newanimal">
                            <p>Adicionar Animal</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/about">
                            <p>Sobre</p>
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact">
                            <p>Contato</p>
                        </Link>
                    </li>
                </ul>
            
        </nav>
    )
}

export default NavBar;