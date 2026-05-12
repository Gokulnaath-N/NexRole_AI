import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, CheckCircle2, X, Plus, AlertCircle } from 'lucide-react';

interface ResumeStepProps {
  data: any;
  updateData: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

type UploadState = 'idle' | 'dragging' | 'uploading' | 'success' | 'error';

export const ResumeStep = ({ data, updateData, onNext, onBack }: ResumeStepProps) => {
  const [uploadState, setUploadState] = useState<UploadState>(data.skills?.length ? 'success' : 'idle');
  const [skills, setSkills] = useState<string[]>(data.skills || []);
  const [newSkill, setNewSkill] = useState('');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'idle') setUploadState('dragging');
  }, [uploadState]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    if (uploadState === 'dragging') setUploadState('idle');
  }, [uploadState]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFileUpload(file);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const handleFileUpload = (file: File) => {
    if (file.type !== 'application/pdf') {
      setUploadState('error');
      return;
    }

    setUploadState('uploading');
    
    // Simulate AI parsing
    setTimeout(() => {
      setUploadState('success');
      const extracted = ['Python', 'SQL', 'TensorFlow', 'Docker', 'AWS', 'Data Modeling', 'Git'];
      setSkills(extracted);
      updateData({ skills: extracted, resumeUploaded: true });
    }, 2500);
  };

  const removeSkill = (skillToRemove: string) => {
    const updated = skills.filter(s => s !== skillToRemove);
    setSkills(updated);
    updateData({ skills: updated });
  };

  const addSkill = (e: React.KeyboardEvent | React.MouseEvent) => {
    if (('key' in e && e.key === 'Enter') || e.type === 'click') {
      e.preventDefault();
      if (newSkill.trim() && !skills.includes(newSkill.trim())) {
        const updated = [...skills, newSkill.trim()];
        setSkills(updated);
        updateData({ skills: updated });
        setNewSkill('');
      }
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
          Upload your resume (optional)
        </h1>
        <p className="text-base text-text-secondary">
          Our AI will extract your current skills and build a more accurate skill gap analysis for you.
        </p>
      </div>

      <div className="space-y-6">
        {/* Dropzone */}
        {uploadState !== 'success' && (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative w-full h-[200px] rounded-xl flex flex-col items-center justify-center transition-all duration-300 border-2 ${
              uploadState === 'dragging' 
                ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/10' 
                : uploadState === 'error'
                  ? 'border-red-500 border-dashed bg-red-50 dark:bg-red-900/10'
                  : 'border-border-default border-dashed hover:border-brand-400 bg-bg-secondary'
            }`}
          >
            <input 
              type="file" 
              accept=".pdf" 
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              onChange={handleFileInput}
              disabled={uploadState === 'uploading'}
            />
            
            {uploadState === 'uploading' ? (
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 mb-4 text-brand-500 animate-spin" viewBox="0 0 50 50">
                  <circle className="stroke-current opacity-20" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
                  <circle className="stroke-current" cx="25" cy="25" r="20" fill="none" strokeWidth="4" strokeDasharray="90 150" strokeLinecap="round" />
                </svg>
                <p className="text-brand-600 dark:text-brand-400 font-medium">Analyzing your resume...</p>
              </div>
            ) : uploadState === 'error' ? (
              <div className="flex flex-col items-center">
                <AlertCircle className="w-10 h-10 text-red-500 mb-3" />
                <p className="font-medium text-red-600 dark:text-red-400 mb-1">Invalid file format</p>
                <p className="text-sm text-text-secondary">Please upload a PDF file.</p>
                <button 
                  onClick={(e) => { e.preventDefault(); setUploadState('idle'); }} 
                  className="mt-3 text-sm text-red-600 font-bold z-20 relative"
                >
                  Try another file
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center pointer-events-none">
                <motion.div animate={{ scale: uploadState === 'dragging' ? 1.1 : 1 }}>
                  <UploadCloud className={`w-10 h-10 mb-4 ${uploadState === 'dragging' ? 'text-brand-500' : 'text-text-tertiary'}`} />
                </motion.div>
                <p className="text-text-primary font-medium mb-1">Drop your PDF here</p>
                <p className="text-text-secondary text-sm mb-2">or <span className="text-brand-600">click to browse</span></p>
                <p className="text-xs text-text-tertiary">Supports PDF up to 5MB</p>
              </div>
            )}
          </div>
        )}

        {/* Success State - Extracted Skills */}
        {uploadState === 'success' && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="flex items-center gap-3 mb-6 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 p-4 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 shrink-0" />
              <div>
                <p className="font-bold text-green-800 dark:text-green-300">Resume analyzed successfully!</p>
                <p className="text-sm text-green-700/80 dark:text-green-400/80">Found {skills.length} technical skills.</p>
              </div>
              <button 
                onClick={() => { setUploadState('idle'); setSkills([]); updateData({ skills: [], resumeUploaded: false }); }}
                className="ml-auto text-sm font-medium text-green-700 hover:text-green-800 underline"
              >
                Re-upload
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-text-primary mb-3">Your Extracted Skills</h4>
              <div className="flex flex-wrap gap-2">
                <AnimatePresence>
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ delay: Math.min(idx * 0.05, 0.5) }}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-secondary border border-border-default rounded-full text-sm font-medium text-text-primary"
                    >
                      {skill}
                      <button 
                        onClick={() => removeSkill(skill)}
                        className="text-text-tertiary hover:text-red-500 transition-colors focus:outline-none"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Add manual skill */}
            <div>
              <label className="block text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                Add more skills manually
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={addSkill}
                  placeholder="e.g. PyTorch"
                  className="flex-1 h-10 px-3 border border-border-default rounded-lg bg-bg-primary text-sm focus:border-brand-500 focus:outline-none"
                />
                <button 
                  onClick={addSkill}
                  className="w-10 h-10 flex items-center justify-center bg-bg-secondary border border-border-default rounded-lg hover:bg-border-subtle transition-colors"
                >
                  <Plus className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Actions */}
        <div className="flex flex-col gap-4 pt-6">
          <div className="flex gap-4">
            <button
              onClick={onBack}
              className="px-6 h-12 flex items-center justify-center rounded-lg font-semibold text-text-secondary bg-bg-secondary hover:bg-border-subtle transition-colors border border-border-default"
            >
              Back
            </button>
            <button
              onClick={onNext}
              className="flex-1 h-12 flex items-center justify-center rounded-lg font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md transition-all duration-300"
            >
              {uploadState === 'success' ? 'Continue →' : 'Next Step →'}
            </button>
          </div>
          
          {uploadState !== 'success' && (
            <button 
              onClick={onNext}
              className="text-sm font-medium text-text-tertiary hover:text-text-secondary self-center"
            >
              Skip for now, I'll add skills later →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
