import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith("ru") ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  const isRu = i18n.language.startsWith("ru");

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 group cursor-pointer"
      aria-label="Toggle language"
    >
      <span className={`font-label text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${isRu ? "text-primary font-bold" : "text-[#E5E2E1]/40 group-hover:text-[#E5E2E1]/60"}`}>
        RU
      </span>
      <div className="w-px h-3 bg-primary/20"></div>
      <span className={`font-label text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${!isRu ? "text-primary font-bold" : "text-[#E5E2E1]/40 group-hover:text-[#E5E2E1]/60"}`}>
        EN
      </span>
      
      {/* Animated underline */}
      <motion.div 
        className="absolute -bottom-1 h-px bg-primary"
        initial={false}
        animate={{ 
          left: isRu ? 0 : "55%", 
          width: isRu ? "40%" : "45%" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </button>
  );
}
