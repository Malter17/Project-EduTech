import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Courses() {
  const courses = [
    {
      id: 1,
      name: "Web Development Bootcamp",
      description: "Pelajari pengembangan web dari dasar hingga mahir",
      price: "Rp 2.999.000",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"
    },
    {
      id: 2,
      name: "Data Science Fundamentals",
      description: "Kuasai dasar-dasar ilmu data dan machine learning",
      price: "Rp 3.499.000",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500"
    },
    {
      id: 3,
      name: "Digital Marketing Master",
      description: "Strategi pemasaran digital untuk bisnis modern",
      price: "Rp 2.499.000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
    },
    {
      id: 4,
      name: "UI/UX Design Professional",
      description: "Desain antarmuka pengguna yang menarik dan efektif",
      price: "Rp 2.799.000",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500"
    },
    {
      id: 5,
      name: "Mobile App Development",
      description: "Buat aplikasi mobile dengan React Native",
      price: "Rp 3.299.000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500"
    },
    {
      id: 6,
      name: "Business Analytics",
      description: "Analisis data bisnis untuk pengambilan keputusan",
      price: "Rp 2.699.000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="course-catalog bg-black text-white pt-20"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="course-container container mx-auto px-4 py-16">
        <motion.h1 
          className="course-title text-4xl md:text-5xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          Katalog <span className="text-primary">Kursus</span>
        </motion.h1>
        
        <motion.div 
          className="course-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {courses.map(course => (
            <motion.div 
              key={course.id} 
              variants={itemVariants}
              className="course-card-wrapper flex flex-col h-full"
            >
              <Link 
                to={`/courses/${course.id}`}
                className="course-card bg-secondary rounded-lg overflow-hidden group block flex-1 flex flex-col"
              >
                <div className="course-image-wrapper relative h-64 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="course-image w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="course-content p-6 flex-1 flex flex-col">
                  <span className="course-price text-primary font-bold mb-2">{course.price}</span>
                  <h3 className="course-name text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="course-description text-gray-400 mb-4 flex-1">{course.description}</p>
                  <div className="course-enroll-btn btn w-full mt-auto">Enroll Now</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Courses;