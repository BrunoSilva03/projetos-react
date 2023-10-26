import NavBar from '../Layoult/NavBar'
import Footer from '../Layoult/Footer'
import Container from '../Layoult/Container'
import AnimalCard from '../projects/AnimalsCard'

import styles from './Animal.module.css'

import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Animal() {
    const { id } = useParams()
    
    const [animal, setAnimal] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [tipoAnimal, setTipoAnimal] = useState()
    const [habitat, setHabitat] = useState()
    
    


    useEffect(() => {
        fetch(`http://localhost:5000/animals/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        })
          .then((response) => response.json())
          .then((data) => {
            setAnimal(data)
            setTipoAnimal(data.animalType.name)
            setHabitat(data.habitat.name)
            const tipoAnimal = data.animalType.name
            const habitat = data.habitat.name
            console.log("animalType: " + data.animalType.name)
            console.log(data)
            console.log(animal)
            console.log("description: " + data.description)
          })
          .catch((err) => console.log(err))
    }, [id])


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
        console.log(animal)
    }

    return(
        <>
            
        
        <NavBar />
        <div>
            <Container customClass="column">
                <div className={styles.animal_details}>
                    <h1>Animal: {animal.idnome}</h1>
                    <button onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar animal' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div>
                            <p>
                            <span>Tipo do animal: </span> {tipoAnimal}
                           
                               {/* {console.log('animalType: ' + animal.animalType.name)} */}
                            </p>
                            <p>
                                <span>Alimentação: </span> {animal.idaliment}
                            </p>
                            <p>
                                <span>Descrição: </span> {animal.description}
                            </p>
                            <p>
                            <span>Habitat: </span> {habitat}
                            </p>
                        </div>
                            
                           
                        ) : (
                            <div>
                                <p>detalhes do projeto</p>
                            </div>
                        )}
                </div>
            </Container>
        </div>
        

        <Footer />
        </>
    )
}

export default Animal