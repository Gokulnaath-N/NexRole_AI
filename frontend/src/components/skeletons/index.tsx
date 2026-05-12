import React from 'react';

const cn = (...classes: string[]) => classes.filter(Boolean).join(' ');

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn(
    "animate-shimmer bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200",
    "dark:from-slate-800 dark:via-slate-700 dark:to-slate-800",
    "bg-[length:400%_100%] rounded",
    className || ''
  )} />
);

export const DomainCardSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm flex flex-col">
    <Skeleton className="h-1 w-full rounded-none" />
    <div className="p-6 flex-1 flex flex-col">
      <Skeleton className="h-12 w-12 mb-4" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <div className="mt-auto">
        <Skeleton className="h-4 w-1/2 mb-4" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  </div>
);

export const DashboardSkeleton = () => (
  <div className="w-full space-y-8">
    <div className="space-y-2">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-28 w-full rounded-xl" />
      ))}
    </div>
    <Skeleton className="h-32 w-full rounded-xl" />
    <div className="flex flex-col lg:flex-row gap-6">
      <Skeleton className="h-64 w-full lg:w-2/3 rounded-xl" />
      <Skeleton className="h-64 w-full lg:w-1/3 rounded-xl" />
    </div>
  </div>
);

export const ModuleListSkeleton = () => (
  <div className="space-y-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="h-14 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg flex items-center px-4 gap-4">
        <Skeleton className="h-6 w-6 rounded-full shrink-0" />
        <Skeleton className="h-4 w-1/3" />
        <div className="ml-auto flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-12 rounded-full" />
        </div>
      </div>
    ))}
  </div>
);

export const JobCardSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
    <div className="flex items-center gap-3 mb-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-3 w-1/3" />
      </div>
    </div>
    <div className="flex gap-2 mb-4">
      <Skeleton className="h-5 w-16 rounded-full" />
      <Skeleton className="h-5 w-20 rounded-full" />
      <Skeleton className="h-5 w-24 rounded-full" />
    </div>
    <Skeleton className="h-8 w-full mt-auto" />
  </div>
);

export const ProfileSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
    <div className="flex flex-col items-center mb-6">
      <Skeleton className="h-20 w-20 rounded-full mb-4" />
      <Skeleton className="h-6 w-48 mb-2" />
      <Skeleton className="h-4 w-32 mb-4" />
      <Skeleton className="h-6 w-24 rounded-full" />
    </div>
    <div className="grid grid-cols-2 gap-3 mb-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <Skeleton key={i} className="h-16 w-full rounded-lg" />
      ))}
    </div>
    <Skeleton className="h-10 w-full rounded-md" />
  </div>
);

export const LeaderboardSkeleton = () => (
  <div className="space-y-12 w-full">
    <div className="flex justify-center items-end gap-2 md:gap-6 h-[220px]">
      <Skeleton className="w-28 md:w-40 h-[130px] rounded-t-xl" />
      <Skeleton className="w-32 md:w-48 h-[170px] rounded-t-xl" />
      <Skeleton className="w-28 md:w-40 h-[110px] rounded-t-xl" />
    </div>
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="h-16 border-b border-slate-100 dark:border-slate-800 flex items-center px-6 gap-6">
          <Skeleton className="h-4 w-8" />
          <div className="flex items-center gap-3 flex-1">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-5 w-20 rounded-full hidden md:block" />
          <Skeleton className="h-4 w-12" />
        </div>
      ))}
    </div>
  </div>
);

export const ModuleCardSkeleton = () => (
  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
    <div className="flex items-start gap-4">
      <Skeleton className="h-12 w-12 rounded-lg flex-shrink-0" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  </div>
);
