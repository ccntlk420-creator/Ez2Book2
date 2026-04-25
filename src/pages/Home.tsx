import { motion } from "motion/react";
import { 
  Key, 
  ShieldCheck, 
  Lock, 
  ChevronDown 
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <main className="pt-32 md:pt-20">
      {/* New Hero Variant: Split Layout */}
      <section className="relative min-h-[90vh] lg:h-screen flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-primary/10">
        <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 md:py-20 relative z-10 bg-surface">
          <div className="absolute top-10 left-10 hidden xl:block">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary/40 rotate-90 origin-left inline-block whitespace-nowrap">
              EST. 2017 • PRIVATE CONCIERGE
            </span>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="font-label text-primary text-[10px] uppercase tracking-[0.3em] mb-8 font-semibold">
              {t('hero.tag')}
            </div>
            <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl text-on-surface leading-[0.85] mb-12 uppercase">
              {t('hero.title')} <br />
              <span className="italic font-light text-primary">{t('hero.titleItalic')}</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-md mb-10 md:mb-16 leading-relaxed font-light">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
              <a 
                href="https://t.me/easybook_hotel"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient text-on-primary px-10 md:px-14 py-5 md:py-6 rounded-sm font-label text-[10px] md:text-[11px] uppercase tracking-[0.25em] font-bold active:scale-95 transition-all shadow-2xl text-center"
              >
                {t('hero.ctaCases')}
              </a>
              <a 
                href="https://t.me/EASYBOOK_HOTELS"
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center sm:justify-start gap-4 font-label text-[11px] uppercase tracking-[0.25em] text-on-surface hover:text-primary transition-colors py-2"
              >
                <span className="w-8 md:w-12 h-px bg-primary/30 group-hover:w-16 transition-all"></span>
                <span className="translate-y-[1px]">{t('hero.ctaTg')}</span>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              className="w-full h-full object-cover transition-all duration-1000 hover:scale-105 hover:brightness-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVylbQsyxc-2dVAyV0E7NlLdiqfX8rvRSy7R0pfpaX6f6Ai7bC0h69CMPVRe-Sfuiagj5DLZkmNW2OU05hDxXZIkxki5sNLirNoOL_bpEx1t3i3McWneruiTmXToPAte8khgR5cFkPkBuMQ-Wc8KlvQGuq5guSgktDrjtmdSO2vpTpF0rO6CYHi5ljSMaV0_u6QEwG9zj6t53EWMhKq7rALFJx_NedMzhj6mXF_a_fUfWXJBN-6nwbnX87UnZYNYhJ_VVDVs0FTruy=s0"
              alt="Luxury travel"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface lg:bg-gradient-to-l lg:from-surface lg:to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* New Features Variant: Bordered Grid */}
      <section className="py-0 border-b border-primary/10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {[
            { icon: Key, key: 'access' },
            { icon: ShieldCheck, key: 'api' },
            { icon: Lock, key: 'private' }
          ].map((feature, i) => (
            <div key={i} className="p-16 border-r border-primary/10 last:border-r-0 hover:bg-primary/[0.02] transition-colors group">
              <feature.icon className="text-primary w-10 h-10 mb-10 stroke-[1px] group-hover:scale-110 transition-transform" />
              <h3 className="font-headline text-2xl text-on-surface uppercase tracking-widest mb-6">{t(`features.${feature.key}.title`)}</h3>
              <p className="font-body text-on-surface-variant leading-relaxed font-light text-sm">
                {t(`features.${feature.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* New Economy Block: Centered Editorial */}
      <section className="py-20 md:py-40 px-6 md:px-12 bg-surface-container-lowest">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 border border-primary/20 rounded-full mb-10">
            <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary">{t('editorial.tag')}</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl text-on-surface mb-12 leading-tight uppercase tracking-widest">
            {t('editorial.title1')} <span className="italic font-light text-primary">{t('editorial.title1Italic')}</span>, <br />
            {t('editorial.title2')} <span className="italic font-light text-primary">{t('editorial.title2Italic')}</span>
          </h2>
          <p className="font-body text-xl text-on-surface-variant mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            {t('editorial.desc')}
          </p>
          <a 
            href="https://t.me/EASYBOOK_HOTELS"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-on-primary px-16 py-6 rounded-sm font-label text-xs uppercase tracking-[0.3em] font-bold active:scale-95 transition-all inline-block shadow-xl"
          >
            {t('editorial.cta')}
          </a>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20">
            <h2 className="font-headline text-4xl text-on-surface uppercase tracking-widest">{t('audience.title')}</h2>
            <div className="w-16 h-px bg-primary mt-8"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {(t('audience.items', { returnObjects: true }) as any[]).map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-surface-container-lowest p-12 border border-outline-variant/10 rounded-sm hover:border-primary/40 transition-all duration-500"
              >
                <div className="font-label text-primary text-[10px] uppercase tracking-[0.25em] mb-6 font-semibold">{item.label}</div>
                <h4 className="font-headline text-xl text-on-surface mb-8 uppercase tracking-widest">{item.title}</h4>
                <p className="font-body text-on-surface-variant font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Cases Variant: Vertical List with Large Images */}
      <section id="cases" className="py-12 md:py-40 px-6 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-24 space-y-8">
            <h2 className="font-headline text-5xl md:text-7xl text-on-surface uppercase tracking-widest leading-none">
              {t('cases.title')} <span className="text-primary italic font-light">{t('cases.titleItalic')}</span>
            </h2>
            <p className="font-body text-on-surface-variant max-w-md font-light">
              {t('cases.subtitle')}
            </p>
          </div>
          
          <div className="space-y-32">
            {[
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm1zs63w0gEkSq0P0N37sNImg8kZWRJBSapBYQtAAko3kry3AVzw7cjHKvQwUDSG1y0zZUwcehIGTKi9ITHz7kIjNpQYKTi8QAeIxX0MbfhDsOQTcKZ2Hfk7bmXimU479DBmwM6jUwUgsqp2OKTHRzfcVU1xYl8zyUFkLCzpC4g9yCRZnG0c_YEGeY93C1sjSqR2KRerS6-9plapcy3OouBeSbldhAEZJfpuHQZFzdL68PrMQa4xN_jgtDyyUR6IsUCbIMAMQtHfnv=s0",
                old: "€3,420",
                new: "€1,890",
                disc: "-45%",
              },
              {
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDB2wIUfUAQf2AeHVrjDdhOr4BXy_5HVWy2d-5DFyU0PGtYTiM40iW2CxdC0lIWGI8crMqzLJs4PuAHJ7ix-RPjWXu4FGB6fL-Ts7qH4ggHkAaPS5GUzOMtqVjaWEX8OlxGmHgaeHFR8FHJa164dQRpH6ojmR2v1tLudEc_UQ045mfWHBUtnpIbFSGWyKHbkatMZ1ph3SpgkiTLueLF3gEkEEhigm-W7cVg33NLgBM4JAuPV0AE-VZ1gahyNEKjzV0EiBPoE6ay3ElV=s0",
                old: "€4,100",
                new: "€2,460",
                disc: "-40%",
              }
            ].map((item, i) => {
              const caseData = (t(`cases.items`, { returnObjects: true }) as any[])[i];
              return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -10 }}
                    viewport={{ once: true }}
                    className="flex flex-col lg:flex-row gap-20 items-center p-8 md:p-12 bg-surface-container-lowest border border-outline-variant/5 hover:border-primary/30 rounded-sm transition-all duration-500"
                  >
                    <div className="lg:w-3/5 aspect-[16/9] overflow-hidden rounded-sm group">
                      <img 
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-110" 
                        src={item.img}
                        alt={caseData.name}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="lg:w-2/5">
                      <h4 className="font-headline text-4xl text-on-surface mb-6 uppercase tracking-widest">{caseData.name}</h4>
                      <p className="font-label text-on-surface-variant text-xs uppercase tracking-widest mb-8">{caseData.loc}</p>
                      <p className="font-body text-on-surface-variant mb-12 font-light leading-relaxed">{caseData.desc}</p>
                      <div className="flex flex-col items-start gap-4">
                        <div className="bg-primary/10 text-primary px-4 py-1 rounded-full font-label text-[10px] uppercase tracking-widest font-bold">
                          {item.disc} {t('cases.savings')}
                        </div>
                        <div className="flex items-baseline gap-6">
                          <span className="text-on-surface-variant line-through text-lg font-label">{item.old}</span>
                          <span className="text-primary text-5xl font-headline font-bold">{item.new}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-16 md:py-32 px-4 md:px-12 bg-surface">
        <div className="max-w-[1440px] mx-auto grid grid-cols-4 md:flex md:flex-wrap justify-between gap-1 md:gap-12 text-center md:text-left">
          {/* Updated Metrics with floating effect */}
          {[
            { val: "2017", key: "years" },
            { val: "526+", key: "objects" },
            { val: "1,375", key: "clients" },
            { val: "€342k", key: "saved" }
          ].map((metric, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="flex flex-col items-center md:items-start p-4 hover:bg-primary/[0.02] rounded-sm transition-colors"
            >
              <div className="text-2xl md:text-6xl font-headline text-primary mb-1 md:mb-4 font-bold tracking-tight md:tracking-widest">{metric.val}</div>
              <div className="font-label text-[7px] md:text-[10px] text-on-surface-variant uppercase tracking-tighter md:tracking-[0.2em] font-medium leading-tight md:leading-normal">
                {t(`metrics.${metric.key}`)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New CTA Variant: Minimalist Dark */}
      <section className="py-20 md:py-60 px-6 md:px-12 bg-surface-container-lowest border-y border-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-headline text-6xl md:text-8xl text-on-surface mb-12 uppercase tracking-tighter leading-none">
            {t('cta.title')} <br /> <span className="text-primary italic font-light">{t('cta.titleItalic')}</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-12 items-center">
            <a 
              href="https://t.me/EASYBOOK_HOTELS"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-on-primary px-20 py-7 rounded-sm font-label text-xs uppercase tracking-[0.4em] font-bold active:scale-95 transition-all shadow-2xl"
            >
              {t('cta.request')}
            </a>
            <a 
              href="https://t.me/easybook_hotel"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase tracking-[0.4em] text-on-surface-variant hover:text-primary transition-colors"
            >
              {t('cta.cases')}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl text-on-surface mb-16 text-center uppercase tracking-widest">{t('faq.title')}</h2>
          <div className="space-y-6">
            {(t('faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
              <div 
                key={i} 
                className="bg-surface border border-outline-variant/5 rounded-sm overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-10 flex justify-between items-center text-left"
                >
                  <h4 className="font-headline text-xl text-primary uppercase tracking-wider">{faq.q}</h4>
                  <ChevronDown className={`text-primary transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === i ? "auto" : 0, opacity: activeFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-10 pb-10 font-body text-on-surface-variant font-light leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
