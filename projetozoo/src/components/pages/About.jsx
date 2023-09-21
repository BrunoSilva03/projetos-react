import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import styles from './TemplatePattern.module.css'

import {FaReact} from 'react-icons/fa'

function About() {
    return(
        <>
            <NavBar/>
            <div className={styles.containerBody}>
                <section className={styles.container}>
                    <h1>Sobre:</h1>
                    <p>Simulação de um Sistema de Gerenciamento de animais de um jardim zoológico.</p>
                    <p>Feito em React <i>
                        <FaReact />
                    </i></p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About;
