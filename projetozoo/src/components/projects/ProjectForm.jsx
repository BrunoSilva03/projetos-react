import {useState, useEffect} from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import ButtonClear from '../Form/ButtonClear'
import SubmitButton from '../Form/ButtonSubmit'

import styles from './ProjectForm.module.css';

function ProjectForm(handleSubmit, projectData) {
    const [animalTypes, setAnimalTypes] = useState([])
    const [habitat, setHabitat] = useState([])
    const [project, setProject] = useState(projectData || {})

    //O useEffect é para não ficar mandando requisições infinitamente ao servidor.
    //Esses dois fetchs que se seguem é para aparecer as opções do Select vindas do db.json
    useEffect(() => {
        fetch("http://localhost:5000/animalTypes", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => resp.json())
      .then((data) => {
        setAnimalTypes(data)
      })
      .catch((err) => console.log(err))
    }, [])


    useEffect(() => {
        fetch("http://localhost:5000/habitat", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
          .then((data) => {
            setHabitat(data)
          })
          .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit}>
            

            <Input type="text" 
            text="Nome: "
            name="idnome"
            placeholder="Insira o nome do animal"
            handleOnChange={handleChange}/>


            <Select text="Tipo do animal:"
            name="idanimalType"
            options={animalTypes}
            value={animalTypes.animalTypes ? animalTypes.animalTypes.id : ''}
            />

            

            <Input type="text"
            text="Alimentação: "
            name="idaliment"
            placeholder="Insira o que o animal costuma comer" 
            handleOnChange={handleChange}/>




            <Select text="Habitat:"
            name="idhabitat"
            options={habitat}/>

            <div className={styles.divButton}>
                <ButtonClear text="Limpar" />
                <SubmitButton text="Cadastrar" />
            </div>




        </form>
    )
}

export default ProjectForm;