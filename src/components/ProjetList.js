import "./styles/projetList.css"
import Carousel from "./Carousel";
import githubLogo from "../assets/images/logos/github-logo.png"
const ProjetList = ({nom_projet,description,stack,images,github,date_debut,date_fin}) =>{
  return(
    <div className="projets-container">
        <h2 className="projets-titre">{nom_projet} - {date_debut}/{date_fin}</h2>
        <p className="projets-description">{description}</p>
        <ul className="projets-stack-list">
          {stack.map((element)=><li className="projets-stack-list-item">{"#"+element}</li>)}
        </ul>
        <Carousel className="carousel" listImg={images} />
      <a className="projet-link-github" href={github}><img src={githubLogo} alt="github logo" /></a>
    </div>
  )
}
export default ProjetList