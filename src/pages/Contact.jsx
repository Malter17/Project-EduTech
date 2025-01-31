import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama wajib diisi';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan wajib diisi';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=1000" 
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl text-gray-300">Terhubung dengan Tim Kami</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Informasi Kontak</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faLocationDot} className="text-primary text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Alamat</h3>
                  <p className="text-gray-400">Jalan Restoran 123</p>
                  <p className="text-gray-400">Kota Kuliner, KK 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Telepon</h3>
                  <p className="text-gray-400">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">info@edutech.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-lg overflow-hidden h-[300px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968524045!3d40.757977142857454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767190"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Restoran"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
                  placeholder="Nama anda"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
                  placeholder="Email anda"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
                  placeholder="Tulis pesan anda"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="btn w-full">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;