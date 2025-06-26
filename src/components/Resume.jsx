import { motion } from 'framer-motion';
import { FaDownload, FaGraduationCap } from 'react-icons/fa';

const Resume = () => {
  const timeline = [
    {
      year: '2022-2026',
      title: 'B.Tech – Computer Science & Engineering',
      organization: 'Graphic Era Hill University, Bhimtal, Uttarakhand',
      description: 'Pursuing Bachelor of Technology in Computer Science & Engineering with focus on algorithms, data structures, and software development.',
      type: 'education',
      icon: FaGraduationCap,
      achievements: [
        'Specializing in Data Structures & Algorithms',
        'Active in coding competitions and projects',
        'Building expertise in full-stack development'
      ]
    },
    {
      year: '2021',
      title: 'Senior Secondary (CBSE)',
      organization: 'Sant Atulanand Convent School, Varanasi',
      description: 'Completed Senior Secondary education with focus on Science stream, building foundation for engineering studies.',
      type: 'education',
      icon: FaGraduationCap,
      achievements: [
        'Science stream with Mathematics',
        'Strong foundation in Physics and Chemistry',
        'Prepared for engineering entrance exams'
      ]
    },
    {
      year: '2017',
      title: 'Matriculation (ICSE)',
      organization: 'HCJ Academy, Ayodhya',
      description: 'Completed secondary education with excellent academic performance and developed interest in technology.',
      type: 'education',
      icon: FaGraduationCap,
      achievements: [
        'Strong academic foundation',
        'Developed interest in programming',
        'Participated in science exhibitions'
      ]
    }
  ];

  const TimelineItem = ({ item, index, isLast }) => {
    const Icon = item.icon;
    const isLeft = index % 2 === 0;

    return (
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}
      >
        {/* Content */}
        <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-quantum/50 transition-all duration-300"
          >
            <div className="flex items-center space-x-2 mb-3">
              <span className={`px-3 py-1 text-xs rounded-full ${
                item.type === 'education' ? 'bg-blue-900 text-blue-300' :
                item.type === 'experience' ? 'bg-green-900 text-green-300' :
                'bg-purple-900 text-purple-300'
              }`}>
                {item.type.toUpperCase()}
              </span>
              <span className="text-quantum font-mono text-sm">{item.year}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-physics font-semibold mb-3">{item.organization}</p>
            <p className="text-gray-300 mb-4">{item.description}</p>
            
            <ul className="space-y-1">
              {item.achievements.map((achievement, i) => (
                <li key={i} className="text-sm text-gray-400 flex items-center">
                  <span className="w-1 h-1 bg-quantum rounded-full mr-2"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline Node */}
        <div className="w-2/12 flex justify-center">
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 bg-gradient-to-r from-quantum to-physics rounded-full flex items-center justify-center border-4 border-gray-900 z-10 relative"
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            
            {/* Timeline Line */}
            {!isLast && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-quantum to-physics"></div>
            )}
          </div>
        </div>

        {/* Empty space for alternating layout */}
        <div className="w-5/12"></div>
      </motion.div>
    );
  };

  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-quantum via-physics to-math bg-clip-text text-transparent">
              Resume.pdf
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A chronological <span className="text-quantum">compilation</span> of my academic journey, 
            professional <span className="text-physics">experiences</span>, and 
            <span className="text-math">achievements</span> in the field of computer science.
          </p>
          
          <motion.a
            href="https://drive.google.com/file/d/1YVPvVKbbMmMMAGCToqANK_H44aedf1ek/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-quantum to-physics text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <FaDownload className="w-5 h-5" />
            <span>Download.resume()</span>
          </motion.a>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-quantum mb-2">10+</div>
                <div className="text-gray-300">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-physics mb-2">4+</div>
                <div className="text-gray-300">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-math mb-2">2+</div>
                <div className="text-gray-300">Years of Learning</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
