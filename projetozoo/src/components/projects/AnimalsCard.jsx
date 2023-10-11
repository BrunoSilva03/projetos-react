import styles from './AnimalsCard.module.css'

import {FaPen, FaTrash} from 'react-icons/fa'

function AnimalsCard() {
    return (
        <>
            <div className={styles.card}>
                <h1>Nome animal</h1>
                <div className={styles.conteudoCard}>
                    <p>Tipo do animal:</p>
                    <p>Alimentação:</p>
                    <p>Habitat:</p>
                    <p>Descrição:</p>

                </div>
                <p className={styles.areaBotoes}>
                    <button className={styles.buttonAlterarAnimal}>Alterar <FaPen /></button>
                    <button className={styles.buttonRemoverAnimal}>Excluir <FaTrash /></button>
                    </p>
            </div>
        </>

    )
}

export default AnimalsCard