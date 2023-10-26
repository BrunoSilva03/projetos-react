import NavBar from '../Layoult/NavBar'
import Footer from '../Layoult/Footer'
import Container from '../Layoult/Container'

import styles from './Animal.module.css'

import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Animal() {
    const { id } = useParams()
    
    const [animal, setAnimal] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    


    useEffect(() => {
        fetch(`http://localhost:5000/animals/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
          .then((data) => {
            setAnimal(data)
          })
          .catch((err) => console.log(err))
    }, [id])


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>
            
        
        <NavBar />
        <div>
            <Container customClass="column">
                <div>
                    <h1>Animal: {animal.idnome}</h1>
                    <button onClick={toggleProjectForm}>
                        {!showProjectForm ? 'Editar animal' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div>
                                <p>
                                <span>Habitat: </span> 
                                   {/* {console.log('animalType: ' + animal.animalType.name)} */}
                                </p>
                                <p>
                                    <span>Alimentação: </span> {animal.idaliment}
                                </p>
                                <p>
                                    <span>Descrição: </span> {animal.description}
                                </p>
                                <p>
                                <span>Tipo do animal: </span> 
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