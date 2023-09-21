import styles from './Article.module.css';

import { FaCat, FaFrog } from 'react-icons/fa'



function Article({ animalType, description, animals, aliment, habitat }) {
    /*

    var backgroundImage = window.document.querySelector('.articleImg')

    function addClass(animalType) {
        
        if(animalType == "Felinos") {
            backgroundImage.classList.add('felinos');
    
        } else if(animalType == "Répteis") {
            backgroundImage.classList.add('repteis');
        }
    }
    */




    return (
        <>
            <p className={styles.title}>
                <h1>{animalType == "Felinos" && <FaCat />}
                    {animalType == "Répteis" && <FaFrog />} {animalType}
                </h1>
            </p>




            <div className={(animalType == "Felinos" ? styles.felinos : (
                animalType == "Répteis" ? styles.repteis : " "
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