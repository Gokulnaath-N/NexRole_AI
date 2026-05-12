import React from 'react';
import { Zap, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LandingFooter = () => {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1 */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30">
                <Zap className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                NexRole AI
              </span>
            </Link>
            <p className="text-sm text-text-secondary mb-8 max-w-xs leading-relaxed">
              Company-specific, role-targeted AI learning paths built for the job market of 2025–2035.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:bg-brand-100 hover:text-brand-600 dark:hover:bg-brand-900/40 dark:hover:text-brand-400 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">Product</h4>
            <ul className="space-y-4">
              {['Domains', 'Career Hub', 'Interview Prep', 'Leaderboard'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-text-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              {['About', 'Blog', 'Careers', 'Press'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-text-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-bold text-text-primary mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-text-secondary hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            © 2025 NexRole AI · Made for the AI-first generation 🇮🇳
          </p>
          <p className="text-sm text-text-secondary font-medium">
            Built by Gokulnaath N
          </p>
        </div>
      </div>
    </footer>
  );
};
