import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store';
import React from 'react';
import { LandingPage } from '../pages/Landing';
import { AuthLayout } from '../components/layout/AuthLayout';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import { ForgotPassword } from '../pages/Auth/ForgotPassword';
import { OnboardingFlow } from '../pages/Onboarding';
import { DashboardPage } from '../pages/Dashboard';
import { DomainsPage } from '../pages/Domains';
import { DomainDetail } from '../pages/Domains/DomainDetail';
import { ModulePage } from '../pages/Learning/ModulePage';
import { MyLearningPage } from '../pages/Learning/MyLearningPage';
import { CoursePlayerPage } from '../pages/Learning/CoursePlayerPage';
import { CareerHub } from '../pages/Career';
import { InterviewPrep } from '../pages/Career/InterviewPrep';
import { Profile } from '../pages/Profile';
import { Leaderboard } from '../pages/Leaderboard';
import { Notifications } from '../pages/Notifications';
import { AITutor } from '../pages/AITutor';
import { Playground } from '../pages/Playground';
import { SettingsPage } from '../pages/Settings';
import { NotFoundPage } from '../pages/NotFound';

// Admin Imports
import { AdminLayout } from '../pages/Admin/AdminLayout';
import { AdminDashboard } from '../pages/Admin/Dashboard';
import { UsersPage } from '../pages/Admin/UsersPage';
import { DomainsPage as AdminDomainsPage } from '../pages/Admin/DomainsPage';
import { ModulesPage as AdminModulesPage } from '../pages/Admin/ModulesPage';
import { AnalyticsPage as AdminAnalyticsPage } from '../pages/Admin/AnalyticsPage';

// Placeholder for missing admin pages
const Placeholder = ({ name }: { name: string }) => <div className="p-8"><h1>{name}</h1></div>;

const RootLayout = () => <Outlet />;
const AppLayout = () => <DashboardLayout />;

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthStore();
  if (loading) return <div className="flex h-screen items-center justify-center bg-bg-primary">Loading...</div>;
  if (!user) return <Navigate to="/auth/login" replace />;
  return <>{children}</>;
};

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthStore();
  if (loading) return <div className="flex h-screen items-center justify-center bg-bg-primary">Loading...</div>;
  if (!user || user.role !== 'ADMIN') return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

const OnboardingGuard = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuthStore();
  if (loading) return <div className="flex h-screen items-center justify-center bg-bg-primary">Loading...</div>;
  if (user && !user.onboarded) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          { path: 'login', element: <Login /> },
          { path: 'register', element: <Register /> },
          { path: 'forgot-password', element: <ForgotPassword /> },
        ]
      },
      { path: 'onboarding', element: <ProtectedRoute><OnboardingFlow /></ProtectedRoute> },

      // Protected App Routes
      {
        element: (
          <ProtectedRoute>
            <OnboardingGuard>
              <AppLayout />
            </OnboardingGuard>
          </ProtectedRoute>
        ),
        children: [
          { path: 'dashboard', element: <DashboardPage /> },
          { path: 'domains', element: <DomainsPage /> },
          { path: 'domains/:slug', element: <DomainDetail /> },
          { path: 'learning', element: <MyLearningPage /> },
          { path: 'learning/course/:courseId', element: <CoursePlayerPage /> },
          { path: 'learn/:moduleId', element: <ModulePage /> },
          { path: 'career', element: <CareerHub /> },
          { path: 'interview-prep', element: <InterviewPrep /> },
          { path: 'profile', element: <Profile /> },
          { path: 'leaderboard', element: <Leaderboard /> },
          { path: 'notifications', element: <Notifications /> },
          { path: 'ai-tutor', element: <AITutor /> },
          { path: 'playground', element: <Playground /> },
          { path: 'settings', element: <SettingsPage /> },
        ]
      },

      // Admin Routes
      {
        path: 'admin',
        element: <AdminRoute><AdminLayout /></AdminRoute>,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: 'domains', element: <AdminDomainsPage /> },
          { path: 'modules', element: <AdminModulesPage /> },
          { path: 'users', element: <UsersPage /> },
          { path: 'analytics', element: <AdminAnalyticsPage /> },
          { path: 'quiz', element: <Placeholder name="Admin Quizzes" /> },
          { path: 'jobs', element: <Placeholder name="Admin Jobs" /> },
          { path: 'settings', element: <Placeholder name="Admin Settings" /> },
        ]
      },

      // 404
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);
