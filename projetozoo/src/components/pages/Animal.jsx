import NavBar from '../Layoult/NavBar'
import Footer from '../Layoult/Footer'

import styles from './Animal.module.css'

import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

function Animal() {
    const { id } = useParams()
    
    const [animal, setAnimal] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/animals/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },

        }).then((response) => response.json())
          .then((data) => {
            setAnimal(data)
          })
          .catch((err) => console.log(err))
    }, [id])



    return(
        <>
        <NavBar />
        <p>{animal.idnome}</p>

        <Footer />
        </>
    )
}

export default Animal