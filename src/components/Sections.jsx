import { motion } from 'framer-motion';

export function Pricing({ theme }) {
  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: theme === 'dark' ? '#d4af37' : '#111827' }}>Pricing</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Simple, transparent pricing for every stage.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Starter','Growth','Enterprise'].map((tier, i) => (
            <motion.div key={tier} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03] backdrop-blur">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{tier}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Best for {tier === 'Starter' ? 'solo professionals' : tier === 'Growth' ? 'scaling teams' : 'regulated enterprises'}.</p>
              <button className={
                'mt-6 w-full rounded-md px-4 py-2 font-semibold text-sm shadow-sm transition-colors bg-gradient-to-br from-yellow-400 to-amber-600 text-black hover:opacity-90'
              }>Choose</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Referral({ theme }) {
  return (
    <section id="referral" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: theme === 'dark' ? '#d4af37' : '#111827' }}>Referral</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300">Invite partners and earn credits towards services.</p>
        <div className="mt-6 rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03] backdrop-blur">
          <p className="text-sm text-slate-700 dark:text-slate-200">Generate your unique link after login and share it to start earning.</p>
        </div>
      </div>
    </section>
  );
}

export function About({ theme }) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: theme === 'dark' ? '#d4af37' : '#111827' }}>About us</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-3xl">We are a specialist compliance studio focused on AML, KYC, and risk. We combine deep regulatory expertise with product thinking to deliver outcomes fast.</p>
      </div>
    </section>
  );
}

export function Contact({ theme }) {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: theme === 'dark' ? '#d4af37' : '#111827' }}>Contact us</h2>
        <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" placeholder="Full name" />
          <input className="rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" placeholder="Email" type="email" />
          <textarea className="sm:col-span-2 rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.06] px-4 py-2 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-500/40" rows="4" placeholder="How can we help?" />
          <div className="sm:col-span-2">
            <button type="submit" className={'rounded-md px-4 py-2 font-semibold text-sm shadow-sm transition-colors bg-gradient-to-br from-yellow-400 to-amber-600 text-black hover:opacity-90'}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
}
