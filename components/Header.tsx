"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const aboutMenuItems = [
    { label: "Learn More About Us", href: "/about/learn-more-about-us" },
    { label: "Office Hours & Staff", href: "/about/office-hours-staff" },
    { label: "Guidelines & Handbook", href: "/about/guidelines-handbook" },
  ];

  return (
    <header>
      <div className="header-container">
        <div className="header-flex">
          <Link href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }} aria-label="USLS Learning Resource Center Home">
            <Image src="/logos/usls-logo.svg" width={118} height={28} alt="USLS logo" className="h-8 w-auto md:h-10 invert-[1] brightness-0" />
            <span className="sr-only">University of St. La Salle</span>
          </Link>

          {/* Hamburger Button */}
          <button
            className="mobile-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            style={{ padding: '8px' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link
              href="/"
              style={{
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '15px',
                letterSpacing: '0.5px'
              }}
            >
              HOME
            </Link>
            
            {/* About Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className="nav-dropdown-trigger"
                style={{
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '15px',
                  letterSpacing: '0.5px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0'
                }}
              >
                ABOUT
              </button>
              <div className={`nav-dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                {aboutMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="nav-dropdown-item"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "NEWS", href: "#news" },
              { label: "FACILITIES", href: "#facilities" },
              { label: "SERVICES", href: "#services" },
              { label: "COLLECTIONS", href: "#collections" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: 'white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  fontSize: '15px',
                  letterSpacing: '0.5px'
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#opac"
              style={{
                backgroundColor: 'white',
                color: '#006633',
                padding: '8px 16px',
                borderRadius: '999px',
                fontWeight: 'bold',
                textDecoration: 'none',
                marginLeft: '8px'
              }}
            >
              OPAC
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? 'show' : ''}`} style={{ backgroundColor: '#006633', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <nav style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link
              href="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 0',
                fontWeight: '600',
                fontSize: '16px'
              }}
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            
            {/* Mobile About Dropdown */}
            <div className="mobile-dropdown">
              <button
                className="mobile-dropdown-trigger"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 0',
                  fontWeight: '600',
                  fontSize: '16px',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                ABOUT
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="white" 
                  strokeWidth="2"
                  style={{
                    transform: aboutDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
              <div className={`mobile-dropdown-menu ${aboutDropdownOpen ? 'show' : ''}`}>
                {aboutMenuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '8px 16px',
                      fontWeight: '500',
                      fontSize: '15px',
                      opacity: '0.9'
                    }}
                    onClick={() => {
                      setIsOpen(false);
                      setAboutDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {[
              { label: "NEWS", href: "#news" },
              { label: "FACILITIES", href: "#facilities" },
              { label: "SERVICES", href: "#services" },
              { label: "COLLECTIONS", href: "#collections" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  padding: '8px 0',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#opac"
              style={{
                backgroundColor: 'white',
                color: '#006633',
                padding: '8px 16px',
                borderRadius: '999px',
                fontWeight: 'bold',
                textAlign: 'center',
                textDecoration: 'none',
                marginTop: '8px'
              }}
              onClick={() => setIsOpen(false)}
            >
              OPAC
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
