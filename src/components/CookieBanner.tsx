import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[200] max-w-4xl mx-auto"
        >
          <div className="bg-[#1A1A1A] border border-primary/20 backdrop-blur-xl p-6 md:p-8 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
            {/* Elegant Background Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors duration-500"></div>
            
            <div className="flex-1 space-y-2">
              <h4 className="font-headline text-lg text-primary uppercase tracking-widest font-bold">{t('cookies.title')}</h4>
              <p className="font-body text-sm text-[#E5E2E1]/70 leading-relaxed max-w-2xl font-light">
                {t('cookies.desc')}{" "}
                <Link to="/cookies" className="text-primary hover:underline underline-offset-4 decoration-primary/30 transition-all font-medium">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <button
                onClick={acceptCookies}
                className="gold-gradient text-on-primary px-8 py-3 rounded-sm font-label text-[10px] uppercase tracking-[0.2em] font-bold active:scale-95 transition-all shadow-xl w-full md:w-auto"
              >
                {t('cookies.btn')}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="p-3 text-[#E5E2E1]/40 hover:text-primary transition-colors duration-300"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
