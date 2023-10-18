import styles from './TextArea.module.css'

function TextArea( {text, name, id, placeholder, cols, rows, handleOnChange} ) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea name={name} id={id} 
            cols={cols} rows={rows} 
            placeholder={placeholder}
            onChange={handleOnChange}></textarea>
        </div>
    )
}

export default TextArea