import React from "react";

const Product: React.FC = () => {
  return (
    <section
      id="product"
      className="py-20 bg-gradient-to-br from-primary to-[#092543] text-white relative overflow-hidden"
    >
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Visual */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border-4 border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shadow-2xl">
              <img
                alt="VivaCrest Mental Health Platform Logo"
                className="w-full h-full object-contain p-4 rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDCsrfMNW8TfCg5a4ESW-NB_9Yb0rIlXxnwBhLoDEobT4iMx1usRoD1iTCAx08G3zeW8uoiFcE-bUwwUjO8BYBb4aY9DZAfun5v4d61c0aXby1wo7FBqEc6h3yZvcbDGCom2J0CaBG5ETlG8iiwtViqii4wXA09GRq_DMjfMp-pA8EGOTtWoPi8VicWS8RdkMfzZP97VJudx1kG1RkcJm3IpnRq3FzBHmEFcpo1xR36C0ZfoVrF5e1cosuIfkXtJb6hFq0jhYrMNwM"
              />
              <div className="absolute -right-4 top-1/4 bg-white text-primary px-4 py-2 rounded-lg shadow-lg text-sm font-bold flex items-center gap-2 animate-bounce">
                <span className="material-symbols-outlined text-green-500">
                  check_circle
                </span>
                AI Verified
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-400 bg-blue-500/20 text-blue-100 text-sm font-semibold mb-6">
              Flagship Product
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              VivaCrest Mental Health Platform
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              A revolutionary AI-driven approach to mental wellness. Our
              platform uses advanced pattern recognition to provide personalized
              mental health insights and growth pathways.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-300 mt-1">
                  psychology_alt
                </span>
                <span className="text-blue-50">
                  Deep learning algorithms for personalized care plans.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-300 mt-1">
                  security
                </span>
                <span className="text-blue-50">
                  HIPAA-compliant secure data processing.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-blue-300 mt-1">
                  monitoring
                </span>
                <span className="text-blue-50">
                  Real-time mood tracking and analytics.
                </span>
              </li>
            </ul>
            <button
              onClick={() => (window.location.href = "https://vivacrest.com/")}
              className="bg-white text-primary px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg"
            >
              Explore the Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
