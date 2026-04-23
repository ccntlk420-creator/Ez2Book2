import { motion } from "motion/react";

export default function Terms() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 bg-surface min-h-[70vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <div className="space-y-4 text-center">
          <h1 className="font-headline text-5xl md:text-6xl text-primary uppercase tracking-widest leading-tight">Terms of Service</h1>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-medium">Effective date: April 2026</p>
        </div>

        <div className="font-body text-on-surface-variant font-light text-base md:text-lg leading-relaxed space-y-10">
          <p>By accessing EasyBook, you agree to these Terms.</p>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">1. Nature of Service</h2>
            <p>EasyBook provides premium travel concierge services and acts as an intermediary between clients and third-party providers.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">2. Use of Service</h2>
            <p>You agree to:</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>Provide accurate information</li>
              <li>Use the service lawfully</li>
              <li>Not misuse or interfere with the platform</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">3. Bookings and Availability</h2>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>All services are subject to availability</li>
              <li>Final terms are determined by third-party providers</li>
              <li>We do not guarantee availability or pricing</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">4. Payments</h2>
            <p>Payments may be handled via third-party providers. We are not responsible for external payment processing issues.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">5. Cancellations</h2>
            <p>Cancellation and refund policies depend on the service provider.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">6. Liability</h2>
            <p>To the fullest extent permitted by law, EasyBook is not liable for:</p>
            <ul className="list-disc pl-5 space-y-4 marker:text-primary">
              <li>Third-party service performance</li>
              <li>Travel disruptions or delays</li>
              <li>Indirect or consequential damages</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">7. Intellectual Property</h2>
            <p>All content and branding belong to EasyBook and may not be used without permission.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">8. Termination</h2>
            <p>We reserve the right to suspend or terminate access in case of misuse.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">9. Changes</h2>
            <p>We may update these Terms at any time.</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">10. Governing Law</h2>
            <p>These Terms are governed by the laws of [YOUR COUNTRY].</p>
          </section>

          <section className="space-y-6">
            <h2 className="font-headline text-2xl text-on-surface uppercase tracking-wider underline underline-offset-8 decoration-primary/30">11. Contact</h2>
            <p>Email: <a href="mailto:ezbook420@gmail.com" className="text-primary hover:underline">ezbook420@gmail.com</a></p>
          </section>
        </div>
      </motion.div>
    </main>
  );
}
