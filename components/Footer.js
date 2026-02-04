import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/">Home</Link>
          <Link href="/research">Research</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/team">Team</Link>
          <a
            href="https://github.com/satyam-kr03/NASCX"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="footer-credit">
          <p>Network-Aware Semantic Communication for XR in 6G Networks</p>
          <p style={{ marginTop: "8px" }}>
            © {currentYear} SCEE IIT Mandi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
