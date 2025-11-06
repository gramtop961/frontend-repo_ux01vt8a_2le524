import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ theme }) {
  return (
    <section id="home" className="relative pt-20 sm:pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={
                'text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight'
              }
              style={{ color: theme === 'dark' ? '#d4af37' : '#0f172a' }}
            >
              Your solution to all the AML and Compliance needs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300"
            >
              Secure, modern and fast. Experience a refined, minimalist interface
              with delightful motion and clarity.
            </motion.p>
          </div>
          <div className="relative h-[340px] sm:h-[420px] lg:h-[520px] w-full rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
