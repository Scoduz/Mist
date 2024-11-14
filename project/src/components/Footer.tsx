import { motion } from 'framer-motion';
import { Github, Twitter } from 'lucide-react';

interface FooterProps {
  founderInfo: {
    name: string;
    age: number;
    date: string;
    social: string;
  };
}

export default function Footer({ founderInfo }: FooterProps) {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-gradient">Mist</h3>
            <p className="text-gray-400">
              Created by {founderInfo.name}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Download</motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Features</motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Security</motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>About</motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Blog</motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>Careers</motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href={`https://twitter.com/${founderInfo.social.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Mist Browser. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}