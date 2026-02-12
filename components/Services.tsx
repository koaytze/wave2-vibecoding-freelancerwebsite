
import React from 'react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Application Development',
    description: 'Custom React-based SPAs and dashboards built for speed, responsiveness, and seamless user experiences.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    id: 'api-backend',
    title: 'API & Backend Engineering',
    description: 'Robust, secure, and scalable Node.js or Python backends with well-documented REST or GraphQL APIs.',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2',
  },
  {
    id: 'architecture',
    title: 'System Architecture',
    description: 'Strategic consulting on cloud infrastructure (AWS/Vercel), database design, and technical roadmaps.',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
  },
  {
    id: 'maintenance',
    title: 'Optimization & Growth',
    description: 'Audit and improve existing codebases for performance, SEO, accessibility, and modern standards.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase">Expertise</h2>
        <p className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          How I can help your business grow
        </p>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          Focused on delivering tangible outcomes through high-quality engineering and modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative p-8 bg-white border border-slate-100 rounded-3xl hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300"
          >
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
