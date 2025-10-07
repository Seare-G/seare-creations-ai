import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">Get In Touch</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            I'm open to job opportunities and collaborations. Let's create something amazing together!
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 glass p-4 rounded-lg hover:card-glow transition-all"
                >
                  <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:seare@example.com"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      seare@example.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 glass p-4 rounded-lg hover:card-glow transition-all"
                >
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+251912345678"
                      className="text-foreground/70 hover:text-primary transition-colors"
                    >
                      +251 91 234 5678
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 glass p-4 rounded-lg hover:card-glow transition-all"
                >
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-foreground/70">Addis Ababa, Ethiopia</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl card-glow space-y-6">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Send a Message</h3>

              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-muted/30 border-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-muted/30 border-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-muted/30 border-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full glass hover:glass-hover card-glow hover:card-glow-hover transition-all text-lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
