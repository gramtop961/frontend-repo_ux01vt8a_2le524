import { motion } from 'framer-motion';
import { ShieldCheck, FileText, UserCheck, Search, Scan, Newspaper } from 'lucide-react';

const services = [
  { title: 'GoAML Registration', icon: ShieldCheck, desc: 'End-to-end registration and onboarding.' },
  { title: 'AML Policy Framework', icon: FileText, desc: 'Comprehensive policy design and rollout.' },
  { title: 'KYC and Risk Assessment', icon: UserCheck, desc: 'Customer due diligence and risk scoring.' },
  { title: 'AML Inspection', icon: Search, desc: 'Independent inspection and remediation.' },
  { title: 'Screening', icon: Scan, desc: 'Sanctions, PEP and watchlist screening.' },
  { title: 'Negative Media Search', icon: Newspaper, desc: 'Adverse media monitoring and reports.' },
];

export default function Services({ theme }) {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: theme === 'dark' ? '#d4af37' : '#111827' }}>
            Services
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Explore our core offerings, designed for speed, accuracy and compliance.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <motion.a
              key={srv.title}
              href={`#service-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative rounded-2xl border border-black/5 dark:border-white/10 p-6 bg-white/70 dark:bg-white/[0.03] backdrop-blur hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className={
                  'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black shadow-md'
                }>
                  <srv.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{srv.title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{srv.desc}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-yellow-500/40" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
