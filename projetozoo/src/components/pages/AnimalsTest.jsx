import { useLocation } from 'react-router-dom'

import Message from '../layoult/Message'
import Button from '../layoult/Button'
import Container from '../layoult/Container'
import NavBar from '../layoult/NavBar'
import Footer from '../layoult/Footer'

import styles from './AnimalsTest.module.css'

function AnimalTest() {

    const location = useLocation()

    let message= ''
    if(location.state) {
        message = location.state.message
    }


    return(
        <>
        <NavBar />
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>AnimalTest</h1>
                        <Button to="/newanimal" texto="cadastrar novo animal"/>
            </div>
        {message && <Message msg={message} type="sucess"/>}
        <Container customClass="start">
            <p>Cadastrar Animal</p>
        </Container>
        
        </div>
        <Footer />
        </>
    )
}

export default AnimalTest