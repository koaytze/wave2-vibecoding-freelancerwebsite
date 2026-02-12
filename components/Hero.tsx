
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-slate-50 pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-red-200 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-rose-200 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-red-100 text-red-700 mb-6">
            Freelance Software Developer
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500">scalable web applications</span> for modern businesses.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
            I help startups and established companies turn complex problems into elegant, 
            high-performance digital solutions that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-xl shadow-lg text-white bg-red-600 hover:bg-red-700 hover:-translate-y-1 transition-all duration-200 focus:outline-none"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 focus:outline-none shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
