import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Lock, Eye, EyeOff, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { useAuth } from '../../features/auth/useAuth';
import { useAuthStore } from '../../store';

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signInWithEmail, signInWithGoogle, signInWithGithub } = useAuth();
  const { user, loading } = useAuthStore();
  const navigate = useNavigate();

  // Navigate once the AuthProvider has synced the user into the store.
  // Doing it here (reactively) avoids the race condition where navigate()
  // was called before /auth/sync finished and user was still null.
  useEffect(() => {
    if (!loading && user) {
      navigate(user.onboarded ? '/dashboard' : '/onboarding', { replace: true });
    }
  }, [user, loading, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsSubmitting(true);
      await signInWithEmail(data.email, data.password);
      // Do NOT navigate here — the useEffect above will navigate once
      // AuthProvider finishes the /auth/sync and sets user in the store.
    } catch (error: any) {
      const msg = error.message || 'Failed to sign in. Please check your credentials.';
      toast.error(msg);
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
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Welcome back</h2>
        <p className="text-sm text-text-tertiary">Continue your AI learning journey</p>
      </div>

      {/* OAuth Buttons */}
      <div className="flex flex-col gap-2 mb-6">
        <button 
          onClick={() => handleOAuth('google')}
          className="flex items-center justify-center gap-2 w-full h-11 bg-white dark:bg-[#161B27] border border-border-default rounded-md text-text-primary font-medium hover:border-brand-500 hover:shadow-md transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <button 
          onClick={() => handleOAuth('github')}
          className="flex items-center justify-center gap-2 w-full h-11 bg-[#1C2333] dark:bg-[#161B27] border border-transparent dark:border-border-default rounded-md text-white dark:text-text-primary font-medium hover:bg-[#2A344A] dark:hover:bg-[#1C2333] hover:shadow-md transition-all"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
          Continue with GitHub
        </button>
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="flex-1 h-[1px] bg-border-subtle" />
        <span className="text-xs text-text-tertiary">or continue with email</span>
        <div className="flex-1 h-[1px] bg-border-subtle" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type="email"
              {...register('email')}
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-text-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-text-primary">
              Password
            </label>
            <Link to="/auth/forgot-password" className="text-xs text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-text-tertiary" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              className={`block w-full pl-10 pr-10 py-2 border ${errors.password ? 'border-red-500 focus:ring-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-text-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors`}
              placeholder="••••••••"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-text-tertiary hover:text-text-secondary transition-colors" />
              ) : (
                <Eye className="h-4 w-4 text-text-tertiary hover:text-text-secondary transition-colors" />
              )}
            </button>
          </div>
          {errors.password && (
            <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </motion.p>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center h-11 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-colors mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </motion.button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary">
          Don't have an account?{' '}
          <Link to="/auth/register" className="font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};
