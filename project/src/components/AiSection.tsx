import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Sparkles, Brain, Bot } from 'lucide-react';

export default function AiSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="ai" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.15),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 bg-purple-500/10 rounded-2xl mb-4"
            >
              <Brain className="w-8 h-8 text-purple-400" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6">AI-Powered Intelligence</h2>
            <p className="text-gray-400 text-lg">Experience the future of browsing with our advanced AI features</p>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl -z-10"
            />
            
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-4 p-3 bg-black/50 rounded-xl border border-purple-500/20 mb-8">
                <Search className="w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Try 'Summarize this page...'"
                  className="bg-transparent border-none outline-none flex-1 text-white placeholder-gray-500"
                />
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>

              <div className="space-y-4">
                {[
                  { icon: Bot, text: "Smart content summarization" },
                  { icon: Brain, text: "Intelligent tab management" },
                  { icon: Sparkles, text: "AI-powered search suggestions" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <item.icon className="w-5 h-5 text-purple-400" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}