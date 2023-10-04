import {useState, useEffect} from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import ButtonClear from '../Form/ButtonClear'
import SubmitButton from '../Form/ButtonSubmit'

import styles from './ProjectForm.module.css';

function ProjectForm() {
    const [animalTypes, setAnimalTypes] = useState([])
    const [habitat, setHabitat] = useState([])

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


    return(
        <form>
            

            <Input type="text" 
            text="Nome: "
            name="idnome"
            placeholder="Insira o nome do animal"/>


            <Select text="Tipo do animal:"
            name="idanimalType"
            options={animalTypes}
            />

            

            <Input type="text"
            text="Alimentação: "
            name="idaliment"
            placeholder="Insira o que o animal costuma comer" />




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