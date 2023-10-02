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
                    <section className={styles.sectionForm}>
                        <form>
                            <p><label htmlFor="name">Nome:</label> <input id="name" name="name" type="text" /></p>

                            <p><label htmlFor="animalType">Tipo do Animal:</label> <select name="animalType" id="animalType"></select></p>


                            <p><label htmlFor="description">Descrição:</label> <input id="description" name="description" type="text" /></p>


                            <p><label htmlFor="aliment">Alimentação:</label> <input id="aliment" name="aliment" type="text" /></p>

                            <p><label htmlFor="habitat">Habitat:</label> <select name="habitat" id="habitat"></select></p>
                        </form>
                    </section>
                </div>
            </div>


            <Footer />

        </>
    )
}

export default NewAnimal;