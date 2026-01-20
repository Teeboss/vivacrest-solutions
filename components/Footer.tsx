import React from "react";
import { Icon } from "@iconify/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  alt="VivaCrest"
                  className="w-full h-full object-cover"
                  src="/images/logo.png"
                />
              </div>
              <span className="font-display font-bold text-xl">VivaCrest</span>
            </div>
            <p className="text-slate-400 text-sm">
              Innovating for a better tomorrow through technology and
              intelligence.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-slate-200">Services</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-slate-200">Company</h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#industries"
                  className="hover:text-white transition-colors"
                >
                  Industries
                </a>
              </li>
              {/* <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4 text-slate-200">Connect</h5>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/viva-crest/"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" className="h-6 w-6" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61574824271332"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          {new Date().getFullYear()} VivaCrest Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
