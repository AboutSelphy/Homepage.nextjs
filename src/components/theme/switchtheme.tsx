'use client';

import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from '@/app/themeprovider';

export default function Switchtheme() {
  const { theme, toggleTheme } = useTheme();

  if (!theme) return null; // Don't render until mounted

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="flex items-center justify-center p-2 rounded-sm shadow-md transition-colors duration-200 border-border border-solid border-1"
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Moon />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Sun />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
