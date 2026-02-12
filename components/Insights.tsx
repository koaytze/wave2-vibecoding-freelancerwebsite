
import React from 'react';

const Insights: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Strategic Visuals</h2>
        <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Systems Architecture & Industry Trends
        </p>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          Visualizing complex systems to ensure clarity, efficiency, and future-proof scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* CRM Diagram Block */}
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Unified CRM Lifecycle</h3>
            <p className="text-slate-600">
              A modern approach to Customer Relationship Management focusing on data integrity and real-time synchronization between sales, marketing, and support.
            </p>
          </div>
          
          <div className="relative aspect-video bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-center">
            <svg viewBox="0 0 400 240" className="w-full h-full text-slate-400 font-medium text-[10px]">
              {/* Nodes */}
              <rect x="20" y="90" width="80" height="40" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
              <text x="60" y="115" textAnchor="middle" fill="#991B1B">Lead Capture</text>
              
              <rect x="160" y="20" width="80" height="40" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
              <text x="200" y="45" textAnchor="middle" fill="#991B1B">Nurturing</text>

              <rect x="160" y="90" width="80" height="40" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2.5" />
              <text x="200" y="115" textAnchor="middle" fill="#991B1B" className="font-bold">Core Data</text>

              <rect x="160" y="160" width="80" height="40" rx="8" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
              <text x="200" y="185" textAnchor="middle" fill="#991B1B">Support</text>

              <rect x="300" y="90" width="80" height="40" rx="8" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
              <text x="340" y="115" textAnchor="middle" fill="#991B1B">Retention</text>

              {/* Connectors */}
              <path d="M100 110 L160 110" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              <path d="M200 60 L200 90" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              <path d="M200 130 L200 160" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              <path d="M240 110 L300 110" stroke="#EF4444" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                </marker>
              </defs>
              
              {/* Labels for Trends */}
              <text x="130" y="105" className="italic text-[8px]" fill="#64748B">Pipeline</text>
              <text x="270" y="105" className="italic text-[8px]" fill="#64748B">Loyalty</text>
            </svg>
          </div>
        </div>

        {/* Development Trends Diagram Block */}
        <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2025 Tech Convergence</h3>
            <p className="text-slate-600">
              The shift from monolithic stacks to intelligent, modular architectures utilizing AI orchestration and edge-native performance.
            </p>
          </div>
          
          <div className="relative aspect-video bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-center">
             <svg viewBox="0 0 400 240" className="w-full h-full text-slate-400 font-medium text-[10px]">
              {/* Concentric Circles for Ecosystem */}
              <circle cx="200" cy="120" r="100" fill="none" stroke="#F1F5F9" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="200" cy="120" r="70" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Central AI Node */}
              <circle cx="200" cy="120" r="35" fill="#EF4444" />
              <text x="200" y="123" textAnchor="middle" fill="white" className="font-bold">AI Core</text>

              {/* Trend Satellites */}
              <g transform="translate(200, 120)">
                <circle cx="0" cy="-85" r="30" fill="white" stroke="#EF4444" strokeWidth="1" />
                <text x="0" y="-82" textAnchor="middle" fill="#991B1B">Edge Comp.</text>

                <circle cx="80" cy="30" r="30" fill="white" stroke="#EF4444" strokeWidth="1" />
                <text x="80" y="33" textAnchor="middle" fill="#991B1B">Serverless</text>

                <circle cx="-80" cy="30" r="30" fill="white" stroke="#EF4444" strokeWidth="1" />
                <text x="-80" y="33" textAnchor="middle" fill="#991B1B">Real-time</text>
              </g>

              {/* Orbiting Labels */}
              <text x="320" y="40" fill="#64748B" className="text-[8px]">Low Latency</text>
              <text x="80" y="210" fill="#64748B" className="text-[8px]">Auto-Scaling</text>
              <text x="310" y="200" fill="#64748B" className="text-[8px]">Observability</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Modern Trends Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "AI Integration",
            value: "74%",
            desc: "Increase in business automation via custom LLM implementation."
          },
          {
            title: "Serverless Performance",
            value: "2.4x",
            desc: "Faster deployment cycles using edge-native computing models."
          },
          {
            title: "Data Sovereignty",
            value: "100%",
            desc: "Compliance focus with decentralized storage architectures."
          }
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 border-x border-slate-100">
            <div className="text-4xl font-extrabold text-red-600 mb-2">{stat.value}</div>
            <div className="text-lg font-bold text-slate-900 mb-2">{stat.title}</div>
            <p className="text-sm text-slate-500 leading-relaxed">{stat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
