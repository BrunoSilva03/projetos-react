import NavBar from '../layoult/NavBar'
import Form from '../layoult/Form'
import Footer from '../layoult/Footer'

import styles from './NewAnimal.module.css'


function NewAnimal() {
    return (
        <>
            <NavBar />
            <div className={styles.newAnimalBody}>
                <div className={styles.newAnimal_Container}>
                    <h1>Cadastrar Novo Animal</h1>
                    <section >
                        <form className={styles.sectionForm}>
                            <p><p><label htmlFor="name">Nome:</label></p> <input id="name" name="name" type="text" /></p>

                            <p><p><label htmlFor="animalType">Tipo do Animal:</label></p> <select name="animalType" id="animalType"></select></p>


                            <p><p><label htmlFor="description">Descrição:</label></p> <input id="description" name="description" type="text" /></p>


                            <p><p><label htmlFor="aliment">Alimentação:</label></p> <input id="aliment" name="aliment" type="text" /></p>

                            <p><p><label htmlFor="habitat">Habitat:</label></p> <select name="habitat" id="habitat"></select></p>

                            <p><div className={styles.areaButton}><input type="submit" className={styles.btnCadastrar} value="Cadastrar"/></div></p>
                        </form>
                    </section>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default NewAnimal;