import { motion } from 'framer-motion';
import { FaCode, FaCalculator, FaAtom, FaRocket } from 'react-icons/fa';

const About = () => {
  const interests = [
    {
      icon: FaCode,
      title: 'Computer Science',
      description: 'Passionate about algorithms, data structures, and building scalable systems',
      color: 'quantum',
      details: ['Algorithm Design', 'System Architecture', 'Web Development', 'Machine Learning']
    },
    {
      icon: FaCalculator,
      title: 'Mathematics',
      description: 'Love exploring mathematical concepts and their real-world applications',
      color: 'math',
      details: ['Calculus', 'Linear Algebra', 'Discrete Mathematics', 'Statistics']
    },
    {
      icon: FaAtom,
      title: 'Physics',
      description: 'Fascinated by the fundamental laws that govern our universe',
      color: 'physics',
      details: ['Quantum Mechanics', 'Thermodynamics', 'Electromagnetism', 'Relativity']
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Always seeking to push boundaries and create something new',
      color: 'code',
      details: ['Research', 'Problem Solving', 'Creative Thinking', 'Experimentation']
    }
  ];

  const stats = [
    { label: 'Lines of Code', value: '5,000+', suffix: '' },
    { label: 'Coffee Consumed', value: '∞', suffix: 'cups' },
    { label: 'Problems Solved', value: '200+', suffix: '' },
    { label: 'Learning Hours', value: '2,000+', suffix: 'hrs' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-quantum via-physics to-math bg-clip-text text-transparent">
              Me.json
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A fourth-year Computer Science student who <span className="text-quantum">codes</span> with passion, 
            <span className="text-physics"> thinks</span> with logic, and 
            <span className="text-math"> solves</span> with creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My fascination with technology began when I first encountered the elegant beauty of 
                  <span className="text-quantum"> mathematical equations</span> and their power to 
                  <span className="text-physics"> model reality</span>. This curiosity led me to 
                  <span className="text-math"> explore</span> computer science, where I discovered 
                  the perfect intersection of logic, creativity, and problem-solving.
                </p>
                <p>
                  As a fourth-year CSE student, I've <span className="text-quantum">developed</span> 
                  a deep appreciation for both theoretical foundations and practical applications. 
                  Whether I'm <span className="text-physics">implementing</span> complex algorithms 
                  or <span className="text-math">deriving</span> mathematical proofs, I approach 
                  every challenge with curiosity and determination.
                </p>
                <p>
                  Beyond coding, I find inspiration in the fundamental laws of physics and the 
                  elegant patterns of mathematics. This interdisciplinary perspective helps me 
                  <span className="text-code"> architect</span> solutions that are not just 
                  functional, but also elegant and efficient.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-quantum mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">
                      {stat.label}
                    </div>
                    {stat.suffix && (
                      <div className="text-gray-500 text-xs">
                        {stat.suffix}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="bg-gradient-to-r from-quantum/10 to-physics/10 rounded-xl p-6 border border-quantum/20">
              <h4 className="text-lg font-bold text-white mb-3">Currently Exploring</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-quantum rounded-full mr-3"></span>
                  Encryption Algorithms
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-physics rounded-full mr-3"></span>
                  Mathmatical Models
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-math rounded-full mr-3"></span>
                  
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-code rounded-full mr-3"></span>
                  Physics Simulation
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-quantum/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r from-${interest.color} to-${interest.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">{interest.title}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {interest.description}
                </p>
                
                <div className="space-y-1">
                  {interest.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                      <span className={`w-1 h-1 bg-${interest.color} rounded-full mr-2`}></span>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "In the intersection of <span className="text-quantum">mathematics</span>, 
              <span className="text-physics"> physics</span>, and 
              <span className="text-math"> computer science</span>, 
              lies the power to understand and shape our world. Every line of code is an equation, 
              every algorithm a law of nature, and every solution a step towards a better future."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
