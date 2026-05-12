import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff, Loader2, User, Check, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAuth } from '../../features/auth/useAuth';
import { useAuthStore } from '../../store';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';

const registerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, "You must agree to the terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

const calculatePasswordScore = (pass: string) => {
  if (!pass) return 0;
  let score = 0;
  if (pass.length >= 8) score += 1;
  if (/[A-Z]/.test(pass) || /[0-9]/.test(pass)) score += 1;
  if (/[A-Z]/.test(pass) && /[0-9]/.test(pass)) score += 1;
  if (/[^A-Za-z0-9]/.test(pass)) score += 1;
  return Math.min(score, 4);
};

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();

  // Navigate reactively once AuthProvider has synced the new user into the store.
  // New users are never onboarded so they always go to /onboarding first.
  useEffect(() => {
    if (!loading && user) {
      navigate(user.onboarded ? '/dashboard' : '/onboarding', { replace: true });
    }
  }, [user, loading, navigate]);

  const {
    register: formRegister,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const watchPassword = watch("password", "");
  const watchConfirm = watch("confirmPassword", "");
  const passwordScore = calculatePasswordScore(watchPassword);

  const getScoreColor = (score: number, index: number) => {
    if (score === 0) return 'bg-bg-tertiary';
    if (score === 1) return index < 1 ? 'bg-red-500' : 'bg-bg-tertiary';
    if (score === 2) return index < 2 ? 'bg-amber-500' : 'bg-bg-tertiary';
    if (score === 3) return index < 3 ? 'bg-brand-500' : 'bg-bg-tertiary';
    return 'bg-green-500';
  };

  const getScoreLabel = (score: number) => {
    if (score === 0) return '';
    if (score === 1) return 'Too short';
    if (score === 2) return 'Weak';
    if (score === 3) return 'Fair';
    return 'Strong';
  };

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      setIsSubmitting(true);
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(userCredential.user, { displayName: data.fullName });
      // Do NOT navigate here — the useEffect above will navigate once
      // AuthProvider finishes /auth/sync and sets the user in the store.
    } catch (error: any) {
      toast.error(error.message || 'Failed to create account. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleOAuth = async (provider: 'google' | 'github') => {
    try {
      setIsSubmitting(true);
      if (provider === 'google') await signInWithGoogle();
      if (provider === 'github') await signInWithGithub();
      // Navigation handled by the useEffect above
    } catch (error: any) {
      toast.error(error.message || `Failed to sign in with ${provider}`);
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full pb-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Create an account</h2>
        <p className="text-sm text-text-tertiary">Start your AI learning journey</p>
      </div>

      {/* OAuth Buttons */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => handleOAuth('google')} className="flex-1 flex items-center justify-center h-11 bg-white dark:bg-[#161B27] border border-border-default rounded-md hover:border-brand-500 hover:shadow-md transition-all">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
        </button>
        <button onClick={() => handleOAuth('github')} className="flex-1 flex items-center justify-center h-11 bg-[#1C2333] dark:bg-[#161B27] border border-transparent dark:border-border-default rounded-md text-white dark:text-text-primary hover:bg-[#2A344A] dark:hover:bg-[#1C2333] hover:shadow-md transition-all">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-[1px] bg-border-subtle" />
        <span className="text-xs text-text-tertiary">or sign up with email</span>
        <div className="flex-1 h-[1px] bg-border-subtle" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Full name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type="text"
              {...formRegister('fullName')}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500`}
              placeholder="John Doe"
            />
          </div>
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Email address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type="email"
              {...formRegister('email')}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              {...formRegister('password')}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500`}
              placeholder="••••••••"
            />
            <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="h-4 w-4 text-text-tertiary" /> : <Eye className="h-4 w-4 text-text-tertiary" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          <div className="mt-2">
            <div className="flex gap-1 h-1.5 w-full rounded-full overflow-hidden mb-1">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className={`h-full flex-1 transition-colors duration-300 ${getScoreColor(passwordScore, idx)}`} />
              ))}
            </div>
            <div className="flex justify-between items-center px-1">
              <span className={`text-[10px] font-medium ${passwordScore === 4 ? 'text-green-600 dark:text-green-400' : 'text-text-tertiary'}`}>
                {getScoreLabel(passwordScore)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              {...formRegister('confirmPassword')}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500`}
              placeholder="••••••••"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {watchConfirm.length > 0 && watchPassword === watchConfirm && <Check className="h-4 w-4 text-green-500" />}
              {watchConfirm.length > 0 && watchPassword !== watchConfirm && <X className="h-4 w-4 text-red-500" />}
            </div>
          </div>
          {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
        </div>

        <div className="flex items-start mt-4">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              {...formRegister('terms')}
              className="w-4 h-4 text-brand-600 bg-bg-primary border-border-default rounded focus:ring-brand-500 focus:ring-2"
            />
          </div>
          <div className="ml-2 text-sm">
            <label htmlFor="terms" className="font-medium text-text-secondary">
              I agree to the <a href="#" className="text-brand-600 hover:underline">Terms of Service</a> and <a href="#" className="text-brand-600 hover:underline">Privacy Policy</a>
            </label>
            {errors.terms && <p className="mt-1 text-xs text-red-500">{errors.terms.message}</p>}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center h-11 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-colors mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Creating account...</> : "Create Account →"}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary">
          Already have an account?{' '}
          <Link to="/auth/login" className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
