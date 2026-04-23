import { motion } from "motion/react";

export default function Privacy() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 bg-surface min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl text-primary uppercase tracking-widest leading-tight">Privacy Policy</h1>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-medium">Effective date: April 2026</p>
        </div>

        <div className="font-body text-on-surface-variant font-light text-base md:text-lg leading-relaxed space-y-10">
          <p>EasyBook (“we”, “our”, “us”) provides premium travel concierge services. We are committed to protecting your privacy and handling your data with discretion.</p>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">1. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>Contact details (name, email, phone)</li>
              <li>Booking preferences and requests</li>
              <li>Technical data (IP address, device, browser)</li>
              <li>Usage and analytics data</li>
            </ul>
            <p>Payment details are processed securely by third-party providers and are not stored by us.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">2. How We Use Information</h2>
            <p>We use your data to:</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>Deliver concierge and booking services</li>
              <li>Communicate with you</li>
              <li>Improve our platform and user experience</li>
              <li>Measure performance of marketing campaigns (including Google Analytics and Google Ads)</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">3. Cookies</h2>
            <p>We use cookies and tracking technologies to:</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>Analyze traffic</li>
              <li>Optimize performance</li>
              <li>Track advertising effectiveness</li>
            </ul>
            <p>You can manage cookies in your browser settings.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">4. Third-Party Services</h2>
            <p>We may use trusted third parties, including Google Analytics, Google Ads, and payment/booking partners. These providers may process data under their own policies.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">5. Data Sharing</h2>
            <p>We do not sell your personal data. We may share limited information with service providers required to fulfill your request or authorities when legally required.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">6. Data Security</h2>
            <p>We apply reasonable security measures to protect your data. However, no system is completely secure.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">7. Your Rights</h2>
            <p>You may request access to your data, correction or deletion, or withdrawal of consent (where applicable).</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">8. International Use</h2>
            <p>Our services are available globally. Your data may be processed in different jurisdictions.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">9. Updates</h2>
            <p>We may update this policy from time to time.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">10. Contact</h2>
            <p>Email: <a href="mailto:ezbook420@gmail.com" className="text-primary hover:underline">ezbook420@gmail.com</a></p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
