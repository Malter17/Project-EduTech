import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';

function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [hoveredStar, setHoveredStar] = useState(0);

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

  // Course data
  useEffect(() => {
    const courses = [
      {
        id: 1,
        name: "Web Development Bootcamp",
        description: "Pelajari pengembangan web dari dasar hingga mahir dengan HTML, CSS, JavaScript, dan React.",
        price: "Rp 2.999.000",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500",
        ingredients: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Git"],
        duration: "12 minggu",
        level: "Pemula hingga Menengah"
      },
      {
        id: 2,
        name: "Data Science Fundamentals",
        description: "Kuasai dasar-dasar ilmu data, statistik, dan machine learning untuk karir di bidang data science.",
        price: "Rp 3.499.000",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
        ingredients: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "SQL"],
        duration: "16 minggu",
        level: "Menengah"
      },
      {
        id: 3,
        name: "Digital Marketing Master",
        description: "Pelajari strategi pemasaran digital yang efektif untuk membangun presence online yang kuat.",
        price: "Rp 2.499.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        ingredients: ["SEO", "Social Media Marketing", "Content Marketing", "Email Marketing", "Google Analytics"],
        duration: "8 minggu",
        level: "Semua Level"
      },
      {
        id: 4,
        name: "UI/UX Design Professional",
        description: "Kuasai prinsip desain UI/UX dan tools industri untuk menciptakan pengalaman pengguna yang luar biasa.",
        price: "Rp 2.799.000",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500",
        ingredients: ["Figma", "Adobe XD", "Prototyping", "User Research", "Design Systems"],
        duration: "10 minggu",
        level: "Menengah"
      },
      {
        id: 5,
        name: "Mobile App Development",
        description: "Pelajari pengembangan aplikasi mobile dengan React Native untuk iOS dan Android.",
        price: "Rp 3.299.000",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
        ingredients: ["React Native", "JavaScript", "Mobile UI", "State Management", "Native APIs"],
        duration: "14 minggu",
        level: "Menengah hingga Lanjut"
      },
      {
        id: 6,
        name: "Business Analytics",
        description: "Pelajari analisis data bisnis untuk pengambilan keputusan yang lebih baik.",
        price: "Rp 2.699.000",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
        ingredients: ["Excel Advanced", "SQL", "Tableau", "Power BI", "Data Visualization"],
        duration: "10 minggu",
        level: "Pemula hingga Menengah"
      }
    ];

    const found = courses.find(item => item.id === parseInt(id));
    setCourse(found);
  }, [id]);

  const handleRatingHover = (rating) => {
    setHoveredStar(rating);
  };

  const handleRatingLeave = () => {
    setHoveredStar(0);
  };

  const handleRatingClick = (rating) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.rating === 0) {
      alert('Silakan pilih rating');
      return;
    }
    if (!newReview.comment.trim()) {
      alert('Silakan tulis ulasan');
      return;
    }

    const review = {
      id: Date.now(),
      ...newReview,
      date: new Date().toISOString(),
      userName: 'Pengguna Anonim'
    };

    setReviews(prev => [review, ...prev]);
    setNewReview({ rating: 0, comment: '' });
  };

  if (!course) {
    return (
      <div className="bg-black text-white pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <p className="text-center">Memuat...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-black text-white pt-20 min-h-screen"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16">
        {/* Course Details */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
        >
          <motion.div className="relative" variants={itemVariants}>
            <img 
              src={course.image} 
              alt={course.name}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h1 className="text-4xl font-bold mb-2">{course.name}</h1>
              <p className="text-2xl text-primary font-bold">{course.price}</p>
            </div>
            
            <p className="text-gray-400">{course.description}</p>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Yang Akan Dipelajari</h3>
              <ul className="list-disc list-inside text-gray-400">
                {course.ingredients.map((topic, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    custom={index}
                  >
                    {topic}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Durasi Kursus</h3>
                <p className="text-gray-400">{course.duration}</p>
              </div>
              <div>
                <h3 className="font-semibold">Level</h3>
                <p className="text-gray-400">{course.level}</p>
              </div>
            </div>

            <button className="btn w-full">Enroll Now</button>
          </motion.div>
        </motion.div>

        {/* Reviews Section */}
        <motion.div 
          className="bg-secondary rounded-lg p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-8">Ulasan Kursus</h2>

          {/* Add Review Form */}
          <form onSubmit={handleReviewSubmit} className="mb-12">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Rating Anda
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => handleRatingHover(star)}
                    onMouseLeave={handleRatingLeave}
                    onClick={() => handleRatingClick(star)}
                    className="text-2xl focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={star <= (hoveredStar || newReview.rating) ? faStarSolid : faStarRegular}
                      className={star <= (hoveredStar || newReview.rating) ? "text-primary" : "text-gray-400"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-2">
                Ulasan Anda
              </label>
              <textarea
                id="comment"
                rows="4"
                value={newReview.comment}
                onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
                className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-md focus:outline-none focus:border-primary text-white"
                placeholder="Tulis ulasan anda di sini..."
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Kirim Ulasan
            </button>
          </form>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-400 text-center">Belum ada ulasan. Jadilah yang pertama memberikan ulasan!</p>
            ) : (
              reviews.map(review => (
                <div key={review.id} className="border-b border-gray-700 pb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold">{review.userName}</p>
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FontAwesomeIcon
                            key={star}
                            icon={star <= review.rating ? faStarSolid : faStarRegular}
                            className={star <= review.rating ? "text-primary" : "text-gray-400"}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default CourseDetail;