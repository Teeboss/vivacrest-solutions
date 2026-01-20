import React from 'react';

const Industries: React.FC = () => {
  const industries = [
    { icon: "medical_services", name: "Healthcare" },
    { icon: "account_balance", name: "Finance" },
    { icon: "school", name: "Education" },
    { icon: "shopping_bag", name: "Retail" }
  ];

  return (
    <section id="industries" className="py-20 bg-slate-50 dark:bg-background-dark/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white transition-colors">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-700">
              <span className="material-symbols-outlined text-4xl text-blue-500 mb-3">{industry.icon}</span>
              <h4 className="font-semibold text-slate-900 dark:text-white transition-colors">{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;