import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-[#1A2820] border-t border-[#ddd8ce]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* Top section */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Social */}
          {/* <div>
            <h4 className="text-sm font-semibold text-[#F7F5F0]">Follow Us</h4>
            <div className="mt-3 flex space-x-4">
              <a href="" target="_blank" className="social-icon" aria-label="Twitter">
                <svg className="text-[#2B3E34] hover:text-[#E07A5F] transition h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.5 3.5a1 1 0 0 0-1.414 0L12 11.586 3.914 3.5a1 1 0 1 0-1.414 1.414L10.586 13l-8.086 8.086a1 1 0 1 0 1.414 1.414L12 14.414l8.086 8.086a1 1 0 0 0 1.414-1.414L13.414 13l8.086-8.086a1 1 0 0 0 0-1.414z"/>
                </svg>
              </a>
              <a href="" className="social-icon" target="_blank" aria-label="linkedIn">
                <svg className="text-[#2B3E34] hover:text-[#E07A5F] transition h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.5c0-1.38-.03-3.16-1.92-3.16-1.92 0-2.21 1.5-2.21 3.06v5.6h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.6z"/>
                </svg>
              </a>
            </div>
          </div> */}

          {/* Legal */}
          <div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-[#F7F5F0] hover:text-[#E07A5F] transition footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-[#F7F5F0] hover:text-[#E07A5F] transition footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom */}
          <div className="pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Lamassu General Contracting Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}