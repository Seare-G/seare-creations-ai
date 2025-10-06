import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  Brain,
  MessageSquare,
} from 'lucide-react';

const techStack = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'TailwindCSS'],
  Backend: ['Node.js', 'Express.js'],
  Databases: ['MySQL', 'MongoDB', 'Supabase'],
  Tools: ['Git', 'VS Code', 'Postman', 'Vercel'],
  AI: ['OpenAI', 'Gemini', 'Cursor', 'Lovable'],
};

const softSkills = [
  { icon: Zap, label: 'Fast Learner' },
  { icon: Clock, label: 'On-time & Reliable' },
  { icon: Brain, label: 'Problem Solver' },
  { icon: MessageSquare, label: 'Communicative' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Skills & Expertise</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div className="grid gap-8">
            {Object.entries(techStack).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-xl card-glow hover:card-glow-hover transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="px-4 py-2 bg-muted/50 rounded-lg text-foreground font-medium border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-xl card-glow hover:card-glow-hover transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-secondary">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/30 transition-all duration-300"
                >
                  <skill.icon className="h-10 w-10 text-accent" />
                  <span className="text-foreground font-medium text-center">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
