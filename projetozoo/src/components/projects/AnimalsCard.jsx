import Button from '../layoult/Button'

import styles from './AnimalsCard.module.css'

import { FaPen, FaTrash } from 'react-icons/fa'

function AnimalsCard({ idnome, animalType, idaliment, habitat, description, handleRemove }) {
    return (
        <>
        {/**
         * 
        <p>{idnome}</p>
        <p>AnimalType = {animalType}</p>
         */}
       
            
                <div className={styles.card}>
                    <h1> {idnome} </h1>
                    <div className={styles.conteudoCard}>
                        <p> Tipo: {animalType} </p>
                        <p> Alimentação: {idaliment} </p>
                        <p> Habitat: {habitat} </p>
                        {description ? <p className={styles.descricao}> Descrição: {description} </p> : <p>Descrição: <span className={styles.semDescricao}>sem descrição</span></p>}
                        

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