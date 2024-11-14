import { motion, AnimatePresence } from 'framer-motion';
import { X, Monitor, Smartphone, Laptop } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const handleDownload = (platform: string) => {
    const downloads = {
      Desktop: 'https://github.com/yourusername/mist/releases/latest/download/Mist-Desktop.exe',
      Mobile: 'https://play.google.com/store/apps/details?id=com.mist.browser',
      Laptop: 'https://github.com/yourusername/mist/releases/latest/download/Mist-Laptop.dmg'
    };
    
    window.open(downloads[platform as keyof typeof downloads], '_blank');
    setTimeout(onClose, 500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-2xl p-8 max-w-lg w-full"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-white mb-6"
            >
              Download Mist Browser
            </motion.h2>
            
            <div className="space-y-4">
              {[
                { icon: Monitor, label: 'Desktop', version: 'v1.0.0' },
                { icon: Laptop, label: 'Laptop', version: 'v1.0.0' },
                { icon: Smartphone, label: 'Mobile', version: 'v1.0.0' }
              ].map((platform, index) => (
                <motion.button
                  key={platform.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(platform.label)}
                  className="w-full p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-center gap-4 group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  <platform.icon className="w-6 h-6 text-purple-400 relative z-10" />
                  <div className="flex-1 text-left relative z-10">
                    <div className="font-semibold text-white">{platform.label}</div>
                    <div className="text-sm text-gray-400">{platform.version}</div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="text-purple-400 relative z-10"
                  >
                    Download →
                  </motion.div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}