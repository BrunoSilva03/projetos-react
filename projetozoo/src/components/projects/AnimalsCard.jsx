import Button from '../layoult/Button'

import styles from './AnimalsCard.module.css'

import { FaPen, FaTrash } from 'react-icons/fa'

function AnimalsCard({ idnome, animalType, aliment, habitat, description }) {
    return (
        <>
        <p>projeto</p>
        {/*
            {animals ?
                <div className={styles.card}>
                    <h1> {name} </h1>
                    <div className={styles.conteudoCard}>
                        <p> {animalType} </p>
                        <p> {aliment} </p>
                        <p> {habitat} </p>
                        <p> {description} </p>

                    </div>
                    <p className={styles.areaBotoes}>
                        <button className={styles.buttonAlterarAnimal}>Alterar <FaPen /></button>
                        <button className={styles.buttonRemoverAnimal}>Excluir <FaTrash /></button>
                    </p>
                </div>
            : 
            <div className={styles.nenhumAnimalCadastradoDiv}>
                <h1>Não há nenhum animal cadastrado no sistema</h1>
                <Button to="/newAnimal" texto="Cadastrar Animal" />

            </div>}

            */}
        </>

    )
}

export default AnimalsCard