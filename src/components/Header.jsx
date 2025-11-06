import { useEffect } from 'react';
import { Sun, Moon, LogIn, LogOut } from 'lucide-react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header({ isAuthenticated, onLogin, onLogout, theme, setTheme }) {
  // Persist theme and apply at root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.setProperty('--bg-base', '#000000');
      root.style.setProperty('--text-primary', '#d4af37'); // golden
    } else {
      root.classList.remove('dark');
      root.style.setProperty('--bg-base', '#ffffff');
      root.style.setProperty('--text-primary', '#111111');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navItems = [
    { name: 'Service', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Referral', href: '#referral' },
    { name: 'About us', href: '#about' },
    { name: 'Contact us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bg-white/80 dark:bg-black/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-600 shadow glow" />
            <span className={classNames(
              'text-lg sm:text-xl font-extrabold tracking-tight',
              theme === 'dark' ? 'text-yellow-400' : 'text-red-600'
            )}>Better Call AML</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {isAuthenticated && navItems.map((item) => (
              <a key={item.name} href={item.href} className={classNames(
                'text-sm font-medium transition-colors hover:opacity-80',
                theme === 'dark' ? 'text-yellow-300' : 'text-gray-900'
              )}>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={classNames(
                'inline-flex items-center justify-center rounded-md p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
                theme === 'dark'
                  ? 'bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/30 focus:ring-yellow-400'
                  : 'bg-red-600/10 text-red-700 hover:bg-red-600/20 focus:ring-red-500'
              )}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {!isAuthenticated ? (
              <button
                onClick={onLogin}
                className={classNames(
                  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold shadow-sm transition-colors',
                  theme === 'dark'
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'bg-red-600 text-white hover:bg-red-700'
                )}
              >
                <LogIn className="h-4 w-4" />
                Sign in with Google
              </button>
            ) : (
              <button
                onClick={onLogout}
                className={classNames(
                  'inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold shadow-sm transition-colors',
                  theme === 'dark'
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'bg-gray-900 text-white hover:bg-black'
                )}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
