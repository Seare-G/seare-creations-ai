import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="glass p-3 rounded-full hover:card-glow transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center space-y-2"
          >
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Seare Gebretsadkan. All rights reserved.
            </p>
            <p className="text-foreground/50 text-sm flex items-center justify-center gap-2">
              Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> using Next.js & Three.js
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
