import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Zap, Award, UserPlus, Briefcase, Star, Info, Bell } from 'lucide-react';

const MOCK_NOTIFICATIONS = [
  { id: '1', type: 'STREAK_RISK', title: 'Streak at risk!', message: 'You need to complete a module today to keep your 7-day streak alive.', time: '2 hours ago', read: false },
  { id: '2', type: 'LEVEL_UP', title: 'Level Up! ⚡', message: 'Congratulations! You reached ML Practitioner level.', time: '1 day ago', read: false },
  { id: '3', type: 'NEW_JOB', title: 'New Job Match', message: 'A new GenAI Engineer role at OpenAI matches 85% of your skills.', time: '2 days ago', read: true },
  { id: '4', type: 'CERT_READY', title: 'Certificate Earned', message: 'Your Generative AI Engineering certificate is ready to download.', time: '3 days ago', read: true },
  { id: '5', type: 'WELCOME', title: 'Welcome to NexRole AI', message: 'Your personalized AI learning journey has been generated.', time: '1 week ago', read: true },
];

export const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS);

  const getIconConfig = (type: string) => {
    switch(type) {
      case 'STREAK_RISK': return { icon: Flame, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' };
      case 'LEVEL_UP': return { icon: Zap, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' };
      case 'CERT_READY': return { icon: Award, color: 'text-yellow-600 dark:text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' };
      case 'WELCOME': return { icon: UserPlus, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/30' };
      case 'NEW_JOB': return { icon: Briefcase, color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' };
      case 'ACHIEVEMENT': return { icon: Star, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' };
      default: return { icon: Info, color: 'text-slate-500', bg: 'bg-slate-100 dark:bg-slate-800' };
    }
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'unread') return !n.read;
    if (activeTab === 'achievements') return ['LEVEL_UP', 'CERT_READY', 'ACHIEVEMENT'].includes(n.type);
    if (activeTab === 'system') return ['STREAK_RISK', 'WELCOME'].includes(n.type);
    return true;
  });

  const hasUnread = notifications.some(n => !n.read);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-slate-900 dark:text-slate-50 leading-tight tracking-tight font-display">
            Notifications
          </h1>
        </div>
        {hasUnread && (
          <button 
            onClick={handleMarkAllAsRead}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 overflow-x-auto hide-scrollbar">
        {[
          { id: 'all', label: 'All' },
          { id: 'unread', label: 'Unread' },
          { id: 'achievements', label: 'Achievements' },
          { id: 'system', label: 'System' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden min-h-[400px]">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[400px] text-center p-8">
            <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Bell className="w-10 h-10 text-slate-300 dark:text-slate-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-1">You're all caught up!</h3>
            <p className="text-slate-500 text-sm">We'll notify you when there's something new.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            <AnimatePresence>
              {filteredNotifications.map(notification => {
                const config = getIconConfig(notification.type);
                const Icon = config.icon;

                return (
                  <motion.div 
                    key={notification.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => !notification.read && handleMarkAsRead(notification.id)}
                    className={`flex items-start gap-4 p-4 min-h-[72px] transition-colors cursor-pointer group ${
                      !notification.read 
                        ? 'bg-blue-50/50 dark:bg-blue-500/5 border-l-4 border-l-blue-500 pl-3' 
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/30 border-l-4 border-l-transparent pl-3'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${config.bg}`}>
                      <Icon className={`w-5 h-5 ${config.color}`} />
                    </div>
                    
                    <div className="flex-1 min-w-0 pr-4">
                      <div className={`text-[14px] font-medium mb-0.5 truncate ${!notification.read ? 'text-slate-900 dark:text-slate-50' : 'text-slate-700 dark:text-slate-300'}`}>
                        {notification.title}
                      </div>
                      <div className="text-[13px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-snug">
                        {notification.message}
                      </div>
                    </div>

                    <div className="shrink-0 flex flex-col items-end gap-2 mt-1">
                      <span className="text-[12px] text-slate-400 whitespace-nowrap">{notification.time}</span>
                      <span className="text-[12px] font-medium text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
