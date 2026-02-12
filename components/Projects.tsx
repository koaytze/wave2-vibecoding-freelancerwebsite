
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'pro-1',
    title: 'SaaS Analytics Dashboard',
    description: 'A comprehensive analytics platform for E-commerce sellers to track real-time revenue and inventory data.',
    techStack: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    impact: 'Increased user conversion by 25% through improved UX and real-time insights.',
    imageUrl: 'https://picsum.photos/seed/dash/800/500',
  },
  {
    id: 'pro-2',
    title: 'Global Payments API',
    description: 'Designed a multi-currency payment orchestration engine handling high-concurrency transactions securely.',
    techStack: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    impact: 'Reduced transaction failure rates by 40% for a European fintech client.',
    imageUrl: 'https://picsum.photos/seed/pay/800/500',
  },
  {
    id: 'pro-3',
    title: 'AI Content Platform',
    description: 'An AI-powered interface for generating and optimizing marketing copy using large language models.',
    techStack: ['Next.js', 'Tailwind', 'OpenAI API', 'Stripe'],
    impact: 'Automated 70% of redundant copywriting tasks for internal marketing teams.',
    imageUrl: 'https://picsum.photos/seed/ai/800/500',
  },
];

const Projects: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Selected Projects
          </p>
        </div>
        <p className="text-slate-500 max-w-md">
          A collection of work representing my commitment to quality, performance, and business value.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-2">{project.description}</p>
              
              <div className="pt-6 border-t border-slate-100">
                <p className="text-sm font-medium text-red-600 mb-1 flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  The Outcome
                </p>
                <p className="text-sm text-slate-500 italic">"{project.impact}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
