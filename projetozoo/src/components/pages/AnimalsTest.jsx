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
            console.log(data)
            setAnimals(data)
          })
          .catch((error) => console.log(error))
    }, [])


    return(
        <>
        <NavBar />
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Animais</h1>
                        <Button to="/newanimal" texto="cadastrar novo animal"/>
            </div>
        {message && <Message msg={message} type="sucess"/>}
        <Container customClass="start">
            {animals.length > 0 ? 
            animals.map((animal) => (
                //Tem que escrever os dados do jeito que está no banco de dados idnome ao invés de name
                console.log("animal.idnome = " + animal.idnome),
                console.log("animalType.name:" + animal.animalType.name),
                <AnimalsCard idnome={animal.idnome}
                animalType={animal.animalType.name}
                idaliment={animal.idaliment}
                habitat={animal.habitat.name}
                description={animal.description}/>
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