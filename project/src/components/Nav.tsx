import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavProps {
  onDownload: () => void;
}

export default function Nav({ onDownload }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="/"
            className="text-xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Mist
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <NavLinks onScroll={scrollToSection} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDownload}
              className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
            >
              Download
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-b border-white/10"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <NavLinks onScroll={scrollToSection} />
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false);
                  onDownload();
                }}
                className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
              >
                Download
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

interface NavLinksProps {
  onScroll: (id: string) => void;
}

function NavLinks({ onScroll }: NavLinksProps) {
  return (
    <>
      {[
        { name: 'Features', id: 'features' },
        { name: 'AI', id: 'ai' },
        { name: 'Cloud', id: 'cloud' },
        { name: 'About', id: 'about' }
      ].map((item) => (
        <motion.button
          key={item.name}
          onClick={() => onScroll(item.id)}
          className="text-gray-300 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          {item.name}
        </motion.button>
      ))}
    </>
  );
}