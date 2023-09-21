import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'

import styles from './TemplatePattern.module.css'

import {FaMobile} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

function Contact() {
    return(
        <>
            <NavBar />

            <div className={styles.containerBody}>
                <section className={styles.container}>
                    <h1>Contatos:</h1>
                    <p> <i><FaMobile /></i> Celular: (031) 9 9554-5623</p>
                    <p> <i><FaGithub /></i> Github: <a href="https://github.com/BrunoSilva03" target="_blank">https://github.com/BrunoSilva03</a></p>
                    <p> <i><FaLinkedin /></i> Linkedin: <a href="https://www.linkedin.com/in/bruno-silva-rodrigues-62b6a51b0/" target="_blank">https://www.linkedin.com/in/bruno-silva-rodrigues-62b6a51b0/</a></p>
                </section>
            </div>


            <Footer />
        </>
    )
}

export default Contact;