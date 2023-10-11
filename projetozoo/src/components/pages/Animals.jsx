import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import AnimalsCard from '../projects/AnimalsCard'

import styles from './Animals.module.css'

function Animals() {
    return(
        <>
            <NavBar />
            <div className={styles.AnimalsPageBody}>
               <AnimalsCard />
            </div>
            <Footer />
        </>
    )
}

export default Animals;