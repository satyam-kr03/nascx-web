import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return router.pathname === path ? "active" : "";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          {/* Semantic XR */}
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="mobile-nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
        </button>

        <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <Link href="/" className={isActive("/")} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link
            href="/research"
            className={isActive("/research")}
            onClick={closeMobileMenu}
          >
            Research
          </Link>
          <Link
            href="/documentation"
            className={isActive("/documentation")}
            onClick={closeMobileMenu}
          >
            Documentation
          </Link>
          <Link
            href="/team"
            className={isActive("/team")}
            onClick={closeMobileMenu}
          >
            Team
          </Link>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <a
            href="https://github.com/satyam-kr03/NASCX"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
          >
            GitHub →
          </a>
        </nav>
      </div>
    </header>
  );
}
