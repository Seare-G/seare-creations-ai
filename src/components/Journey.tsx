import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Laptop, Rocket } from 'lucide-react';

const timeline = [
  {
    icon: GraduationCap,
    title: 'Evangadi Bootcamp — Full Stack Web Development',
    period: 'Scholarship Recipient | 2023 – 2024',
    description:
      'Learned the fundamentals of full-stack development: HTML, CSS, JavaScript, React, Node.js, Express, MySQL. Hands-on experience with frontend-backend connections, REST APIs, and authentication. Developed habit of self-learning and problem-solving independently — foundation for future projects.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Lightbulb,
    title: 'Self-Taught Learning — Modern Web & AI Technologies',
    period: '2024 – Present',
    description:
      'Expanded skills: Next.js, TypeScript, Tailwind CSS, Supabase, MongoDB, AI integrations (Gemini/OpenAI). Focused on scalable architecture, database design, and deployment workflows. Studied performance optimization, security best practices, and clean architecture principles.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Laptop,
    title: 'Project Development & Portfolio',
    period: '2024 – Present',
    description:
      'Built production-level apps such as an AI SaaS Platform and Finance Analyzer, focusing on real-world use cases, scalable architectures and implementing secure authentication. Tackled real challenges — debugging, optimization, deployment — using research and documentation.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Rocket,
    title: 'Ongoing & Future Goals',
    period: '2025 – Ongoing / Future',
    description:
      'Continuing to deepen expertise in modern web and AI technologies. Currently enhancing AI SaaS Platform and Finance Analyzer with advanced features. Future learning: cloud architecture (AWS/GCP), DevOps basics, multi-document AI analysis. Plan to develop personal SaaS products ready for public deployment.',
    color: 'from-emerald-500 to-cyan-500',
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">My Journey</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A visual timeline of my learning and projects from bootcamp to present and beyond
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content card */}
                <div className="flex-1 w-full">
                  <div className="glass p-6 rounded-xl card-glow hover:card-glow-hover transition-all duration-300 group">
                    <div className={`inline-block p-3 rounded-lg bg-gradient-to-r ${item.color} mb-4`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium mb-4">{item.period}</p>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 ring-4 ring-background z-10" />

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
