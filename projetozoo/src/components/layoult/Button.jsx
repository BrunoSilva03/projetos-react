import { Link } from 'react-router-dom'
import styles from './Button.module.css';

function Button({ to, texto }) {
    return (
        <Link to={to}>
            <button className={styles.buttonLayoult}>{texto}</button>
        </Link>
    )
}

export default Button;