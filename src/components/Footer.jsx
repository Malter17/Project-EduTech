import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">EduTech</h3>
            <p className="text-gray-400">Transformasi Pendidikan Digital</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Informasi Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary" />
                <span>Jalan Pendidikan 123, Jakarta Selatan</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FontAwesomeIcon icon={faPhone} className="text-primary" />
                <span>(021) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
                <span>info@edutech.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Jam Operasional</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <FontAwesomeIcon icon={faClock} className="text-primary" />
                <div>
                  <p>Senin - Jumat</p>
                  <p>09:00 - 17:00</p>
                </div>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <FontAwesomeIcon icon={faClock} className="text-primary" />
                <div>
                  <p>Sabtu</p>
                  <p>09:00 - 15:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-400">Dapatkan update terbaru tentang kursus dan promo spesial.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Alamat email anda"
                className="w-full px-4 py-2 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
              />
              <button type="submit" className="btn w-full">
                Berlangganan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} EduTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;