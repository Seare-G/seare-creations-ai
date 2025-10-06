import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-glow-lg">
              Hi, I'm <span className="text-primary animate-glow-pulse">Seare Gebretsadkan</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
              A Self-Taught <span className="text-accent">Full Stack Developer</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-foreground/80"
          >
            I build modern web apps powered by <span className="text-primary font-semibold">AI</span> and{' '}
            <span className="text-primary font-semibold">data</span>. Skilled in Next.js, React, Node.js, Express,
            MySQL, MongoDB, Supabase, and TypeScript. Passionate about creating intelligent SaaS platforms that solve
            real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="glass hover:glass-hover card-glow hover:card-glow-hover transition-all duration-300 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass hover:glass-hover transition-all duration-300 text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass hover:glass-hover transition-all duration-300 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-12"
          >
            <ArrowDown className="h-8 w-8 mx-auto text-primary animate-float" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
