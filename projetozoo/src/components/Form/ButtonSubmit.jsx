import styles from './ButtonLayoult.module.css'

function ButtonSubmit({ text }) {
    return (
        <div className={styles.areaButton}>
            <input type="submit" value={text} className={styles.btnSubmit}/>
        </div>
    )
}

export default ButtonSubmit;