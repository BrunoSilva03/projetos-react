import NavBar from '../layoult/NavBar';
import Footer from '../layoult/Footer';
import Button from '../layoult/Button';
import Article from '../articles/Article';

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

            <article className={styles.article}>
                <Article
                    animalType="Felinos"

                    description="Os felinos fazem parte da grande família de mamíferos carnívoros, que vai desde o gato doméstico até o leão, o rei da selva. Todos apresentam garras longas e encurvadas e alguns deles possuem unhas retrateis, ou seja, quando o animal as encolhe, elas são envolvidas pelas dobras da pele. As patas da frente têm 5 dedos e as de trás 4. Todos são privilegiados de um ótimo olfato, audição aguda e a capacidade de enxergar muito bem durante a noite. Possuem mais de 500 músculos e mantém o controle sobre todos. Sua espinha é bastante flexível, o que lhes permite subir em árvores com facilidade."

                    animals="Alguns exemplos de felinos são: Gato doméstico, Gato-leopardo asiático, Jaguatirica, Leão, Leopardo, Lince-ibérico, Onça-pintada, Leão da Montanha, Puma, Pantera Negra e Tigre"

                    aliment="Felinos são carnívores, ou seja se alimentam da carne de outros animais como a Zebra, Girafa, Antílope, Gnu, Veados Javalis, Coelhos, pequenos mamíferos e pássaros, e até mesmo alguns répteis como o jacaré no caso da Onça-Pintada. Os gatos domésticos comumente se alimentam de ração."

                    habitat="Cerrado Caatinga, Pantanal, Florestas Tropicais e Sub-Tropicais"

                    
                 />

                 <Article 
                    animalType="Répteis"

                    description="O termo réptil vem do latim reptilis e significa “que se arrasta”. Os répteis (latim científico: Reptilia) constituem uma classe de animais vertebrados tetrápodes e ectotérmicos, ou seja, não possuem temperatura corporal constante. São todos amniotas (animais cujos embriões são rodeados por uma membrana amniótica), característica que lhes permitiu ficarem independentes da água para reprodução, ao contrário dos anfíbios. Os répteis atuais são representados por quatro ordens: Testudines, Crocodylia, Squamata e Rhynchocephalia."

                    animals="Alguns exemplos de répteis são a Cobra, Jacaré, Crocodilo, Teiú, calango, Dragão de Komodo lagartos e tartarugas"

                    aliment="O tipo de alimentação dos répteis varia conforme a espécie, alguns se alimentam de ovos, peixes, animais, outros de insetos e até mesmo flores, sementes e algas. Portanto, cada espécie possui sua própria característica de alimentação, influenciada diretamente pelo habitat em que vive."

                    habitat="os répteis podem ser encontrados em boa parte da Terra, com exceção de locais muito frios, devido a característica de serem animais de sangue frio, influenciados pela temperatura ambiente."
                 />
            </article>
            <Footer />
        </div>
    )
}

export default Home;