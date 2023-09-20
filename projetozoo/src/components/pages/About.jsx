import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import TemplatePattern from './TemplatePattern.module.css'

function About() {
    return(
        <>
            <NavBar />
            <section className={styles.container}>
                <h1>Sobre:</h1>
                <p>O jardim zoológico é um lugar legal!</p>
                <p>Bem legal</p>
            </section>
            <Footer />
        </>
    )
}

export default About;
