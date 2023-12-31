import {useState, useEffect} from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import TextArea from '../Form/TextArea'
import ButtonClear from '../Form/ButtonClear'
import SubmitButton from '../Form/ButtonSubmit'
import ButtonEnviar from '../Form/ButtonEnviar'

import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData} ) {
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
        console.log(submit)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
    }

    function handleAnimalType(e) {
        setProject({
            ...project,
            animalType: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            },
        })
    }

    function handleDescription(e) {
        setProject({
            ...project,
            description: e.target.value
        })
    }


    function handleHabitat(e) {
        setProject({
            ...project,
            habitat: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    function checkInputs() {
        var nome = window.document.querySelector('input').name('idnome');
        console.log("nome animal: " + nome.value);
    }


   

    return(
        <form onSubmit={submit}>
            

            <Input type="text" 
            text="Nome: "
            name="idnome"
            placeholder="Insira o nome do animal"
            autocomplete="off"
            handleOnChange={handleChange}
            />


            <Select text="Tipo do animal:"
            name="idanimalType"
            options={animalTypes}
            handleOnChange={handleAnimalType}
            value={project.animalType ? project.animalType.id : ' '}
            />

            

            <Input type="text"
            text="Alimentação: "
            name="idaliment"
            placeholder="Insira o que o animal costuma comer" 
            autocomplete="off"
            handleOnChange={handleChange}
            />




            <Select text="Habitat:"
            name="idhabitat"
            options={habitat}
            handleOnChange={handleHabitat}
            value={project.habitat ? project.habitat.id : ' '}/>



            <TextArea text="Descrição:"
            placeholder="breve descrição do animal"
            rows="5"
            handleOnChange={handleDescription}
            value={project.description? project.description: ' '}
            />
            

            <div className={styles.divButton}>
                <ButtonClear text="Limpar" />
                {/*
                <SubmitButton onClick={() => {
                    
                    
                    
                }}text="Cadastrar" />
                */}
                {btnText ? <ButtonEnviar text={btnText} /> : <ButtonEnviar text="Cadastrar" /> }
                
            </div>




        </form>
    )
}

export default ProjectForm;