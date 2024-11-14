import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cloud, Smartphone, Laptop, Monitor } from 'lucide-react';

export default function CloudSync() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const devices = [
    { icon: Smartphone, name: 'Mobile' },
    { icon: Laptop, name: 'Laptop' },
    { icon: Monitor, name: 'Desktop' }
  ];

  return (
    <section id="cloud" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 bg-purple-500/10 rounded-2xl mb-4"
          >
            <Cloud className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-6">Seamless Sync Across Devices</h2>
          <p className="text-gray-400 text-lg mb-12">Your browsing experience, synchronized perfectly everywhere</p>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl -z-10"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {devices.map((device, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 50, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                    <device.icon className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{device.name}</h3>
                    <p className="text-gray-400">Always in sync</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}