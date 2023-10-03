import NavBar from '../layoult/NavBar'
import ProjectForm from '../projects/ProjectForm'
import Footer from '../layoult/Footer'

import styles from './NewAnimal.module.css'


function NewAnimal() {
    return (
        <>
            <NavBar />

            <div className={styles.newAnimalBody}>
                <div className={styles.newAnimal_Container}>
                    <h1>Cadastrar Novo Animal</h1>
                    <ProjectForm />
                    {/*
                    <section >
                        <form className={styles.sectionForm}>
                            <p><p><label htmlFor="name">Nome:</label></p> <input id="name" name="name" type="text" placeholder="Insira o nome do animal"/></p>

                            <p>
                                <p><label htmlFor="animalType">Tipo do Animal:</label>
                                </p>
                                <select name="animalType" id="animalType">
                                    <option value="selecionar" selected >Selecionar...</option>
                                    <option value="felino">Felino</option>
                                    <option value="reptil">Réptil</option>
                                    <option value="ave">Ave</option>
                                    <option value="anfibio">Anfíbio</option>
                                    <option value="peixe">Peixe</option>
                                    <option value="other">Outros</option>
                                </select>
                            </p>


                            <p><p><label htmlFor="description">Descrição:</label></p> <input id="description" name="description" type="text" placeholder="Insira a descrição do animal"/></p>


                            <p><p><label htmlFor="aliment">Alimentação:</label></p> <input id="aliment" name="aliment" type="text" placeholder="Insira a alimentação do animal"/></p>

                            <p><p><label htmlFor="habitat">Habitat:</label></p>
                                <select name="habitat" id="habitat">
                                    <option value="selecionar" selected>Selecionar...</option>
                                    <option value="terra">Terra</option>
                                    <option value="ar">Ar</option>
                                    <option value="agua">Água</option>
                                    <option value="aguaeterra">Água e Terra</option>
                                    <option value="terraear">Terra e Ar</option>
                                    <option value="aguaterraear">Água, Terra e Ar</option>
                                </select>
                            </p>

                            <p><div className={styles.areaButton}><input type="submit" className={styles.btnCadastrar} value="Cadastrar" /></div></p>
                        </form>
                    </section>
                */}
                </div>
            </div>

            <Footer />

        </>
    )
}

export default NewAnimal;