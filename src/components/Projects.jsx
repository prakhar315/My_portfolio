import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain } from 'react-icons/fa';
import { SiPython, SiMongodb } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "🔄 File Flow",
      description: "Automated file management app with GUI, offering classification, compression, and cleanup features to boost organization and reduce system clutter.",
      longDescription: "Built a comprehensive file management application with an intuitive GUI that automatically classifies files, compresses them for storage optimization, and provides cleanup features to maintain system organization and reduce clutter.",
      technologies: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'GUI Framework', icon: FaCode, color: 'text-blue-400' },
        { name: 'File System', icon: FaCode, color: 'text-green-400' }
      ],
      github: "https://github.com/prakhar315/FileFlow",
      category: "System Tools",
      status: "Completed",
      icon: FaCode,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "🧠 Code Analyzer",
      description: "Python tool with GUI for generating ASTs and flowcharts, enabling better code visualization, debugging, and logic representation using PLY.",
      longDescription: "Developed a Python-based code analysis tool featuring a graphical user interface that generates Abstract Syntax Trees (ASTs) and flowcharts. Utilizes PLY (Python Lex-Yacc) for parsing and provides enhanced code visualization capabilities for debugging and logic representation.",
      technologies: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'PLY', icon: FaCode, color: 'text-orange-400' },
        { name: 'GUI', icon: FaCode, color: 'text-blue-400' }
      ],
      github: "https://github.com/prakhar315/Code_analyzer",
      demo: "https://unique-marshmallow-73ffbe.netlify.app/frontend/index.html",
      category: "Development Tools",
      status: "Completed",
      icon: FaBrain,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "🚀 CodersCrux Platform",
      description: "Full-stack platform for coding clubs, migrated from NoSQL to SQL, improved performance, and supported event management for 200+ users.",
      longDescription: "Created a comprehensive full-stack platform designed for coding clubs and communities. Successfully migrated the database architecture from NoSQL to SQL, resulting in significant performance improvements. The platform supports event management and scales to handle 200+ active users.",
      technologies: [
        { name: 'Full-Stack', icon: FaCode, color: 'text-green-400' },
        { name: 'SQL Database', icon: SiMongodb, color: 'text-blue-400' },
        { name: 'Event Management', icon: FaRocket, color: 'text-orange-400' }
      ],
      github: "https://github.com/prakhar315/Crx-Db",
      demo: "",
      category: "Web Platform",
      status: "Completed",
      icon: FaRocket,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "🎲 Monte Carlo Suite",
      description: "Simulation suite using Monte Carlo and Ising Model, visualizing statistical behavior and convergence through dynamic plots with Matplotlib and Seaborn.",
      longDescription: "Developed a comprehensive simulation suite implementing Monte Carlo methods and the Ising Model for statistical physics simulations. Features dynamic visualization of statistical behavior and convergence patterns using Matplotlib and Seaborn for data visualization and analysis.",
      technologies: [
        { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
        { name: 'Matplotlib', icon: FaCode, color: 'text-blue-400' },
        { name: 'Statistical Analysis', icon: FaCode, color: 'text-purple-400' }
      ],
      github: "https://github.com/prakhar315/Monte_Carlo",
      demo: "",
      category: "Scientific Computing",
      status: "Completed",
      icon: FaCode,
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-quantum/50 transition-all duration-300 group"
      >
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-quantum transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center space-x-2 mt-1">
                <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                  {project.category}
                </span>
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === 'Completed' 
                    ? 'bg-green-900 text-green-300' 
                    : 'bg-yellow-900 text-yellow-300'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={techIndex}
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-1 px-3 py-1 bg-gray-700 rounded-full text-sm"
              >
                <TechIcon className={`w-4 h-4 ${tech.color}`} />
                <span className="text-gray-300">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
          >
            <FaGithub className="w-4 h-4" />
            <span>Code</span>
          </motion.a>

          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-quantum hover:bg-physics text-white rounded-lg transition-colors duration-200"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Demo</span>
            </motion.a>
          )}
        </div>

        {/* Hover Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-quantum/10 to-physics/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        />
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-quantum via-physics to-math bg-clip-text text-transparent">
              Projects[]
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects where I've <span className="text-quantum">implemented</span> algorithms, 
            <span className="text-physics"> solved</span> complex problems, and 
            <span className="text-math"> computed</span> innovative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/prakhar315"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold rounded-lg transition-all duration-300 border border-gray-600 hover:border-quantum/50"
          >
            <FaGithub className="w-6 h-6" />
            <span>View All Projects on GitHub</span>
            <FaExternalLinkAlt className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
