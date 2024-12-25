/*import './Footer.css'
function Footer() {
  return (
    <footer>
      <p>Cat Explorer © {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer*/
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>Cat Explorer</h3>
          <p className='footer-description'>
            Explora el fascinante mundo de los gatos. Encuentra información
            sobre razas, cuidados y todo lo que necesitas saber sobre tu felino
            favorito.
          </p>
          <div className='social-links'>
            <a href='https://www.facebook.com/' aria-label='Facebook'>
              <Facebook className='icon' />
            </a>
            <a href='https://x.com/' aria-label='Twitter'>
              <Twitter className='icon' />
            </a>
            <a href='https://www.instagram.com/' aria-label='Instagram'>
              <Instagram className='icon' />
            </a>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Contacto</h4>
          <div className='contact-info'>
            <p>
              <Mail className='contact-icon' /> info@catexplorer.com
            </p>
            <p>
              <Phone className='contact-icon' /> +1 234 567 890
            </p>
            <p>
              <MapPin className='contact-icon' /> Ciudad Gatuna, CP 12345
            </p>
          </div>
        </div>

        <div className='footer-section'>
          <h4>Newsletter</h4>
          <p>Suscríbete para recibir noticias y actualizaciones</p>
          <form className='newsletter-form'>
            <input type='email' placeholder='Tu correo electrónico' />
            <button type='submit'>Suscribirse</button>
          </form>
        </div>
      </div>

      <div className='footer-bottom'>
        <p>
          Cat Explorer © {new Date().getFullYear()} | Hecho con{' '}
          <Heart className='heart-icon' /> por amantes de los gatos
        </p>
      </div>
    </footer>
  )
}

export default Footer
