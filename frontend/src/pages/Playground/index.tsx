import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, CheckCircle, Circle, CircleDashed, FileCode, X, 
  Settings, Maximize2, RotateCcw, TerminalSquare, Layout,
  ChevronRight, ChevronDown, Check
} from 'lucide-react';
import Editor from '@monaco-editor/react';

// Mock Data
const MOCK_STEPS = [
  { id: 1, title: 'Start the Challenge', desc: 'Understand the requirements', status: 'completed' },
  { id: 2, title: 'Clone & Setup', desc: 'Get your environment ready', status: 'completed' },
  { id: 3, title: 'Write Code', desc: 'Implement the solution', status: 'active' },
  { id: 4, title: 'Push & Test', desc: 'Get instant feedback', status: 'pending' },
  { id: 5, title: 'Level Up', desc: 'Earn XP and advance', status: 'pending' },
];

const INITIAL_CODE = `import net from "net";

const server = net.createServer((connection) => {
  console.log("Client connected");
  
  connection.on("data", (data) => {
    // TODO: Parse RESP (REdis Serialization Protocol)
    // TODO: Handle PING, ECHO, SET, GET commands
    
    if (data.toString().includes("PING")) {
      connection.write("+PONG\\r\\n");
    }
  });
});

const PORT = 6379;
server.listen(PORT, "127.0.0.1", () => {
  console.log(\`Redis clone listening on port \${PORT}\`);
});`;

