import {useState} from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import ButtonClear from '../Form/ButtonClear'
import SubmitButton from '../Form/ButtonSubmit'

import styles from './ProjectForm.module.css';

function ProjectForm() {
    return(
        <form>
            

            <Input type="text" 
            text="Nome: "
            name="idnome"
            placeholder="Insira o nome do animal"/>


            <Select text="Tipo do animal:"
            name="idanimalType"
            />

            

            <Input type="text"
            text="Alimentação: "
            name="idaliment"
            placeholder="Insira o que o animal costuma comer" />




            <Select text="Habitat:"
            name="idhabitat"/>

            <div className={styles.divButton}>
                <ButtonClear text="Limpar" />
                <SubmitButton text="Cadastrar" />
            </div>




        </form>
    )
}

export default ProjectForm;