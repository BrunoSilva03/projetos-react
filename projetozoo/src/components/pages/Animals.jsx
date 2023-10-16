import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'
import AnimalsCard from '../projects/AnimalsCard'


import { useState, useEffect } from 'react'

import styles from './Animals.module.css'

function Animals() {
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/animals', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                setAnimals(data)
            })
            .catch((err) => console.log(err))
    }, [])

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


    return (
        <>
            <NavBar />
            

                <div className={styles.AnimalsPageBody}>
                    {animals.length > 0 &&
                        animals.map((animal) => (
                            <AnimalsCard
                                name={animals.idnome}
                                
                                aliment={animals.aliment}
                                
                                description={animals} />

                        ))
                    }
                </div>
            
            <Footer />
        </>
    )
}

export default Animals;