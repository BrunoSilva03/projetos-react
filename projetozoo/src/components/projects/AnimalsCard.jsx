import styles from './AnimalsCard.module.css'

function AnimalsCard() {
    return(
        <div className={styles.card}>
            <h1>Nome animal</h1>
            <p>Tipo do animal</p>
            <p>Alimentação</p>
            <p>Habitat</p>
            <p>Descrição</p>
        </div>
        
    )
}

export default AnimalsCard