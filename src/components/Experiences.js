import datas from "../datas/exp.json"
import ExperiencesList from "./ExperiencesList";
const Experiences =()=>{
  return(
    <section className="content-bloc">
      {datas.experiences.map((exp)=> <ExperiencesList poste={exp.poste} entreprise={exp.entreprise} date_debut={exp.date_debut} date_fin={exp.date_fin} description={exp.description} /> )}
    </section>
  )
}
export default Experiences