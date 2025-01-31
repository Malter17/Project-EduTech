function About() {
  return (
    <div className="bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000" 
            alt="About Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4 animate-fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Tentang EduTech</h1>
            <p className="text-xl text-gray-300">Membangun Masa Depan Melalui Pendidikan Digital</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Sejarah Kami</h2>
            <p className="text-gray-300 leading-relaxed">
              EduTech didirikan pada tahun 2020 dengan visi untuk merevolusi dunia pendidikan melalui teknologi. 
              Berawal dari sebuah startup kecil yang fokus pada kursus pemrograman, kini EduTech telah berkembang 
              menjadi platform pembelajaran komprehensif yang melayani berbagai bidang keilmuan.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Perjalanan kami dimulai ketika tim pendiri kami menyadari adanya kesenjangan antara pendidikan 
              tradisional dan kebutuhan industri modern. Dengan semangat inovasi dan komitmen untuk memberikan 
              pendidikan berkualitas yang dapat diakses oleh semua orang, kami membangun platform yang 
              menggabungkan teknologi pembelajaran terkini dengan kurikulum yang relevan dengan industri.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Visi Kami</h2>
            <p className="text-gray-300 leading-relaxed">
              Menjadi platform pendidikan digital terdepan yang memberdayakan individu untuk mencapai potensi 
              maksimal mereka melalui pembelajaran yang berkualitas, fleksibel, dan terjangkau. Kami berkomitmen 
              untuk menciptakan ekosistem pembelajaran yang inklusif dan inovatif, di mana setiap orang memiliki 
              kesempatan untuk mengembangkan keterampilan yang relevan dengan tuntutan dunia modern.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold">Misi Kami</h2>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">Kami berkomitmen untuk:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Menyediakan konten pembelajaran berkualitas tinggi yang dirancang oleh ahli industri</li>
                <li>Mengembangkan teknologi pembelajaran adaptif yang menyesuaikan dengan kebutuhan setiap peserta</li>
                <li>Membangun komunitas pembelajaran yang mendukung dan kolaboratif</li>
                <li>Menjaga kualitas dan relevansi materi pembelajaran dengan perkembangan industri</li>
                <li>Membuat pendidikan berkualitas dapat diakses oleh semua kalangan</li>
              </ul>
            </div>
            <p className="text-gray-300 leading-relaxed mt-6">
              Di EduTech, kami percaya bahwa pendidikan adalah kunci untuk membuka potensi setiap individu. 
              Melalui platform kami, kami tidak hanya menyediakan kursus online, tetapi juga membangun ekosistem 
              pembelajaran yang mendukung pertumbuhan profesional dan personal setiap peserta didik.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;