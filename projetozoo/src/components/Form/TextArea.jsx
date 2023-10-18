import styles from './TextArea.module.css'

function TextArea( {text, name, id, placeholder, cols, rows} ) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea name={name} id={id} 
            cols={cols} rows={rows} 
            placeholder={placeholder}></textarea>
        </div>
    )
}

export default TextArea