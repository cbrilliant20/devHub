import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer>
      <p>Cameron Brilliant</p>
      <div className="socials">
        <a href="https://github.com/cbrilliant20" target="_blank">
          <FontAwesomeIcon className="social-icon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/cameron-brilliant/"
          target="_blank"
        >
          <FontAwesomeIcon className="social-icon" icon={faLinkedin} />
        </a>
      </div>
      <p>2021</p>
    </footer>
  )
}

export default Footer
