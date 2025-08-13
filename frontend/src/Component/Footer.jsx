// Footer.jsx
import { Link } from "react-router-dom"; // or `import Link from "next/link";` for Next.js
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            
            {/* Brand */}
            <div className="max-w-sm">
              <Link to="/" className="inline-flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  CampusConne<span className="text-purple-400">ct</span>
                </span>
              </Link>
              <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                Building reliable web experiences with performance and accessibility at the core.
              </p>
              
              {/* Social */}
              <div className="mt-6 flex gap-4">
                <Link
                  to="https://instagram.com/biswajit_04_"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </Link>
                <Link
                  to="https://github.com/biswajit0123"
                  aria-label="GitHub"
                   target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/biswajit-muduli-1246a024b/"
                  aria-label="LinkedIn"
                   target="_blank"
                  className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
                >
                  <FaLinkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Link columns */}
            <nav aria-label="Footer" className="w-full md:max-w-3xl">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100"> Product</h3>
                  <ul className="mt-4 space-y-3 text-white text-xs">
                    <li><Link to="/features" className="footer-link">Features</Link></li>
                    <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
                    <li><Link to="/integrations" className="footer-link">Integrations</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Company</h3>
                  <ul className="mt-4 space-y-3 text-xs text-white">
                    <li><Link to="/about" className="footer-link">About</Link></li>
                    <li><Link to="/careers" className="footer-link">Careers</Link></li>
                    <li><Link to="/blog" className="footer-link">Blog</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Support</h3>
                  <ul className="mt-4 space-y-3 text-white text-xs">
                    <li><Link to="/docs" className="footer-link">Docs</Link></li>
                    <li><Link to="/status" className="footer-link">Status</Link></li>
                    <li><Link to="/contact" className="footer-link">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} CampusConnect, Inc. All rights reserved.
            </p>
            <div className="flex gap-4 text-white ">
              <Link to="/privacy" className="footer-link text-xs">Privacy</Link>
              <Link to="/terms" className="footer-link text-xs">Terms</Link>
              <Link to="/cookies" className="footer-link text-xs">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
