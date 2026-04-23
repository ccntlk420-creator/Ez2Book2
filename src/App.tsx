/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Cookies from "./pages/Cookies.tsx";
import CookieBanner from "./components/CookieBanner.tsx";
import LanguageSwitcher from "./components/LanguageSwitcher.tsx";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { t } = useTranslation();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-surface selection:bg-primary selection:text-on-primary">
        {/* Top Navigation Bar */}
        <nav className="fixed top-0 w-full z-[100] bg-[#131313] backdrop-blur-md border-b border-primary/10 flex justify-between items-center px-6 md:px-12 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-5 md:py-5 transition-all duration-300 before:content-[''] before:absolute before:-top-[500px] before:left-0 before:right-0 before:h-[500px] before:bg-[#131313]">
          <Link to="/" className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">
            Easy Book
          </Link>
          <div className="hidden md:flex items-center space-x-10 font-label font-medium text-[10px] tracking-[0.2em] uppercase">
            <Link to="/" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t('nav.about')}</Link>
            <a href="/#cases" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t('nav.cases')}</a>
            <a href="/#faq" className="text-[#E5E2E1] hover:text-[#FFDEA5] transition-colors duration-300">{t('nav.faq')}</a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
            <a 
              href="https://www.instagram.com/easy.book_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E5E2E1]/70 hover:text-[#FFDEA5] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
            <a 
              href="https://t.me/EASYBOOK_HOTELS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="gold-gradient text-on-primary px-7 py-2.5 rounded-sm font-label text-[10px] uppercase tracking-[0.15em] font-bold active:scale-95 duration-200 inline-block text-center"
            >
              {t('nav.book')}
            </a>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>

        <CookieBanner />

        {/* Footer */}
        <footer className="w-full py-16 px-6 md:px-12 border-t border-primary/5 bg-[#131313]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 max-w-[1920px] mx-auto">
            <Link to="/" className="text-xl font-headline font-bold text-primary tracking-[0.1em] uppercase">Easy Book</Link>
            <div className="flex gap-10 font-label text-[10px] uppercase tracking-[0.1em]">
              <Link to="/privacy" className="text-[#E5E2E1]/40 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#E5E2E1]/40 hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-[#E5E2E1]/40 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
            <div className="font-label text-[10px] uppercase tracking-[0.1em] text-[#E5E2E1]/40">
              {t('footer.rights')}
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
