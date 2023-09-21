import styles from './Button.module.css';

function Button({texto}) {
    return(
        <button className={styles.buttonLayoult}>{texto}</button>
    )
}

export default Button;