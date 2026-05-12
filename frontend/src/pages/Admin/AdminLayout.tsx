import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BarChart3,
  Globe,
  BookOpen,
  BrainCircuit,
  Briefcase,
  Users,
  ShieldAlert,
  Settings,
  Activity,
  ArrowLeft,
  LogOut,
  User as UserIcon,
  Menu,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuthStore } from '../../store';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const AdminLayout = () => {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);

  const navGroups = [
    {
      title: 'OVERVIEW',
      items: [
        { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { label: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
      ]
    },
    {
      title: 'CONTENT',
      items: [
        { label: 'Domains', href: '/admin/domains', icon: Globe },
        { label: 'Modules', href: '/admin/modules', icon: BookOpen },
        { label: 'Quiz Bank', href: '/admin/quiz', icon: BrainCircuit },
        { label: 'Jobs', href: '/admin/jobs', icon: Briefcase },
      ]
    },
    {
      title: 'USERS',
      items: [
        { label: 'All Users', href: '/admin/users', icon: Users },
        { label: 'Banned Users', href: '/admin/users?filter=banned', icon: ShieldAlert },
      ]
    },
    {
      title: 'SYSTEM',
      items: [
        { label: 'Settings', href: '/admin/settings', icon: Settings },
        { label: 'Health Check', href: '/admin/health', icon: Activity },
      ]
    }
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-[#0F172A] text-white overflow-y-auto">
      {/* Brand */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-black text-white italic">N</div>
        <div className="flex flex-col">
          <span className="font-display font-black tracking-tight leading-none">NexRole AI</span>
          <Badge className="w-fit h-4 px-1 text-[8px] bg-red-500/20 text-red-400 border-red-500/30 mt-1">ADMINISTRATOR</Badge>
        </div>
      </div>

      <Separator className="bg-slate-800" />

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-8 mt-4">
        {navGroups.map((group, idx) => (
          <div key={idx} className="space-y-2">
            <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] px-4">{group.title}</h4>
            <div className="space-y-1">
              {group.items.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/admin'}
                  onClick={() => setIsMobileOpen(false)}
                  className={({ isActive }) => `
                    flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-bold transition-all
                    ${isActive 
                      ? 'bg-brand-500/10 text-brand-400 border-l-2 border-brand-500 rounded-l-none' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'}
                  `}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-4 mt-auto">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/dashboard')}
          className="w-full justify-start text-slate-400 hover:text-white hover:bg-white/5 font-bold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to App
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-bg-primary overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 h-full shrink-0">
        <SidebarContent />
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-border-subtle bg-bg-primary flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden" 
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <h2 className="font-bold text-text-primary">Admin Overview</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-sm font-bold text-text-primary">{user?.name}</span>
              <span className="text-[10px] font-medium text-text-tertiary">Super Admin</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
              {user?.photoURL ? <img src={user.photoURL} alt="" /> : <UserIcon className="w-4 h-4 text-text-tertiary" />}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 custom-scrollbar">
          <Outlet />
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-64 z-50 lg:hidden"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-4 right-[-50px] text-white"
              >
                <X className="w-6 h-6" />
              </Button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
