import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/project1.jpg'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    category: 'UI/UX',
    image: '/project2.jpg'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Branding',
    image: '/project3.jpg'
  },
  {
    id: 4,
    title: 'Dashboard UI',
    category: 'Product Design',
    image: '/project4.jpg'
  }
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link href={`/work/${project.id}`} key={project.id}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  {/* Placeholder for project image */}
                  <span className="text-white/50">Project Image</span>
                </div>
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-white/80">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
