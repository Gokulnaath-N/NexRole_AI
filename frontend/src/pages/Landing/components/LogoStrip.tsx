import React from 'react';

const companies = [
  "Google", "Microsoft", "Flipkart", "Swiggy", "PhonePe", 
  "Razorpay", "NVIDIA", "Juspay", "Groww", "CRED", "Paytm", "Meesho", "Zepto"
];

export const LogoStrip = () => {
  return (
    <div className="w-full bg-bg-secondary border-y border-border-subtle overflow-hidden py-8">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-medium text-text-tertiary tracking-wide uppercase">
          Used by engineers preparing for roles at
        </p>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <div className="animate-shimmer flex whitespace-nowrap group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s', animationTimingFunction: 'linear' }}>
          {[...companies, ...companies].map((company, index) => (
            <span 
              key={index} 
              className="mx-8 text-xl md:text-2xl font-display font-bold text-text-secondary opacity-60 hover:opacity-100 transition-opacity cursor-default"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
      
      {/* Inline style for the marquee animation since it wasn't in tailwind config exactly like this */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-shimmer {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}} />
    </div>
  );
};
