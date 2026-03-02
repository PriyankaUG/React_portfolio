import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 px-4 sm:px-6 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-slate-300 mb-2">
          Copyright {new Date().getFullYear()} Priyanka Gaikwad. All rights reserved.
        </p>
        <p className="text-slate-400 text-sm">
          Built with React and Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
