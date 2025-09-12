import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <h3>LEARNING<br /> RESOURCE<br /> CENTER</h3>
        </div>
        <div className="footer-links">
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/news" className="hover:underline">News</Link></li>
              <li><Link href="/facilities" className="hover:underline">Facilities</Link></li>
            </ul>
          </div>
          <div>
            <h4>Other</h4>
            <ul>
              <li><a href="http://opac.usls.edu.ph:8080/?config=default#section=home" className="hover:underline">OPAC</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/collections" className="hover:underline">Collections</a></li>
            </ul>
          </div>
          <div>
            <h4>Schools</h4>
            <ul>
              <li><Link href="/professional-libraries#law-library" className="hover:underline">Law School</Link></li>
              <li><Link href="/professional-libraries#medical-library" className="hover:underline">Medical School</Link></li>
              <li><Link href="/professional-libraries#graduate-library" className="hover:underline">Graduate School</Link></li>
            </ul>
          </div>
          <div>
            <h4>SUPPORT US</h4>
            <div className="social">
              <a aria-label="Facebook" href="#" className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                  <path d="M13.5 9H15V7h-1.5a3 3 0 00-3 3v1.5H9V13h1.5V20h2.25v-7H15l.5-1.5h-2v-1a1 1 0 011-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© 2025 USLS - Learning Resource Center</div>
    </footer>
  );
}
