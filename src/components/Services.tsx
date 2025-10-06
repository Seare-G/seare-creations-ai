import { motion } from 'framer-motion';
import { Code2, Plug, Bot, Database, Gauge, Palette } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Development',
    description: 'Building complete web applications from frontend to backend with modern technologies',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description: 'Seamlessly connecting third-party services and creating robust RESTful APIs',
  },
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Implementing intelligent features using OpenAI and Gemini for smart automation',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Architecting scalable database schemas for MySQL, MongoDB, and Supabase',
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Enhancing application speed, SEO, and overall user experience',
  },
  {
    icon: Palette,
    title: 'Responsive UI/UX',
    description: 'Creating beautiful, accessible interfaces that work perfectly on all devices',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Services</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-6 rounded-xl card-glow hover:card-glow-hover transition-all duration-300 group"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
