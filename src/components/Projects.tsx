import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import aiTaskManager from '@/assets/projects/ai-task-manager.jpg';
import financeAnalyzer from '@/assets/projects/finance-analyzer.jpg';
import amazonClone from '@/assets/projects/amazon-clone.jpg';
import netflixClone from '@/assets/projects/netflix-clone.jpg';
import portfolio from '@/assets/projects/portfolio.jpg';

const projects = [
  {
    title: 'AI Task Manager (SaaS)',
    type: 'Unique AI-powered platform',
    stack: ['Next.js', 'Gemini/OpenAI', 'Supabase'],
    description: 'Manages tasks, analyzes productivity, gives AI insights',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    image: aiTaskManager,
  },
  {
    title: 'Finance Analyzer (AI SaaS)',
    type: 'AI-based personal finance tracker',
    stack: ['Next.js', 'Express', 'MongoDB'],
    description: 'Tracks expenses, predicts savings, gives recommendations',
    gradient: 'from-purple-500/20 to-pink-500/20',
    image: financeAnalyzer,
  },
  {
    title: 'Amazon Clone (with Gemini AI)',
    type: 'Full-stack eCommerce',
    stack: ['Next.js', 'MySQL', 'Express'],
    description: 'Adds AI-based purchase analysis',
    gradient: 'from-orange-500/20 to-red-500/20',
    image: amazonClone,
  },
  {
    title: 'Netflix Clone',
    type: 'UI/UX + Authentication',
    stack: ['Next.js', 'MongoDB'],
    description: 'Showcases authentication, movies API, and clean design',
    gradient: 'from-red-500/20 to-pink-500/20',
    image: netflixClone,
  },
  {
    title: 'Portfolio Website',
    type: 'Personal brand',
    stack: ['Next.js', 'Tailwind', 'Three.js'],
    description: 'Professional showcase with 3D animations',
    gradient: 'from-emerald-500/20 to-cyan-500/20',
    image: portfolio,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Featured Projects</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Showcasing strong, real-world examples of production-ready applications
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl glass card-glow hover:card-glow-hover transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-300`} />
              </div>
              
              <div className="relative p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">{project.type}</p>
                </div>

                <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted/50 rounded-full text-foreground border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 glass hover:glass-hover transition-all"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary/20 hover:bg-primary/30 text-primary transition-all"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
