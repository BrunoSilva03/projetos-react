import styles from './ButtonSubmit.module.css'

function ButtonSubmit({ text }) {
    return (
        <div className={styles.areaButton}>
            <input type="submit" value={text} className={styles.btn}/>
        </div>
    )
}

export default ButtonSubmit;