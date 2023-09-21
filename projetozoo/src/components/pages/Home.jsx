import NavBar from '../layoult/NavBar';
import Footer from '../layoult/Footer';
import Button from '../layoult/Button';

import styles from './Home.module.css';
import butterfly from '../../../imagens/butterfly-256px.png'

function Home() {
    return (
        <div>
            <NavBar />
            
            <div className={styles.containerBody}>
                <section className={styles.container}>
                 <div className={styles.titleContainer}>
                     <img src={butterfly} alt="Butterfly" />
                     <h1>ZOO MANAGER</h1>
                 </div>
                
                <div className={styles.botao}><Button texto="Cadastrar Animal" /></div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Home;