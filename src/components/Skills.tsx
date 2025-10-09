import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  Brain,
  MessageSquare,
  Sparkles,
  Gem,
  MousePointer2,
  Heart,
} from 'lucide-react';

// Import official technology icons
import htmlIcon from '@/assets/icons/html5.svg';
import cssIcon from '@/assets/icons/css3.svg';
import jsIcon from '@/assets/icons/javascript.svg';
import tsIcon from '@/assets/icons/typescript.svg';
import reactIcon from '@/assets/icons/react.svg';
import nextIcon from '@/assets/icons/nextjs.svg';
import tailwindIcon from '@/assets/icons/tailwindcss.svg';
import nodeIcon from '@/assets/icons/nodejs.svg';
import expressIcon from '@/assets/icons/express.svg';
import mysqlIcon from '@/assets/icons/mysql.svg';
import mongoIcon from '@/assets/icons/mongodb.svg';
import supabaseIcon from '@/assets/icons/supabase.svg';
import gitIcon from '@/assets/icons/git.svg';
import vscodeIcon from '@/assets/icons/vscode.svg';
import postmanIcon from '@/assets/icons/postman.svg';
import vercelIcon from '@/assets/icons/vercel.svg';

const techStack = {
  Frontend: [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'JavaScript', icon: jsIcon },
    { name: 'TypeScript', icon: tsIcon },
    { name: 'React', icon: reactIcon },
    { name: 'Next.js', icon: nextIcon },
    { name: 'TailwindCSS', icon: tailwindIcon },
  ],
  Backend: [
    { name: 'Node.js', icon: nodeIcon },
    { name: 'Express.js', icon: expressIcon },
  ],
  Databases: [
    { name: 'MySQL', icon: mysqlIcon },
    { name: 'MongoDB', icon: mongoIcon },
    { name: 'Supabase', icon: supabaseIcon },
  ],
  Tools: [
    { name: 'Git', icon: gitIcon },
    { name: 'VS Code', icon: vscodeIcon },
    { name: 'Postman', icon: postmanIcon },
    { name: 'Vercel', icon: vercelIcon },
  ],
  AI: [
    { name: 'OpenAI', icon: Sparkles },
    { name: 'Gemini', icon: Gem },
    { name: 'Cursor', icon: MousePointer2 },
    { name: 'Lovable', icon: Heart },
  ],
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
                  {skills.map((skill, index) => {
                    const isLucideIcon = typeof skill.icon !== 'string';
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex items-center gap-2 px-4 py-2 bg-muted/50 rounded-lg text-foreground font-medium border border-primary/20 hover:border-primary/50 transition-all duration-300 cursor-default"
                      >
                        {isLucideIcon ? (
                          <skill.icon className="h-5 w-5 text-primary" />
                        ) : (
                          <img src={skill.icon} alt={`${skill.name} technology logo`} width="20" height="20" loading="lazy" className="h-5 w-5" />
                        )}
                        <span>{skill.name}</span>
                      </motion.div>
                    );
                  })}
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
