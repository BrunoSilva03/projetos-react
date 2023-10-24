import styles from './ButtonLayoult.module.css'

function ButtonEnviar({ text }) {
    return(
        <div className={styles.areaButton}>
                <button  className={styles.btnSubmit}>{text}</button>
        </div>
    )
}

export default ButtonEnviar