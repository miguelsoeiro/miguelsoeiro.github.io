import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModernNavbarProps {
  className?: string;
}

const AnimatedNavLink = ({ 
  href, 
  children, 
  isActive = false 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive?: boolean;
}) => {
  return (
    <a 
      href={href} 
      className={cn(
        "relative inline-block text-sm transition-colors duration-200 group leading-none",
        isActive ? "text-devin-teal font-semibold" : "text-foreground/70"
      )}
    >
      <div className="h-5 overflow-hidden">
        <div className="flex flex-col transition-transform duration-400 ease-out group-hover:-translate-y-5 leading-none">
          <span className="leading-none whitespace-nowrap h-5">{children}</span>
          <span className="leading-none text-devin-teal font-semibold whitespace-nowrap h-5">{children}</span>
        </div>
      </div>
    </a>
  );
};

export const ModernNavbar = ({ className }: ModernNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerShapeClass, setHeaderShapeClass] = useState('rounded-full');
  const [activeSection, setActiveSection] = useState("Home");
  const shapeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll tracking
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const sections = [
          { name: "Home", id: "home" },
          { name: "Metodologia", id: "metodologia" },
          { name: "Transformação", id: "transformacao" },
          { name: "Contactos", id: "contactos" },
        ];

        // Find which section is currently in view
        for (let i = sections.length - 1; i >= 0; i--) {
          const element = document.getElementById(sections[i].id);
          if (element && element.getBoundingClientRect().top < window.innerHeight / 2) {
            setActiveSection(sections[i].name);
            break;
          }
        }
      }, 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Shape animation
  useEffect(() => {
    if (shapeTimeoutRef.current) {
      clearTimeout(shapeTimeoutRef.current);
    }

    if (isOpen) {
      setHeaderShapeClass('rounded-xl');
    } else {
      shapeTimeoutRef.current = setTimeout(() => {
        setHeaderShapeClass('rounded-full');
      }, 300);
    }

    return () => {
      if (shapeTimeoutRef.current) {
        clearTimeout(shapeTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const logoElement = (
    <div className="relative w-5 h-5 flex items-center justify-center">
      <motion.span 
        className="absolute w-1.5 h-1.5 rounded-full bg-devin-teal top-0 left-1/2 transform -translate-x-1/2 opacity-80"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.span 
        className="absolute w-1.5 h-1.5 rounded-full bg-devin-teal left-0 top-1/2 transform -translate-y-1/2 opacity-80"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      />
      <motion.span 
        className="absolute w-1.5 h-1.5 rounded-full bg-devin-teal right-0 top-1/2 transform -translate-y-1/2 opacity-80"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
      />
      <motion.span 
        className="absolute w-1.5 h-1.5 rounded-full bg-devin-teal bottom-0 left-1/2 transform -translate-x-1/2 opacity-80"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      />
    </div>
  );

  const navLinksData = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Metodologia', href: '#metodologia', id: 'metodologia' },
    { label: 'Transformação', href: '#transformacao', id: 'transformacao' },
    { label: 'Contactos', href: '#contactos', id: 'contactos' },
  ];

  const loginButtonElement = (
    <motion.button 
      className="px-4 py-2 sm:px-3 text-xs sm:text-sm border border-devin-border bg-devin-surface text-foreground rounded-full hover:border-devin-teal/50 hover:text-devin-teal transition-colors duration-200 w-full sm:w-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Login
    </motion.button>
  );

  const signupButtonElement = (
    <div className="relative group w-full sm:w-auto">
      <div className="absolute inset-0 -m-2 rounded-full hidden sm:block bg-devin-teal opacity-30 filter blur-lg pointer-events-none transition-all duration-300 ease-out group-hover:opacity-50 group-hover:blur-xl group-hover:-m-3" />
      <motion.button 
        className="relative z-10 px-4 py-2 sm:px-3 text-xs sm:text-sm font-semibold text-background bg-devin-teal rounded-full hover:bg-devin-teal/90 transition-all duration-200 w-full sm:w-auto"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </div>
  );

  return (
    <motion.header 
      className={cn(
        `fixed top-6 left-0 right-0 z-50
        flex flex-col items-center justify-center
        px-5 py-3 backdrop-blur-md
        border border-devin-border bg-devin-surface/40
        transition-[border-radius] duration-300 ease-in-out w-fit mx-auto`,
        headerShapeClass,
        className
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center gap-8 shrink-0">
        <motion.div 
          className="flex items-center shrink-0"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {logoElement}
        </motion.div>

        <nav className="hidden sm:flex items-center gap-6 whitespace-nowrap shrink-0">
          {navLinksData.map((link) => (
            <AnimatedNavLink 
              key={link.href}
              href={link.href}
              isActive={activeSection === link.label}
            >
              {link.label}
            </AnimatedNavLink>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {loginButtonElement}
          {signupButtonElement}
        </div>

        <motion.button 
          className="sm:hidden flex items-center justify-center w-8 h-8 text-foreground focus:outline-none"
          onClick={toggleMenu} 
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.svg
                key="close"
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                exit={{ rotate: 0 }}
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 90 }}
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col items-center w-full mt-4 pt-4 border-t border-devin-border/30 overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-3 w-full">
              {navLinksData.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className={cn(
                    "transition-colors text-sm",
                    activeSection === link.label 
                      ? "text-devin-teal font-semibold" 
                      : "text-foreground/70 hover:text-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col items-center gap-2 mt-4 w-full pb-2">
              {loginButtonElement}
              {signupButtonElement}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default ModernNavbar;