export const Playground: React.FC = () => {
  const [activeTab, setActiveTab] = useState('server.ts');
  const [code, setCode] = useState(INITIAL_CODE);
  const [terminalOutput, setTerminalOutput] = useState([
    { type: 'command', text: '$ git clone https://github.com/nexrole/challenge-redis.git' },
    { type: 'info', text: "Cloning into 'challenge-redis'..." },
    { type: 'command', text: '$ cd challenge-redis' },
    { type: 'command', text: '$ npm install' },
    { type: 'info', text: 'added 45 packages in 2.3s' },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(true);

  const runTests = () => {
    setIsRunning(true);
    setTerminalOutput(prev => [...prev, { type: 'command', text: '$ npm run test' }]);
    
    setTimeout(() => {
      setTerminalOutput(prev => [
        ...prev, 
        { type: 'info', text: '● Starting test suite...' },
        { type: 'error', text: '✗ PING command: Expected PONG, got undefined' },
        { type: 'success', text: '✓ SET command: Passed' },
        { type: 'success', text: '✓ GET command: Passed' },
      ]);
      setIsRunning(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />;
      case 'active': return (
        <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
          <Circle className="w-5 h-5 text-blue-500 absolute" />
          <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse"></div>
        </div>
      );
      case 'pending': return <CircleDashed className="w-5 h-5 text-slate-600 shrink-0" />;
      default: return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] w-full overflow-hidden bg-[#0D1117] text-slate-300">
      
      {/* LEFT PANEL: INSTRUCTIONS */}
      <div className="w-full lg:w-[280px] h-full border-r border-slate-800 flex flex-col shrink-0">
        
        {/* Project Header */}
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-bold uppercase rounded border border-red-500/30">
              Advanced
            </span>
            <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase rounded border border-purple-500/30">
              Project
            </span>
          </div>
          <h2 className="text-[18px] font-bold text-white mb-1">Redis Clone</h2>
          <p className="text-[13px] text-white/60 leading-snug">Build an in-memory data store with RESP protocol parsing.</p>
        </div>

        {/* Steps Flow */}
        <div className="p-5 flex-1 overflow-y-auto">
          <div className="relative pl-2">
            {/* Connecting Line */}
            <div className="absolute left-[17px] top-4 bottom-4 w-px bg-slate-800"></div>

            <div className="space-y-6 relative">
              {MOCK_STEPS.map((step, idx) => (
                <div key={step.id} className="flex gap-4 cursor-pointer group">
                  <div className="bg-[#0D1117] py-1 relative z-10">
                    {getStatusIcon(step.status)}
                  </div>
                  <div className={`py-1 ${step.status === 'active' ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'} transition-opacity`}>
                    <div className={`text-[14px] font-medium mb-0.5 ${step.status === 'active' ? 'text-blue-400' : 'text-white'}`}>
                      {step.title}
                    </div>
                    <div className="text-[12px] text-white/50">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Instructions */}
          <div className="mt-8 border border-slate-800 rounded-lg overflow-hidden bg-[#161B27]">
            <button 
              onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
              className="w-full flex items-center justify-between p-3 bg-slate-800/50 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Step 3 Instructions
              {isInstructionsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
            
            <AnimatePresence>
              {isInstructionsOpen && (
                <motion.div 
                  initial={{ height: 0 }} 
                  animate={{ height: 'auto' }} 
                  exit={{ height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-[13px] text-white/80 leading-relaxed space-y-3 prose prose-invert max-w-none prose-p:text-white/80 prose-pre:bg-[#0D1117] prose-pre:border prose-pre:border-slate-800">
                    <p>Implement the PING command. When the server receives a PING command, it should respond with PONG.</p>
                    <pre className="p-3 bg-[#0D1117] rounded border border-slate-800 text-[12px] font-mono text-slate-300"><code>+PONG\r\n</code></pre>
                    <p>Remember that Redis uses CRLF (<code>\r\n</code>) for line endings.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Start Button */}
        <div className="p-4 border-t border-slate-800">
          <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-[14px] font-bold rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
            Submit Challenge →
          </button>
        </div>
      </div>

      {/* CENTER PANEL: EDITOR */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0D1117]">
        
        {/* Editor Tabs & Toolbar */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#161B27]">
          <div className="flex">
            <div className={`flex items-center gap-2 px-4 py-2 border-r border-slate-800 bg-[#0D1117] border-t-2 border-t-blue-500 cursor-pointer`}>
              <FileCode className="w-4 h-4 text-yellow-400" />
              <span className="text-[13px] font-medium text-white">server.ts</span>
              <X className="w-3.5 h-3.5 text-slate-500 hover:text-white ml-2" />
            </div>
            <div className="flex items-center px-4 py-2 border-r border-slate-800 cursor-pointer hover:bg-slate-800/50">
              <span className="text-[13px] font-medium text-slate-400">utils.ts</span>
            </div>
          </div>
          
          <div className="flex items-center gap-1 px-3">
            <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800" title="Reset Code">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800" title="Settings">
              <Settings className="w-4 h-4" />
            </button>
            <button className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800" title="Full Screen">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center px-4 py-1.5 border-b border-slate-800 bg-[#0D1117]">
          <select className="bg-transparent border-none text-[12px] text-slate-400 focus:ring-0 cursor-pointer outline-none">
            <option>TypeScript</option>
            <option>JavaScript</option>
            <option>Python</option>
          </select>
        </div>

        {/* Monaco Editor */}
        <div className="flex-1 relative">
          <Editor
            height="100%"
            defaultLanguage="typescript"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "'JetBrains Mono', monospace",
              lineHeight: 24,
              padding: { top: 16 },
              scrollBeyondLastLine: false,
              smoothScrolling: true,
              cursorBlinking: "smooth",
              cursorSmoothCaretAnimation: "on",
              formatOnPaste: true,
            }}
            loading={
              <div className="flex items-center justify-center h-full text-slate-500">
                Loading editor...
              </div>
            }
          />
        </div>

        {/* Status Bar */}
        <div className="h-6 border-t border-slate-800 bg-[#007ACC] flex items-center justify-between px-3 shrink-0">
          <div className="flex items-center gap-4 text-[11px] text-white font-medium">
            <div className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Prettier</div>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white">
            <span>Ln 12, Col 24</span>
            <span>UTF-8</span>
            <span>LF</span>
            <span>TypeScript React</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: TERMINAL */}
      <div className="w-full lg:w-[320px] h-64 lg:h-full border-t lg:border-t-0 lg:border-l border-slate-800 flex flex-col shrink-0 bg-[#080B14]">
        
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-[#161B27]">
          <div className="flex items-center gap-2 text-[12px] font-bold text-slate-300 uppercase tracking-wider">
            <TerminalSquare className="w-4 h-4 text-slate-400" /> Terminal
          </div>
          <button 
            onClick={() => setTerminalOutput([])}
            className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider font-semibold"
          >
            Clear
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto font-mono text-[13px] leading-relaxed">
          {terminalOutput.map((out, i) => (
            <div key={i} className="mb-1">
              {out.type === 'command' && <span className="text-cyan-400">{out.text}</span>}
              {out.type === 'info' && <span className="text-slate-300">{out.text}</span>}
              {out.type === 'success' && <span className="text-green-400">{out.text}</span>}
              {out.type === 'error' && <span className="text-red-400">{out.text}</span>}
            </div>
          ))}
          {isRunning && (
            <div className="flex items-center gap-2 text-slate-400 mt-2">
              <span className="animate-pulse">Running tests...</span>
            </div>
          )}
          <div className="mt-2 flex items-center">
            <span className="text-cyan-400 mr-2">$</span>
            <span className="w-2 h-4 bg-slate-400 animate-pulse"></span>
          </div>
        </div>

        <div className="p-3 border-t border-slate-800 bg-[#0D1117]">
          <button 
            onClick={runTests}
            disabled={isRunning}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white text-[13px] font-medium rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Play className="w-4 h-4 text-green-400" /> 
            {isRunning ? 'Running...' : 'Run Tests'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playground;
