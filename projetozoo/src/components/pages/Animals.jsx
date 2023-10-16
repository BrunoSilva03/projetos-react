import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import AnimalsCard from '../projects/AnimalsCard'

import {useState, useEffect} from 'react'

import styles from './Animals.module.css'

function Animals() {
    const [animals, setAnimals] = useState([])

    /*
    useEffetct(() => {

        fetch('http://localhost:5000/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json'
            }
        }).then((response) => response.json())
          .then((data) => {
            console.log(data)
          })
          .catch((err) => console.log(err))

    }, [])
    */


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