import datas from '../datas/projets.json'
import ProjetsList from "./ProjetList";
const Projets =() =>{
  return(

      <section className="content-bloc">
          {datas.projets.map((projet)=><ProjetsList nom_projet={projet.nom_projet} description={projet.description} stack={projet.stack} images={projet.images} github={projet.github} date_debut={projet.date_debut} date_fin={projet.date_fin}/>)}
      </section>

  )
}
export default Projets