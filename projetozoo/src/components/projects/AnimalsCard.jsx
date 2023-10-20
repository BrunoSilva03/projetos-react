import Button from '../layoult/Button'

import styles from './AnimalsCard.module.css'

import { FaPen, FaTrash } from 'react-icons/fa'

function AnimalsCard({ id, idnome, animalType, idaliment, habitat, description, handleRemove }) {

    const remove = (event) => {
        console.log('entrou no remove')
        console.log('id: ' + id)
        event.preventDefault()
        handleRemove(id)
    }
    return (
        <>
            <div className={styles.card}>
                <h1> {idnome} </h1>
                <div className={styles.conteudoCard}>
                    <p> Tipo: {animalType} </p>
                    <p> Alimentação: {idaliment} </p>
                    <p> Habitat: {habitat} </p>

                    {description ? <p > Descrição: <span style={{ color: 'greenyellow' }}>{description}</span> </p> : <p>Descrição: <span style={{ color: 'black', textDecoration: 'line-through' }}>sem descrição</span></p>}



                </div>
                <p className={styles.areaBotoes}>
                    <button className={styles.buttonAlterarAnimal} >Alterar <FaPen /></button>
                    <button className={styles.buttonRemoverAnimal} onClick={remove}>Excluir <FaTrash /></button>
                </p>
            </div>

        </>

    )
}

export default AnimalsCard