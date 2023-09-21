import NavBar from '../layoult/NavBar';
import Footer from '../layoult/Footer';

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
                     <h1 id="image">ZOO MANAGER</h1>
                 </div>
                
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Home;