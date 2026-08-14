import { ReactNode } from 'react';
import { motion } from 'framer-motion';

export interface PageContainerProps {
  className?: string;
  children: ReactNode;
}

export function PageContainer({ className = '', children }: PageContainerProps) {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.main>
  );
}
