import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Documentation() {
  return (
    <>
      <Head>
        <title>Documentation — Semantic Communication for XR</title>
        <meta
          name="description"
          content="Documentation: Setup guide, installation instructions, architecture overview, and API reference."
        />
      </Head>

      <Header />

      <main className="site">
        <section
          className="hero"
          style={{ paddingBottom: "40px", marginBottom: "40px" }}
        >
          <h1>Documentation</h1>
          <p className="tagline">Installation, Setup & API Reference</p>
          <p className="subtitle">
            Complete guides for setting up the framework and running
            simulations.
          </p>
        </section>

        <section className="section">
          <h2>Quick Start Guide</h2>
          <p className="section-intro">
            Get up and running with the project in minutes.
          </p>

          <div className="card">
            <h3>Prerequisites</h3>
            <ul>
              <li>Linux system (Ubuntu 20.04 or later recommended)</li>
              <li>sudo privileges for system package installation</li>
              <li>8GB+ RAM (16GB recommended)</li>
              <li>20GB+ free disk space</li>
              <li>Git version control system</li>
            </ul>
          </div>

          <div className="card">
            <h3>Installation Steps</h3>
            <div className="code-block">
              <code>
                git clone https://github.com/satyam-kr03/NASCX.git
                <br />
                cd NASCX
                <br />
                chmod +x install.sh
                <br />
                ./install.sh
              </code>
            </div>
            <p style={{ marginTop: "16px", color: "var(--text-muted)" }}>
              The automated installation script will:
            </p>
            <ul>
              <li>Install system dependencies (build-tools, libraries)</li>
              <li>Download and configure OMNeT++ 6.2.0</li>
              <li>Build and integrate INET Framework 4.5</li>
              <li>Install Simu5G 1.3.0 module</li>
              <li>Create a Python 3.12 conda environment</li>
            </ul>
          </div>

          <div className="card">
            <h3>Verification</h3>
            <p>Verify the installation:</p>
            <div className="code-block">
              <code>
                conda activate omnetpp
                <br />
                inet -v
                <br />
                cd simu5g-1.3.0
                <br />
                ./inet_version
              </code>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Project Structure</h2>
          <p className="section-intro">
            Understanding the organization of the project framework.
          </p>

          <div className="card">
            <div className="code-block">
              <code>
                project/
                <br />
                ├── inet4.5/ # INET Framework
                <br />
                ├── simu5g-1.3.0/ # Simu5G module
                <br />
                │ ├── src/ # Source code
                <br />
                │ ├── simulations/ # Simulation scenarios
                <br />
                │ └── tests/ # Test cases
                <br />
                ├── docs/ # Documentation
                <br />
                │ ├── setup/ # Installation guides
                <br />
                │ ├── architecture/ # System architecture
                <br />
                │ └── api/ # API reference
                <br />
                ├── media/ # Images and media
                <br />
                ├── install.sh # Automated setup
                <br />
                └── README.md # Main documentation
              </code>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Running Simulations</h2>
          <p className="section-intro">
            Execute simulations and evaluate the framework.
          </p>

          <div className="card">
            <h3>Basic Simulation</h3>
            <div className="code-block">
              <code>
                cd simu5g-1.3.0/simulations
                <br />
                cd NR/xr
                <br />
                opp_run -m simu5g -c omnetpp.ini
              </code>
            </div>
          </div>

          <div className="card">
            <h3>Configuration Parameters</h3>
            <p>Key simulation parameters in omnetpp.ini:</p>
            <ul>
              <li>
                <code>numUsers</code> — Number of XR users (default: 1)
              </li>
              <li>
                <code>bandwidth</code> — Available bandwidth in Mbps (default:
                100)
              </li>
              <li>
                <code>fading</code> — Channel fading model (default: Rayleigh)
              </li>
              <li>
                <code>schedulingPolicy</code> — MAC scheduler algorithm (PF,
                DRR, MaxCQI)
              </li>
              <li>
                <code>semanticEnabled</code> — Enable semantic communication
                (true/false)
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Running Test Suites</h3>
            <div className="code-block">
              <code>
                # Run all tests
                <br />
                ./inet_run_all_tests
                <br />
                <br />
                # Run specific test suite
                <br />
                ./inet_run_unit_tests
                <br />
                <br />
                # Run with coverage analysis
                <br />
                ./inet_run_unit_tests --coverage
              </code>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Configuration & Customization</h2>
          <p className="section-intro">
            Adapt the framework to your research needs.
          </p>

          <div className="grid cols-2">
            <div className="card">
              <h3>OMNeT++ Configuration</h3>
              <p>Edit the network definition file (.ned) to:</p>
              <ul>
                <li>Define network topology</li>
                <li>Configure modules and parameters</li>
                <li>Set up gates and connections</li>
              </ul>
            </div>
            <div className="card">
              <h3>Simulation Parameters</h3>
              <p>Modify omnetpp.ini for:</p>
              <ul>
                <li>Scenario parameters</li>
                <li>Statistics collection</li>
                <li>Module configuration</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <h3>Python Integration</h3>
            <p>
              Use the included Python 3.12 environment for data analysis and ML
              model development:
            </p>
            <div className="code-block">
              <code>
                conda activate omnetpp
                <br />
                pip install numpy scipy scikit-learn tensorflow torch
                <br />
                python scripts/analyze_results.py
              </code>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Architecture Overview</h2>
          <p className="section-intro">
            Understanding the system architecture.
          </p>

          <div className="card">
            <h3>System Components</h3>
            <ol>
              <li>
                <strong>Network Layer:</strong> Simu5G simulates 5G/6G physical
                and MAC layers
              </li>
              <li>
                <strong>Semantic Processor:</strong> Analyzes XR content and
                generates importance maps
              </li>
              <li>
                <strong>Compression Engine:</strong> Applies adaptive
                compression based on semantic importance
              </li>
              <li>
                <strong>Scheduler:</strong> RL agent makes resource allocation
                decisions
              </li>
              <li>
                <strong>Analytics Module:</strong> Collects metrics and
                generates reports
              </li>
            </ol>
          </div>

          <div className="card">
            <h3>Data Flow</h3>
            <ol>
              <li>XR application generates frame data</li>
              <li>Semantic processor extracts importance map</li>
              <li>Compression engine applies adaptive coding</li>
              <li>
                Scheduler queries network state and makes allocation decision
              </li>
              <li>Frame transmitted according to schedule</li>
              <li>Metrics recorded for analysis</li>
            </ol>
          </div>
        </section>

        <section className="section">
          <h2>API Reference</h2>
          <p className="section-intro">
            Key classes and modules in the framework.
          </p>

          <div className="card">
            <h3>Core Modules</h3>
            <ul>
              <li>
                <strong>SemanticProcessor:</strong> Computes semantic importance
                maps from XR frames
              </li>
              <li>
                <strong>AdaptiveCompressor:</strong> Applies network-aware
                compression strategies
              </li>
              <li>
                <strong>RLScheduler:</strong> RL-based resource allocation agent
              </li>
              <li>
                <strong>NetworkMonitor:</strong> Tracks network state and
                performance metrics
              </li>
              <li>
                <strong>AnalyticsCollector:</strong> Gathers simulation results
                and statistics
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Configuration Classes</h3>
            <ul>
              <li>
                <strong>NetworkConfig:</strong> Network parameters and topology
              </li>
              <li>
                <strong>SemanticConfig:</strong> Semantic model parameters
              </li>
              <li>
                <strong>SchedulerConfig:</strong> RL agent hyperparameters
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Troubleshooting</h2>
          <p className="section-intro">Common issues and their solutions.</p>

          <div className="card">
            <h3>Installation Issues</h3>
            <ul>
              <li>
                <strong>Build failure:</strong> Ensure you have build-essential
                and development libraries installed
              </li>
              <li>
                <strong>Conda not found:</strong> Install Anaconda or Miniconda
                first
              </li>
              <li>
                <strong>Permission denied:</strong> Run install.sh with sudo or
                ensure proper file permissions
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Simulation Issues</h3>
            <ul>
              <li>
                <strong>Segmentation fault:</strong> Check system RAM and
                increase ulimit if needed
              </li>
              <li>
                <strong>Module not found:</strong> Verify INET and Simu5G were
                properly built
              </li>
              <li>
                <strong>Slow simulation:</strong> Try with fewer users or
                shorter simulation time
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Getting Help</h3>
            <p>For issues not covered here:</p>
            <ul>
              <li>
                Check the{" "}
                <a
                  href="https://github.com/satyam-kr03/NASCX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository
                </a>{" "}
                for existing issues
              </li>
              <li>Review OMNeT++ and Simu5G documentation</li>
              <li>Open an issue on GitHub with detailed error information</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Additional Resources</h2>
          <p className="section-intro">
            External documentation and references.
          </p>

          <div className="grid">
            <div className="feature-card">
              <div className="icon">📖</div>
              <h3>OMNeT++ Guide</h3>
              <p>
                <a
                  href="https://docs.omnetpp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Official OMNeT++ documentation
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🌐</div>
              <h3>INET Framework</h3>
              <p>
                <a
                  href="https://inet.omnetpp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  INET protocol suite documentation
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📡</div>
              <h3>Simu5G</h3>
              <p>
                <a
                  href="https://simu5g.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Simu5G 5G module documentation
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🐍</div>
              <h3>Python ML Stack</h3>
              <p>
                <a
                  href="https://pytorch.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PyTorch and TensorFlow documentation
                </a>
              </p>
            </div>
          </div>
        </section>

        <section
          className="section"
          style={{ textAlign: "center", paddingBottom: "80px" }}
        >
          <h2>Need More Help?</h2>
          <p className="section-intro" style={{ margin: "0 auto 32px" }}>
            Visit our GitHub repository for the latest code and issue
            discussions.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/satyam-kr03/NASCX"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
