import React from "react";

const aboutArr = [
  {
    icon: "lightbulb",
    title: "Innovation",
    description:
      "Constantly pushing boundaries and exploring new possibilities",
  },
  {
    icon: "verified",
    title: "Excellence",
    description: "Delivering quality solutions that exceed expectations",
  },
  {
    icon: "handshake",
    title: "Integrity",
    description: "Building trust through transparency and ethical practices",
  },
  {
    icon: "groups",
    title: "Collaboration",
    description: "Working together to achieve shared success.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-background-light dark:bg-background-dark transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary bg-primary/10 text-primary text-sm font-semibold mb-6">
            About VivaCrest Solutions
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 transition-colors">
            Building the Future of Digital Innovation
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-colors">
            We are a team of passionate innovators dedicated to transforming
            businesses through cutting-edge technology and AI-driven solutions.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-8 md:p-10 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden transition-colors group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">
                  rocket_launch
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                To empower businesses with innovative AI and software solutions
                that drive growth, efficiency, and meaningful impact. We believe
                technology should be accessible, powerful, and transformative.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-surface-dark rounded-xl p-8 md:p-10 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden transition-colors group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-purple-600 text-3xl">
                  visibility
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                Our Vision
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
                To be the global leader in AI-powered business solutions,
                creating a world where every organization can harness the full
                potential of intelligent technology to achieve extraordinary
                results.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-slate-900 dark:text-white text-center mb-12 transition-colors">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            {aboutArr.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-lg p-6 text-center transition-all hover:scale-105 duration-300"
              >
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-primary to-[#092543] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-center mb-12">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-blue-200 text-sm">Projects Delivered</div>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
                <div className="text-blue-200 text-sm">Client Satisfaction</div>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
                <div className="text-blue-200 text-sm">Industries Served</div>
              </div>

              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
