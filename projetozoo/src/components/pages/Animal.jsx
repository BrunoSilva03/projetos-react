import NavBar from '../Layoult/NavBar'
import Footer from '../Layoult/Footer'
import Container from '../Layoult/Container'
import Message from '../Layoult/Message'
import ProjectForm from '../projects/ProjectForm'

import styles from './Animal.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Animal() {
    const { id } = useParams()

    const [animal, setAnimal] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [tipoAnimal, setTipoAnimal] = useState()
    const [habitat, setHabitat] = useState()
    const [message, setMessage] = useState()
    const [type, setType] = useState()




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
                console.log("animalType: " + data.animalType.name)
                console.log(data)
                console.log(animal)
                console.log("description: " + data.description)
            })
            .catch((err) => console.log(err))
    }, [id])


    function updateAnimal(animal) {
        fetch(`http://localhost:5000/animals/${animal.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animal),
        })
          .then(resp => resp.json())
          .then((data) => {
            setAnimal(data)
            setShowProjectForm(false)
          })
           .catch(err => console.log(err))
    }


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
        console.log(animal)
    }

    return (
        <>


            <NavBar />
            <div>
                <Container customClass="column">
                    <div className={styles.animal_details}>
                        {message && <Message type={type} msg={message} />}
                        <h1>Animal: {animal.idnome}</h1>

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
                                    <span>Habitat: </span> {habitat}
                                </p>

                                {animal.description ? (
                                    <p>
                                        <span>Descrição: </span> <span style={{ fontWeight: 'normal', color: 'greenyellow' }}>{animal.description}</span>
                                    </p>
                                ) : (
                                    <p>
                                        <span>Descrição: </span> <span style={{ textDecoration: 'line-through' }}>sem descrição</span>
                                    </p>
                                )}

                                <div className={styles.areaButton}>
                                    <button className={styles.btn} onClick={toggleProjectForm}>
                                        {!showProjectForm ? 'Editar animal' : 'Fechar'}
                                    </button>
                                </div>

                            </div>


                        ) : (
                            <div className={styles.soPraCentralizarDiv}>
                                <div className={styles.animal_info}>
                                
                                        <ProjectForm handleSubmit={updateAnimal} btnText="Concluir Update" 
                                        projectData={animal}/>
                                
                                </div>
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