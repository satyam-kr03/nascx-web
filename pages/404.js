import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found - return to home" />
      </Head>

      <Header />

      <main className="site">
        <section
          className="hero"
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontSize: "72px", marginBottom: "24px" }}>404</h1>
          <p className="tagline">Page Not Found</p>
          <p className="subtitle" style={{ marginBottom: "32px" }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="hero-buttons">
            <Link href="/" className="btn-primary">
              Back to Home
            </Link>
            <Link href="/research" className="btn-secondary">
              View Research
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
