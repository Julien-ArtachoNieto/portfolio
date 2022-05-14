import datas from '../datas/projets.json'
import ProjetsList from "./ProjetList";
const Projets =() =>{
  return(
    <div>
      <section className="content-bloc">
          {datas.projets.map((projet)=><ProjetsList nom_projet={projet.nom_projet} description={projet.description} stack={projet.stack} images={projet.images}/>)}
      </section>
    </div>
  )
}
export default Projets