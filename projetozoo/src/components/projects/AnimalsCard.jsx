import Button from '../layoult/Button'

import styles from './AnimalsCard.module.css'

import { FaPen, FaTrash } from 'react-icons/fa'

function AnimalsCard({ id, idnome, animalType, idaliment, habitat, description, handleRemove }) {

    const confirmação = (event) => {
        var resposta = confirm("Deseja remover esse registro?");

        if(resposta === true) {
            remove(event)
        }
    }


    function remove(event) {
        event.preventDefault()
        handleRemove(id)
    }

   


    return (
        <>
            <div className={styles.card}>
                <h1> {idnome} </h1>
                <div className={styles.conteudoCard}>
                    <p> Tipo: {animalType} </p> 
                    {console.log("animalType: " + animalType)}
                    <p> Alimentação: {idaliment} </p>
                    <p> Habitat: {habitat} </p> 
                    
                    {console.log("habitat: " + habitat)}

                    {description ? <p > Descrição: <span style={{ color: 'greenyellow' }}>{description}</span> </p> : <p>Descrição: <span style={{ color: 'black', textDecoration: 'line-through' }}>sem descrição</span></p>}



                </div>
                <p className={styles.areaBotoes}>
                    <Button to={`/animals/${id}`} texto="Alterar" icone={<FaPen />}/>
                    <button className={styles.buttonRemoverAnimal} onClick={confirmação}>Excluir <FaTrash /></button>
                </p>
            </div>

        </>

    )
}

export default AnimalsCard