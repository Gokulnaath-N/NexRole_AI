import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Loader2, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firebase';

const forgotSchema = z.object({
  email: z.string().email("Please enter a valid email"),
});

type ForgotFormValues = z.infer<typeof forgotSchema>;

export const ForgotPassword = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ForgotFormValues>({
    resolver: zodResolver(forgotSchema),
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const onSubmit = async (data: ForgotFormValues) => {
    try {
      setIsSubmitting(true);
      await sendPasswordResetEmail(auth, data.email);
      setIsSuccess(true);
      setCountdown(60);
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset link");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
        </motion.div>
        
        <h2 className="text-2xl font-bold text-text-primary mb-3">Check your inbox</h2>
        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          We sent a password reset link to<br/>
          <span className="font-medium text-text-primary">{getValues('email')}</span>
        </p>

        <button 
          onClick={() => onSubmit(getValues())}
          disabled={countdown > 0}
          className="text-sm text-brand-600 font-medium mb-8 disabled:text-text-tertiary disabled:cursor-not-allowed hover:text-brand-700 transition-colors"
        >
          {countdown > 0 ? `Didn't receive it? Resend in ${countdown}s` : "Resend reset link"}
        </button>

        <div>
          <Link to="/auth/login" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-2">
            <span>←</span> Back to Sign In
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-2">Forgot password?</h2>
        <p className="text-sm text-text-tertiary">No worries, we'll send you reset instructions.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              className={`block w-full pl-10 pr-3 py-2 border ${errors.email ? 'border-red-500' : 'border-border-default focus:border-brand-500'} rounded-md bg-bg-primary text-sm focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors`}
              placeholder="you@example.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center h-11 bg-brand-600 hover:bg-brand-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Reset Link"
          )}
        </motion.button>
      </form>

      <div className="mt-8 text-center">
        <Link to="/auth/login" className="text-sm text-text-secondary hover:text-text-primary transition-colors flex items-center justify-center gap-2">
          <span>←</span> Back to Sign In
        </Link>
      </div>
    </motion.div>
  );
};
