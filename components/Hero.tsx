import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-primary"
          fill="currentColor"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M50 0 L100 0 L100 100 L0 100 Z" opacity="0.1"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 text-xs font-semibold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Leading Technology Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-tight mb-6 transition-colors">
              Building the Future with{" "}
              <span className="text-primary">Intelligent AI</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 transition-colors">
              VivaCrest combines cutting-edge web development, expert IT
              consulting, and AI-powered products to drive your digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-900/20 text-center"
              >
                Start a Project
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-blue-600 aspect-[4/3] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]"></div>
              <img
                alt="Technology Abstract Dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_fph35Yux6AdjEpEYdRbp4pB-pbQ41s3CmkhrfHKLqkDIu8x3O5MN5zG75Nw_Wo-kcm0XJD4Q9EkG7hDaAmGN3-YADj64Yr3E736MpCeCVkUpGevQ3e9O4u98Owyu_DCAHx4JTbhg0bTWjhgBmriFDdgr5vJT3y9wEhqOYbkJLGAyOTC24-IvViV1y8MXs2Tr4EAbRdAHmwLuOoKfeDGrV0DtTYobJUxZ4iSHzGA2zJz_5ePjprdoWwZ-0V07P12foLJV66QkvGXP"
              />
              <div className="relative z-10 text-white text-center p-8 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20">
                <span className="material-symbols-outlined text-6xl mb-2">
                  psychology
                </span>
                <p className="font-display font-bold text-xl">
                  AI-Powered Insights
                </p>
                <div className="mt-4 flex gap-2 justify-center">
                  <div
                    className="h-2 w-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0s" }}
                  ></div>
                  <div
                    className="h-2 w-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
