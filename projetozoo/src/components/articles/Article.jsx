import styles from './Article.module.css';

import { FaCat, FaFrog, FaDove, FaDragon } from 'react-icons/fa'



function Article({ animalType, description, animals, aliment, habitat }) {

    return (
        <>
            <div className={styles.title}>
                <h1>{animalType == "Felinos" && <FaCat />}
                    {animalType == "Répteis" && <FaDragon />} 
                    {animalType == "Aves" && <FaDove />} 
                    {animalType == "Anfibios" && <FaFrog />} {animalType}
                </h1>
            </div>




            <div className={(animalType == "Felinos" ? styles.felinos : (
                animalType == "Répteis" ? styles.repteis : (
                    animalType == "Aves" ? styles.aves : (
                        animalType == "Anfibios" ? styles.anfibios : (
                            animalType == "Peixes" ?  styles.fish : " "
                        )
                    )
                )
            ))}>


                <article className={styles.articleText}>
                    <h1>Descrição:</h1>
                    <p>{description}</p>

                    <h1>Alimentação: </h1>
                    <p>{aliment}</p>

                    <h1>Animais da classe: </h1>
                    <p>{animals}</p>

                    <h1>Habitat Natural:</h1>
                    <p>{habitat}</p>
                </article>

            </div>

        </>
    )
}

export default Article;