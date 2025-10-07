import { motion } from 'framer-motion';
import { Brain, Code2, Lightbulb, Rocket } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const philosophyCards = [
  {
    icon: Brain,
    title: 'My Journey',
    description:
      'I began my development journey through the Evangadi Bootcamp, where I was awarded a scholarship for full-stack web development. Although I didn\'t attend live sessions, I gained full access to the program materials and taught myself by applying every concept independently.',
  },
  {
    icon: Code2,
    title: 'My Philosophy & Skills',
    description:
      'I\'m a self-taught Full Stack Developer focused on creating high-performing, end-to-end applications. I don\'t just write code — I architect solutions that are performant, maintainable, and delightful to use.',
  },
  {
    icon: Lightbulb,
    title: 'AI & Problem Solving',
    description:
      'I enjoy integrating AI efficiently to make applications smarter, more optimized, and capable of automating complex tasks. I thrive on solving complex problems with elegant solutions.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description:
      'When I\'m not coding, you\'ll find me exploring new technologies, learning continuously, and pushing my creativity beyond the screen.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <img
                src={profileImage}
                alt="Seare Gebretsadkan"
                className="relative w-80 h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-primary">Building the Future, One Line at a Time</h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              This experience strengthened my ability to research, debug, and complete projects entirely on my own — a
              core strength for remote developer roles. My work emphasizes clean code, scalability, and user experience,
              transforming ideas into reliable, production-ready products.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className="glass p-6 rounded-xl card-glow hover:card-glow-hover transition-all duration-300 perspective-card"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotateZ: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <card.icon className="h-12 w-12 text-primary mb-4" />
              </motion.div>
              <h4 className="text-xl font-bold mb-3 text-foreground">{card.title}</h4>
              <p className="text-foreground/70 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
