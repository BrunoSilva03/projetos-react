import { Link } from 'react-router-dom'

import styles from './NavBar.module.css'
import logo from '../../../imagens/lion-72px.png'

function NavBar() {
    return(
       <nav className={styles.navbar}>
            <Link to="/">
                <img src={logo} alt="Lion-logo" />
            </Link>
       </nav>
    )
}

export default NavBar;