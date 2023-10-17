import { useNavigate } from 'react-router-dom'

import NavBar from '../layoult/NavBar'
import ProjectForm from '../projects/ProjectForm'
import Footer from '../layoult/Footer'

import styles from './NewAnimal.module.css'


function NewAnimal() {

    const Navigate = useNavigate();

    function createPost(project) {

        //Initialize services
        project.animals = 0;

        fetch('http://localhost:5000/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            Navigate("/animals", { message: 'Animal cadastrado no sistema com sucesso!'})
        })
        .catch(err => console.log(err))
    }




    return (
        <>
            <NavBar />

            <div className={styles.newAnimalBody}>
                <div className={styles.newAnimal_Container}>
                    <h1>Cadastrar Novo Animal</h1>
                    <ProjectForm handleSubmit={createPost}/>
                    
                </div>
            </div>

            <Footer />

        </>
    )
}

export default NewAnimal;