import cssLogo from '../assets/images/logos/css3-logo.png'
import htmlLogo from '../assets/images/logos/html5-logo.png'
import jsLogo from '../assets/images/logos/js-logo.png'
import reactLogo from '../assets/images/logos/react-logo.png'
import '../components/styles/footer.css'
const Footer =()=>{
  return (
    <footer className='footer-container'>
      <p>Fait avec : </p>
      <ul className="footer-link">
        <li><img src={htmlLogo} alt='html5 logo' /></li>
        <li><img src={cssLogo} alt='css3 logo' /></li>
        <li><img src={jsLogo} alt='javascript logo' /></li>
        <li><img src={reactLogo} alt='react logo' /></li>
      </ul>
    </footer>
  )
}
export default Footer