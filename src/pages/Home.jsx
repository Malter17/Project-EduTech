import { Link } from 'react-router-dom';

function Home() {
  const featuredCourses = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      description: "Pelajari pengembangan web dari dasar hingga mahir dengan HTML, CSS, dan JavaScript",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      description: "Kuasai dasar-dasar ilmu data, statistik, dan machine learning",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
    },
    {
      id: 3,
      name: "Digital Marketing Master",
      description: "Pelajari strategi pemasaran digital yang efektif untuk bisnis modern",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000" 
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to EduTech
              <span className="text-primary block mt-2">Learn Anytime, Anywhere</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300">
              Transformasi Pendidikan Digital
            </p>
            <Link to="/courses" className="btn text-lg">
              MULAI BELAJAR
            </Link>
          </div>
        </div>
      </section>

      {/* About Platform Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">Platform Pembelajaran <span className="text-primary">Modern</span></h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            EduTech adalah platform pembelajaran online yang dirancang untuk memenuhi kebutuhan pendidikan di era digital. 
            Kami menyediakan akses ke berbagai kursus berkualitas tinggi yang diajarkan oleh para ahli industri. 
            Dengan fokus pada pembelajaran praktis dan relevan dengan industri, EduTech membantu peserta didik mengembangkan 
            keterampilan yang dibutuhkan untuk sukses di dunia kerja modern.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Platform kami menggunakan teknologi pembelajaran adaptif yang menyesuaikan dengan gaya dan kecepatan belajar 
            setiap individu. Dengan kombinasi video pembelajaran, proyek praktis, dan bimbingan langsung dari instruktur, 
            kami menciptakan pengalaman belajar yang komprehensif dan efektif. Bergabunglah dengan ribuan peserta didik 
            yang telah mentransformasi karir mereka melalui EduTech.
          </p>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Kursus <span className="text-primary">Unggulan</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <div key={course.id} className="bg-black rounded-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <Link to="/courses" className="text-primary hover:text-primary/80 transition-colors">
                    Lihat Detail →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;