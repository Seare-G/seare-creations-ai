import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    feedback: 'Outstanding work! Delivered a flawless web application that exceeded our expectations. Great communication and technical skills.',
    initials: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupXYZ',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    feedback: 'Exceptional developer with deep expertise in React and Node.js. Built our MVP from scratch and helped scale it successfully.',
    initials: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Designer at CreativeHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    feedback: 'A rare blend of design sensibility and technical prowess. Transformed our designs into pixel-perfect, performant code.',
    initials: 'ER'
  },
  {
    name: 'David Park',
    role: 'CEO at InnovateLabs',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    feedback: 'Reliable, professional, and incredibly talented. Helped us launch on time and continues to provide excellent support.',
    initials: 'DP'
  },
  {
    name: 'Lisa Anderson',
    role: 'Marketing Director at GrowthCo',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
    feedback: 'Creative problem solver who brought our vision to life. The final product was beautiful, fast, and user-friendly.',
    initials: 'LA'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take my word for it — hear what clients have to say about working together
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                rotateY: 2,
                z: 50
              }}
              className="glass p-6 rounded-xl border border-primary/20 perspective-card transform-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>

              {/* Feedback Text */}
              <p className="text-foreground/90 mb-6 leading-relaxed">
                "{testimonial.feedback}"
              </p>

              {/* Profile Section */}
              <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
                <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
