import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Logo or Brand */}
        <div className="mb-6 sm:mb-0 text-white font-bold text-xl cursor-pointer select-none">
          MyBrand
        </div>

        {/* Links */}
        <nav className="flex space-x-6 text-sm">
          {['Home', 'About', 'Services', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-indigo-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 sm:mt-0">
          {[
            {
              name: 'Twitter',
              href: 'https://twitter.com',
              svg: (
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.05 9.05 0 01-2.88 1.1A4.52 4.52 0 0016.73.8c-2.5 0-4.51 2.06-4.51 4.6 0 .36.04.7.12 1.03A12.85 12.85 0 013 2.43a4.55 4.55 0 001.4 6.13 4.44 4.44 0 01-2.05-.57v.06c0 2.26 1.55 4.15 3.6 4.58a4.52 4.52 0 01-2.04.08c.57 1.8 2.23 3.11 4.19 3.15A9.1 9.1 0 012 19.58 12.9 12.9 0 008.29 21c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0023 3z"></path>
                </svg>
              ),
            },
            {
              name: 'GitHub',
              href: 'https://github.com',
              svg: (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.167 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.607.069-.607 1.004.07 1.532 1.034 1.532 1.034.892 1.527 2.341 1.086 2.91.831.091-.647.35-1.086.636-1.337-2.22-.254-4.555-1.112-4.555-4.945 0-1.091.39-1.984 1.03-2.683-.103-.254-.447-1.27.098-2.647 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.393.1 2.647.64.7 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.565 4.936.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.748 0 .267.18.577.688.479C19.138 20.164 22 16.417 22 12c0-5.52-4.48-10-10-10z"
                  />
                </svg>
              ),
            },
            {
              name: 'LinkedIn',
              href: 'https://linkedin.com',
              svg: (
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.2c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.2h-3v-5.6c0-1.34-1.1-2.4-2.4-2.4s-2.4 1.06-2.4 2.4v5.6h-3v-10h3v1.5c.88-1.29 3.4-1.39 4.8 0v-1.5h3v10z" />
                </svg>
              ),
            },
          ].map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              aria-label={name}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
