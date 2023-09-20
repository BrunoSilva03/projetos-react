import styles from './Footer.module.css'
import { FaPaw } from 'react-icons/fa'

function Footer() {
    return <footer className={styles.footer}>
        <FaPaw /><p>&copy; Copyright: Bruno Silva Rodrigues - 2023 </p><FaPaw />
    </footer>
}

export default Footer