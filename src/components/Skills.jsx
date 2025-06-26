import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  FaReact, FaJs, FaPython, FaJava, FaGitAlt, FaDocker,
  FaNodeJs, FaDatabase, FaAws, FaLinux, FaCode, FaHtml5, FaNetworkWired
} from 'react-icons/fa';
import {
  SiTypescript, SiMongodb, SiPostgresql, SiKubernetes,
  SiTensorflow, SiPytorch, SiCplusplus, SiGo, SiTailwindcss,
  SiBootstrap, SiMysql
} from 'react-icons/si';


const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');

  const skillCategories = {
    programming: {
      title: 'Languages[]',
      color: 'quantum',
      skills: [
        { name: 'C/C++', icon: SiCplusplus, level: 85, description: 'Memory.optimize()' },
        { name: 'Python', icon: FaPython, level: 90, description: 'Algorithm.implement()' },
        { name: 'JavaScript', icon: FaJs, level: 80, description: 'Dynamic.execute()' }
      ]
    },
    frontend: {
      title: 'Frontend.stack[]',
      color: 'physics',
      skills: [
        { name: 'HTML/CSS', icon: FaHtml5, level: 90, description: 'Structure.design()' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, description: 'Style.optimize()' },
        { name: 'Bootstrap', icon: SiBootstrap, level: 80, description: 'Grid.responsive()' },
        { name: 'React.js', icon: FaReact, level: 75, description: 'Component.render()' }
      ]
    },
    backend: {
      title: 'Backend.apis[]',
      color: 'math',
      skills: [
        { name: 'Flask', icon: FaPython, level: 80, description: 'API.serve()' },
        { name: 'Django', icon: FaPython, level: 75, description: 'Framework.scale()' }
      ]
    },
    databases: {
      title: 'Database.query[]',
      color: 'code',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, level: 80, description: 'NoSQL.aggregate()' },
        { name: 'MySQL', icon: SiMysql, level: 85, description: 'Relational.join()' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 75, description: 'Advanced.query()' }
      ]
    },
    tools: {
      title: 'DevOps.tools[]',
      color: 'physics',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 90, description: 'Version.control()' },
        { name: 'Docker', icon: FaDocker, level: 75, description: 'Container.deploy()' },
        { name: 'REST APIs', icon: FaCode, level: 85, description: 'Service.connect()' },
        { name: 'Linux/Unix', icon: FaLinux, level: 80, description: 'System.admin()' }
      ]
    },
    concepts: {
      title: 'Core.concepts[]',
      color: 'math',
      skills: [
        { name: 'DSA', icon: FaCode, level: 85, description: 'Algorithm.optimize()' },
        { name: 'DBMS', icon: FaDatabase, level: 80, description: 'Data.manage()' },
        { name: 'OS Concepts', icon: FaLinux, level: 75, description: 'Memory.schedule()' },
        { name: 'Networking', icon: FaNetworkWired, level: 70, description: 'Protocol.implement()' }
      ]
    }
  };

  const SkillBar = ({ skill, index, categoryColor }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 200);

      return () => clearTimeout(timer);
    }, [skill.level, index]);

    const Icon = skill.icon;

    return (
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <Icon className={`w-6 h-6 text-${categoryColor}`} />
            <span className="text-white font-medium">{skill.name}</span>
          </div>
          <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
        </div>
        
        <div className="relative">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
            <motion.div
              className={`bg-gradient-to-r from-${categoryColor} to-${categoryColor} h-2 rounded-full relative overflow-hidden`}
              initial={{ width: 0 }}
              animate={{ width: `${animatedLevel}%` }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
              />
            </motion.div>
          </div>
          <p className="text-xs text-gray-500 font-mono group-hover:text-gray-400 transition-colors">
            {skill.description}
          </p>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
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
              Skills.json
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive <span className="text-quantum">array</span> of technologies I've 
            <span className="text-physics"> mastered</span> through continuous 
            <span className="text-math"> learning</span> and practical 
            <span className="text-code"> implementation</span>.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeCategory === key
                  ? `bg-${category.color} text-white shadow-lg`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={index}
              categoryColor={skillCategories[activeCategory].color}
            />
          ))}
        </motion.div>

        {/* Mathematical visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="text-gray-500 font-mono text-sm">
            <p>Skills.reduce((total, skill) =&gt; total + skill.level, 0) / Skills.length</p>
            <motion.p
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-2xl text-quantum font-bold mt-2"
            >
              = {Math.round(
                Object.values(skillCategories)
                  .flatMap(cat => cat.skills)
                  .reduce((sum, skill) => sum + skill.level, 0) /
                Object.values(skillCategories)
                  .flatMap(cat => cat.skills).length
              )}% Average Proficiency
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
