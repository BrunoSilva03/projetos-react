import {useState} from 'react'

import Input from '../Form/Input'

import styles from './ProjectForm.module.css';

function ProjectForm() {
    return(
        <form>
            

            <Input type="text" 
            text="Nome: "
            name="idnome"
            placeholder="Insira o nome do animal"/>


            <label htmlFor="idanimaltype">Tipo do animal:</label>
            <select name="animaltype" id="idanimaltype"></select>

            

            <Input type="text"
            text="Alimentação: "
            name="idaliment"
            placeholder="Insira o que o animal costuma comer" />

            <label htmlFor="idhabitat">Habitat:</label>
            <select name="habitat" id="idhabitat"></select>



        </form>
    )
}

export default ProjectForm;