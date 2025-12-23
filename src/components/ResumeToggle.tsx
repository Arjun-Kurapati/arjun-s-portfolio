import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const ResumeToggle = () => {
  const handleDownload = () => {
    window.open("/FelipeFleming_CV.pdf", "_blank");
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="fixed bottom-6 right-20 z-50 p-3 rounded-full glass-card border border-primary/20 hover:border-primary/40 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.7 }}
      aria-label="View Resume"
    >
      <FileText className="w-5 h-5 text-primary" />
    </motion.button>
  );
};

export default ResumeToggle;
