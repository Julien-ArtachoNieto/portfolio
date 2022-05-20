import "./styles/projetList.css"
import Carousel from "./Carousel";
import githubLogo from "../assets/images/logos/GitHub-Logo-32px.png"
const ProjetList = ({nom_projet,description,stack,images,github}) =>{
  return(
    <div className="projets-container">
        <h2 className="projets-titre">{nom_projet}</h2>
        <p className="projets-description">{description}</p>
        <ul className="projets-stack-list">
          {stack.map((element)=><li className="projets-stack-list-item">{"#"+element}</li>)}
        </ul>
        <Carousel className="carousel" listImg={images} />
      <a href={github}><img src={githubLogo} alt="github logo" /></a>
    </div>
  )
}
export default ProjetList