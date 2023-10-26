import { Link } from 'react-router-dom'
import styles from './Button.module.css';
import { FaPen } from 'react-icons/fa'

function Button({ to, texto, icone }) {
    return (
        <Link to={to}>
            <button className={styles.buttonLayoult}>{texto}
            {icone}</button>
        </Link>
    )
}

export default Button;