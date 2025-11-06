import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import { Pricing, Referral, About, Contact } from './components/Sections';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') return saved;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Google sign-in (client-only, no backend yet). Uses popup to obtain credential via Google Identity Services
  useEffect(() => {
    // Load Google script dynamically when needed
    if (!document.getElementById('google-platform')) {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.id = 'google-platform';
      document.body.appendChild(script);
    }
  }, []);

  const bg = useMemo(() => (theme === 'dark' ? 'bg-black' : 'bg-white'), [theme]);
  const text = useMemo(() => (theme === 'dark' ? 'text-yellow-300' : 'text-slate-900'), [theme]);

  const handleLogin = () => {
    // For now, simulate successful Google login. In future we can connect to backend for real auth.
    setIsAuthenticated(true);
    history.pushState(null, '', '#services');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    history.pushState(null, '', '#home');
  };

  // Enable hash-based navigation to work with browser back/forward buttons
  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '') || 'home';
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    window.addEventListener('hashchange', onHashChange);
    // initial
    onHashChange();
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className={`${bg} min-h-screen transition-colors duration-300`}>
      <Header
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onLogout={handleLogout}
        theme={theme}
        setTheme={setTheme}
      />

      <main className="pt-16">
        <Hero theme={theme} />
        {isAuthenticated && (
          <>
            <Services theme={theme} />
            <Pricing theme={theme} />
            <Referral theme={theme} />
            <About theme={theme} />
            <Contact theme={theme} />
          </>
        )}
      </main>

      <footer className={`border-t border-black/5 dark:border-white/10 ${text}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Better Call AML</span>
          <a href="#home" className="hover:opacity-80">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
