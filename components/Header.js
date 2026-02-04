import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => {
    return router.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">
          {/* Semantic XR */}
        </Link>
        <nav className="nav-links">
          <Link href="/" className={isActive("/")}>
            Home
          </Link>
          <Link href="/research" className={isActive("/research")}>
            Research
          </Link>
          <Link href="/documentation" className={isActive("/documentation")}>
            Documentation
          </Link>
          <Link href="/team" className={isActive("/team")}>
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
