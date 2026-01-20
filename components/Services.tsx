import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      icon: "code",
      title: "Web Development",
      description:
        "Custom, responsive websites and web applications built with modern frameworks to ensure performance and scalability.",
    },
    {
      icon: "dns",
      title: "IT Consulting",
      description:
        "Strategic IT planning, infrastructure optimization, and expert consultation for telco, biller, and third-party system integrations.",
    },
    {
      icon: "smart_toy",
      title: "AI Solutions",
      description:
        "Leverage machine learning and generative AI to automate processes and gain predictive insights.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-background-dark transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            Core Solutions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            We deliver comprehensive technology services tailored to scale your
            business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed transition-colors">
                {service.description}
              </p>
              {/* <a href="#" className="inline-flex items-center text-primary dark:text-blue-400 font-semibold text-sm hover:underline">
                Learn more <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
