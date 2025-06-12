import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const gradientMap = {
  default: 'from-purple-600 via-pink-600 to-blue-600',
  batman: 'from-gray-900 via-yellow-500 to-black',
  console: 'from-green-500 via-black to-green-900',
  matrix: 'from-black via-green-600 to-black'
};

const textGradientMap = {
  default: 'from-white to-white/70',
  batman: 'from-yellow-400 to-yellow-600',
  console: 'from-green-400 to-green-600',
  matrix: 'from-green-400 to-green-600'
};

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradientMap[theme]} animate-gradient-shift`}
      />

      {/* 3D floating elements */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white/10 backdrop-blur-md shadow-lg"
      />
      
      <div className="relative h-full flex items-center justify-center text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70"
          >
            Digital Alchemist
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-white/80 max-w-2xl mx-auto mb-12"
          >
            Transforming ideas into <span className="text-white font-medium">immersive experiences</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              View Work
            </button>
            <button className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 transition-all">
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="h-8 w-8 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>

  );
}
