import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X, Info, Flame, Zap, Award } from 'lucide-react';
// import { io } from 'socket.io-client';
import { toast } from 'sonner';

// Mock types
interface NotificationPreview {
  id: string;
  title: string;
  time: string;
  type: string;
  read: boolean;
}

const MOCK_NOTIFS: NotificationPreview[] = [
  { id: '1', title: 'Streak at risk!', time: '2h', type: 'STREAK_RISK', read: false },
  { id: '2', title: 'Level Up! ⚡', time: '1d', type: 'LEVEL_UP', read: false },
  { id: '3', title: 'New Job Match', time: '2d', type: 'NEW_JOB', read: true }
];

export const NotificationBell: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationPreview[]>(MOCK_NOTIFS);
  const [unreadCount, setUnreadCount] = useState(2);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulated Socket.io connection
    /*
    const socket = io('http://localhost:5000', {
      withCredentials: true
    });

    socket.on('notification', (newNotif) => {
      setNotifications(prev => [newNotif, ...prev].slice(0, 5));
      setUnreadCount(prev => prev + 1);
      
      toast(newNotif.title, {
        description: newNotif.message,
        icon: <Bell className="w-4 h-4 text-blue-500" />
      });
    });

    return () => {
      socket.disconnect();
    };
    */
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleMarkAllRead = (e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  const getIcon = (type: string) => {
    switch(type) {
      case 'STREAK_RISK': return <Flame className="w-4 h-4 text-amber-500" />;
      case 'LEVEL_UP': return <Zap className="w-4 h-4 text-blue-500" />;
      case 'CERT_READY': return <Award className="w-4 h-4 text-yellow-500" />;
      default: return <Info className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Bell Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative text-slate-600 dark:text-slate-300"
      >
        <Bell className="w-5 h-5" />
        <AnimatePresence>
          {unreadCount > 0 && (
            <motion.div
              key="badge"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900"
            >
              <span className="text-[9px] font-bold text-white leading-none">
                {unreadCount > 9 ? '9+' : unreadCount}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full right-0 mt-2 w-[280px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg z-50 overflow-hidden origin-top-right flex flex-col max-h-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
              <span className="font-bold text-sm text-slate-900 dark:text-slate-50">Notifications</span>
              {unreadCount > 0 && (
                <button 
                  onClick={handleMarkAllRead}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Mark all read
                </button>
              )}
            </div>

            {/* List */}
            <div className="overflow-y-auto flex-1 overscroll-contain">
              {notifications.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-500">No notifications yet.</div>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {notifications.map(n => (
                    <div 
                      key={n.id} 
                      className={`flex items-start gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors ${!n.read ? 'bg-blue-50/30 dark:bg-blue-500/5' : ''}`}
                    >
                      <div className="mt-1 shrink-0 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-full">
                        {getIcon(n.type)}
                      </div>
                      <div className="flex-1 min-w-0 pr-2">
                        <div className={`text-sm truncate ${!n.read ? 'font-bold text-slate-900 dark:text-slate-50' : 'font-medium text-slate-700 dark:text-slate-300'}`}>
                          {n.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{n.time}</div>
                      </div>
                      {!n.read && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900">
              <a href="/notifications" className="block text-center text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 py-1.5 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                View all notifications →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
