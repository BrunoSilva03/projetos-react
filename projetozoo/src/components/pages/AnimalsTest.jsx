import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layoult/Message'
import Button from '../layoult/Button'
import Container from '../layoult/Container'
import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import AnimalsCard from '../projects/AnimalsCard'

import styles from './AnimalsTest.module.css'

function AnimalTest() {
    const [animals, setAnimals] = useState([])
    const [animalMessage, setAnimalMessage] = useState('')
    const [showProjectForm, setProjectForm] = useState(false)
    const [type, setType] = useState()


    const location = useLocation()
    let message= ''
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
          .then((data) => {
            setAnimals(data)
          })
          .catch((error) => console.log(error))
    }, [])


    function removerAnimal(id) {
        fetch(`http://localhost:5000/animals/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
          .then(() => {
            setAnimals(animals.filter((animal) => animal.id !== id))
            setAnimalMessage('Animal removido do sistema com Sucesso!')
          })
           .catch((err) => console.log(err))
    }

    function updateAnimal(id) {
        fetch(`http://localhost:5000/animals/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then((response) => response.json())
          .then((data) => {
            setAnimals(data)
            setShowProjectForm(false)
            setAnimalMessage('Animal atualizado com sucesso!!!')
            setType('sucess')
          })
          .catch((err) => console.log(err))
    }


    return(
        <>
        <NavBar />
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Animais</h1>
                        <Button to="/newanimal" texto="cadastrar novo animal"/>
            </div>
        {message && <Message msg={message} type="sucess"/>}
        {animalMessage && <Message type="sucess" msg={animalMessage} />}
        <Container customClass="start">
            {animals.length > 0 ? 
            animals.map((animal) => (
                //Tem que escrever os dados do jeito que está no banco de dados idnome ao invés de name
                //console.log("animal.idnome = " + animal.idnome),
                //console.log("animalType.name:" + animal.animalType.name),
                <AnimalsCard 
                id={animal.id}
                idnome={animal.idnome}
                animalType={animal.animalType.name}
                idaliment={animal.idaliment}
                habitat={animal.habitat.name}
                description={animal.description}
                handleRemove={removerAnimal}/>
            ))
            :
            <div className={styles.noAnimals}>
                <p>Não há animais cadastrados no sistema nesse exato momento</p>
            </div>}
        </Container>
        
        </div>
        <Footer />
        </>
    )
}

export default AnimalTest