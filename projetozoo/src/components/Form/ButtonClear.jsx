import styles from './ButtonLayoult.module.css'

function ButtonClear({ text }) {
    return (
        <div className={styles.areaButton}>
            <input type="reset" value={text} className={styles.btnClear}/>
        </div>
    )
}

export default ButtonClear