import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Target, 
  Bell, 
  Lock, 
  Palette, 
  Camera, 
  Check, 
  Mail, 
  Globe, 
  ShieldAlert,
  Download,
  Trash2,
  Moon,
  Sun,
  Monitor,
  Loader2
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

import { useAuthStore } from '../../store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import api from '../../services/api.client';

const SETTINGS_TABS = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'learning', label: 'Learning Preferences', icon: Target },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'appearance', label: 'Appearance', icon: Palette },
  { id: 'security', label: 'Privacy & Security', icon: Lock },
];

export const SettingsPage = () => {
  const { user, setUser } = useAuthStore();
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('account');
  const [isSaving, setIsSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    targetRole: user?.targetRole || 'GenAI Engineer',
    targetCompany: user?.targetCompany || 'MAANG',
    experienceLevel: user?.experienceLevel || 'BEGINNER',
    weeklyHours: user?.weeklyHours || 5,
  });

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await api.put('/users/me', formData);
      setUser(res.data.data);
      toast.success('Settings saved successfully');
    } catch (err) {
      toast.error('Failed to save settings');
    } finally {
      setIsSaving(false);
    }
  };

  const renderAccount = () => (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-bg-secondary/50 rounded-3xl border border-border-subtle">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-4xl font-black overflow-hidden border-4 border-bg-primary shadow-xl">
            {user?.photoURL ? <img src={user.photoURL} alt="" /> : user?.name?.charAt(0)}
          </div>
          <button className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-full flex items-center justify-center text-white">
            <Camera className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 space-y-1 text-center md:text-left">
          <h3 className="text-xl font-display font-black text-text-primary">Profile Picture</h3>
          <p className="text-sm text-text-tertiary">PNG, JPG or GIF. Max size of 2MB.</p>
          <div className="flex gap-2 justify-center md:justify-start pt-2">
            <Button size="sm" variant="outline">Upload New</Button>
            <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-600">Remove</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Display Name</Label>
          <Input 
            id="name" 
            value={formData.name} 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            className="bg-bg-primary rounded-xl"
          />
        </div>
        <div className="space-y-2 opacity-60">
          <Label htmlFor="email">Email Address</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <Input id="email" value={user?.email} disabled className="pl-10 bg-bg-secondary cursor-not-allowed" />
          </div>
          <p className="text-[10px] text-text-tertiary font-bold uppercase">Managed by Firebase Auth</p>
        </div>
      </div>

      <div className="pt-4">
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="bg-brand-600 px-8 font-black rounded-xl h-12 shadow-xl shadow-brand-500/20"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
          Save Changes
        </Button>
      </div>
    </div>
  );

  const renderLearning = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Target Role</Label>
          <Select value={formData.targetRole} onValueChange={(val) => setFormData({...formData, targetRole: val})}>
            <SelectTrigger className="bg-bg-primary rounded-xl h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="GenAI Engineer">GenAI Engineer</SelectItem>
              <SelectItem value="MLOps Engineer">MLOps Engineer</SelectItem>
              <SelectItem value="Data Scientist">Data Scientist</SelectItem>
              <SelectItem value="AI Researcher">AI Researcher</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Experience Level</Label>
          <Select value={formData.experienceLevel} onValueChange={(val) => setFormData({...formData, experienceLevel: val})}>
            <SelectTrigger className="bg-bg-primary rounded-xl h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BEGINNER">Beginner</SelectItem>
              <SelectItem value="INTERMEDIATE">Intermediate</SelectItem>
              <SelectItem value="ADVANCED">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-6 pt-4 border-t border-border-subtle">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <Label>Weekly Commitment</Label>
            <p className="text-xs text-text-tertiary">How many hours per week can you study?</p>
          </div>
          <span className="text-lg font-black text-brand-600">{formData.weeklyHours} hours</span>
        </div>
        <Slider 
          value={[formData.weeklyHours]} 
          onValueChange={(val) => setFormData({...formData, weeklyHours: val[0]})}
          max={40} 
          step={1} 
        />
      </div>

      <div className="pt-4">
        <Button onClick={handleSave} disabled={isSaving} className="bg-brand-600 px-8 font-black rounded-xl">
          Save Preferences
        </Button>
      </div>
    </div>
  );

  const renderAppearance = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { id: 'light', label: 'Light', icon: Sun },
          { id: 'dark', label: 'Dark', icon: Moon },
          { id: 'system', label: 'System', icon: Monitor },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all ${
              theme === t.id 
                ? 'border-brand-500 bg-brand-50/50 dark:bg-brand-900/10' 
                : 'border-border-subtle hover:border-border-default bg-bg-primary'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === t.id ? 'bg-brand-500 text-white' : 'bg-bg-secondary text-text-tertiary'}`}>
              <t.icon className="w-6 h-6" />
            </div>
            <span className="font-bold text-sm text-text-primary">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderSecurity = () => (
    <div className="space-y-8">
      <Card className="p-6 border-border-subtle bg-bg-primary space-y-4">
        <div className="flex items-center gap-3 text-amber-500 mb-2">
          <Lock className="w-5 h-5" />
          <h3 className="font-bold">Password Management</h3>
        </div>
        <p className="text-sm text-text-secondary">To change your password, we'll send a secure reset link to your email address.</p>
        <Button variant="outline" className="rounded-xl">Send Reset Link</Button>
      </Card>

      <div className="pt-8 border-t border-border-subtle">
        <h3 className="text-sm font-black text-red-500 uppercase tracking-[0.2em] mb-6">Danger Zone</h3>
        <Card className="p-6 border-red-200 dark:border-red-900/30 bg-red-50/10 dark:bg-red-900/5 space-y-4">
          <div className="flex items-center gap-3 text-red-500">
            <ShieldAlert className="w-5 h-5" />
            <h3 className="font-bold">Delete Account</h3>
          </div>
          <p className="text-sm text-text-tertiary">Once you delete your account, there is no going back. All your progress, certificates, and XP will be permanently removed.</p>
          <Button variant="destructive" className="bg-red-500 hover:bg-red-600 rounded-xl">Delete Account Forever</Button>
        </Card>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'account': return renderAccount();
      case 'learning': return renderLearning();
      case 'appearance': return renderAppearance();
      case 'security': return renderSecurity();
      default: return renderAccount();
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-black text-text-primary tracking-tight">Settings</h1>
        <p className="text-text-tertiary">Manage your account, learning path and preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Nav */}
        <aside className="w-full lg:w-[240px] shrink-0">
          <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto no-scrollbar lg:sticky lg:top-28">
            {SETTINGS_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20' 
                    : 'text-text-tertiary hover:bg-bg-secondary hover:text-text-primary'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Right Panel */}
        <main className="flex-1 min-w-0 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
