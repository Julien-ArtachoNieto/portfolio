import "./styles/home.css"
import githubLogo from "../assets/images/logos/github-logo.png"
import linkedinLogo from "../assets/images/logos/linkedin_social.png"
import mailLogo from "../assets/images/logos/email.png"
import photoProfil from  "../assets/images/Photos Profil_low.jpg"
import {NavLink} from "react-router-dom";
const Home =()=>{
  return(
    <section className="home-content">
     <div className="home-side-content">
      <h2>Bonjour,</h2>
      <p>Je m'appelle Julien, développeur web fullstack en NodeJs, react et toujours prêt à découvrir de nouvelles technos.</p>
      <p>Passionné depuis toujours par l'informatique et le développement web en particulier j'ai décidé d'en faire mon métier.</p>
      <p>Sortant d'une formation intensive de 5 mois, je souhaite approfondir mes connaissances.
      Actuellement à la recherche d'une entreprise pour une alternance à la <a href = "https://www.wildcodeschool.com/fr-FR/alternance" target="_blank">WildCodeSchool</a> dans le but d'augmenter mes compétences et préparer un titre professionnel Concepteur Développeur d'Applications.</p>
      <p>Elle débutera le <strong>12/09/2022</strong> jusqu'au <strong>05/09/2023</strong>, sur un rythme de <strong>3 semaines en entreprise</strong> et <strong>1 en formation</strong>.
        Les principales technologies étudiées durant l'alternance seront principalement:
        <ul className="home-stack-list">
          <li>React</li>
          <li>React Native</li>
          <li>NodeJs</li>
          <li>TypeScript</li>
          <li>MongoDb</li>
          <li>GraphQl</li>
        </ul></p>
      <p>Pour plus de détail à mon propos ou de l'alternance n'hésitez pas à me contacter !</p>
      <div className="link-container">
        <ul className="home-contact-icon">
          <li><NavLink to="contact"><img src={mailLogo} alt="mail logo" /></NavLink></li>
          <li><a href="https://www.linkedin.com/in/julien-artacho-nieto/" target="_blank"><img src={linkedinLogo} alt="linkedin logo"/></a> </li>
          <li><a href="https://github.com/Julien-ArtachoNieto" target="_blank"><img src={githubLogo} alt="github logo"/></a> </li>
        </ul>
      </div>
     </div>
      <div>
        <img className="home-photo" src={photoProfil} alt="profil"/>
      </div>
    </section>
  )
}
export default Home