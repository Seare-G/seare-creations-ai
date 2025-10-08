import { motion } from 'framer-motion';
import { Brain, Code2, Lightbulb, Rocket } from 'lucide-react';
import profileImage from '@/assets/profile.jpg';

const sections = [
  {
    icon: Brain,
    title: 'Journey',
    content:
      'I began my development journey through the Evangadi Bootcamp, where I was awarded a scholarship for full-stack web development. Although I didn\'t attend live sessions, I gained full access to the program materials and taught myself by applying every concept independently. This experience strengthened my ability to research, debug, and complete projects entirely on my own — a core strength for remote developer roles.',
  },
  {
    icon: Code2,
    title: 'My Philosophy & Skills',
    content:
      'I\'m a self-taught Full Stack Developer focused on creating high-performing, end-to-end applications. I don\'t just write code — I architect solutions that are performant, maintainable, and delightful to use. My work emphasizes clean code, scalability, and user experience, transforming ideas into reliable, production-ready products.',
  },
  {
    icon: Lightbulb,
    title: 'AI & Problem Solving',
    content:
      'I enjoy integrating AI efficiently to make applications smarter, more optimized, and capable of automating complex tasks. I\'ve leveraged AI Gemini to analyze documents, generate content, and build intelligent tools, applying it in real-world projects like my AI-Powered SaaS Platform and social + chat web app. I thrive on solving complex problems with elegant solutions, whether it\'s optimizing workflows, designing architecture, or debugging tricky issues.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning & Curiosity',
    content:
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

        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Profile Photo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto flex justify-center md:justify-start flex-shrink-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <img
                src={profileImage}
                alt="Seare Gebretsadkan - Full Stack Developer"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-primary/50 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Content Sections - Right */}
          <div className="flex-1 space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3">
                  <section.icon className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{section.title}</h3>
                </div>
                <p className="text-foreground/80 text-base md:text-lg leading-relaxed pl-9">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
