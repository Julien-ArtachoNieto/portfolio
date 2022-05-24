import "./styles/experiencesList.css"
const ExperiencesList =({poste,entreprise,date_debut,date_fin,description})=>{
  return(
    <div className="experiencesList-container">
      <h2>{poste} - {date_debut}/{date_fin}</h2>
      <h3>{entreprise}</h3>
      <p>{description}</p>

    </div>
  )
}
export default ExperiencesList