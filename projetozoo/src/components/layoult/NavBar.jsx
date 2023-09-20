import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './NavBar.module.css'
import logo from '../../../imagens/lion-72px.png'


function NavBar() {
    return (
        <nav className={styles.navbar}>
            

                <Link to="/">
                    <img src={logo} alt="Lion-logo" />
                </Link>
                <ul>
                    <li>
                        <Link to="/animals">
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