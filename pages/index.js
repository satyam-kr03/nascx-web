import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Network-Aware Semantic Communication for XR in 6G Networks
        </title>
        <meta
          name="description"
          content="A research framework combining semantic relevance estimation, adaptive compression, and RL-based scheduling for Extended Reality in 5G/6G networks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="site">
        {/* Hero Section */}
        <section className="hero">
          <h1>Network-Aware Semantic Communication for XR in 6G Networks</h1>
          <p className="tagline">
            School of Computing and Electrical Engineering, IIT Mandi
          </p>
          <p className="subtitle">
            A research framework for developing and evaluating network-aware
            semantic communication strategies for Extended Reality (XR)
            applications in 5G/6G networks through intelligent resource
            allocation and adaptive compression.
          </p>
          <div className="hero-buttons">
            <Link href="/research" className="btn-primary">
              View Research
            </Link>
            <a
              href="https://github.com/satyam-kr03/NASCX"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </section>

        {/* Key Challenges Section */}
        <section className="section">
          <h2>The Challenge</h2>
          <p className="section-intro">
            Extended Reality (VR, AR, MR) applications impose unprecedented
            demands on 5G/6G networks with ultra-stringent QoS requirements that
            current approaches struggle to meet.
          </p>

          <div className="card">
            <h3>XR QoS Requirements</h3>
            <table className="requirements-table">
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Target</th>
                  <th>Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>End-to-End Latency</td>
                  <td>≤5 ms</td>
                  <td>Prevents motion sickness and ensures immersion</td>
                </tr>
                <tr>
                  <td>Reliability</td>
                  <td>≥99%</td>
                  <td>Maintains consistent user experience</td>
                </tr>
                <tr>
                  <td>Data Rate (per user)</td>
                  <td>20–100 Mbps</td>
                  <td>High-fidelity visual content delivery</td>
                </tr>
                <tr>
                  <td>Frame Rate</td>
                  <td>60+ fps</td>
                  <td>Smooth, responsive interactions</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3>Current Limitations</h3>
            <p>
              Existing 5G MAC schedulers (Proportional Fair, Deficit Round
              Robin, Max-CQI) struggle to support even a single XR user while
              maintaining these requirements. The fundamental issue is that
              current schedulers:
            </p>
            <ul>
              <li>
                Do not consider the semantic importance of data being
                transmitted
              </li>
              <li>
                Cannot adapt to application-specific requirements and network
                dynamics
              </li>
              <li>
                Lack intelligent mechanisms for prioritizing perceptually
                critical content
              </li>
              <li>Scale poorly with increasing numbers of concurrent users</li>
            </ul>
          </div>
        </section>

        {/* Solution Overview */}
        <section className="section">
          <h2>Our Solution</h2>
          <p className="section-intro">
            This project addresses these challenges through an innovative
            semantic communication framework that intelligently prioritizes and
            compresses content based on perceptual importance and network state.
          </p>

          <div className="grid cols-3">
            <div className="feature-card">
              <div className="icon">🧠</div>
              <h3>Semantic Relevance Estimation</h3>
              <p>
                ML models identify perceptually important frame regions using
                gaze tracking, scene dynamics, and application context.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🔄</div>
              <h3>Adaptive Network-Aware Compression</h3>
              <p>
                PCA and autoencoder-based compression guided by network
                conditions and semantic importance to minimize bandwidth.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🤖</div>
              <h3>RL-Based Joint Scheduling</h3>
              <p>
                Deep reinforcement learning allocates resources optimally based
                on semantic importance and real-time network state.
              </p>
            </div>
          </div>

          <div className="card" style={{ marginTop: "32px" }}>
            <h3>Architecture Overview</h3>
            <p>
              The framework integrates three core components that work together
              to deliver XR content efficiently:
            </p>
            <ol>
              <li>
                <strong>Perception Layer:</strong> Analyzes XR content to
                extract semantic importance metrics
              </li>
              <li>
                <strong>Compression Layer:</strong> Adapts compression ratios
                based on network conditions and semantic maps
              </li>
              <li>
                <strong>Scheduling Layer:</strong> Makes intelligent resource
                allocation decisions using RL agents
              </li>
            </ol>
          </div>
        </section>

        {/* Research Objectives */}
        <section className="section">
          <h2>Research Objectives</h2>
          <p className="section-intro">
            Our research program focuses on four primary objectives to advance
            network-aware semantic communication for XR.
          </p>

          <div className="grid cols-4">
            <div className="card">
              <h3>1. Semantic Model Development</h3>
              <p>
                Design and train ML models that accurately estimate semantic
                relevance of XR frame regions using multiple input modalities
                including gaze tracking, scene dynamics, and application
                context.
              </p>
            </div>
            <div className="card">
              <h3>2. Adaptive Compression</h3>
              <p>
                Develop compression strategies that dynamically adapt to network
                conditions while preserving perceptual fidelity through guided
                PCA and autoencoder approaches.
              </p>
            </div>
            <div className="card">
              <h3>3. RL-Based Scheduling</h3>
              <p>
                Create intelligent schedulers using deep reinforcement learning
                to optimally allocate network resources based on semantic
                importance and real-time network state.
              </p>
            </div>
            <div className="card">
              <h3>4. Comprehensive Validation</h3>
              <p>
                Validate the framework using Simu5G with rigorous assessment of
                latency, reliability, QoE, and multi-user scalability across
                diverse XR scenarios.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section">
          <h2>Technology Stack</h2>
          <p className="section-intro">
            The project leverages industry-standard simulation and network
            frameworks for research validation.
          </p>

          <div className="grid cols-2">
            <div className="feature-card">
              <div className="icon">⚙️</div>
              <h3>OMNeT++ 6.2.0</h3>
              <p>
                Discrete event simulator providing the foundation for network
                simulations.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🌐</div>
              <h3>INET Framework 4.5</h3>
              <p>
                Comprehensive network protocol library for 5G/6G simulations.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📡</div>
              <h3>Simu5G 1.3.0</h3>
              <p>Advanced 5G/6G module for modeling cellular networks.</p>
            </div>
            <div className="feature-card">
              <div className="icon">🐍</div>
              <h3>Python 3.12</h3>
              <p>ML model development and data analysis infrastructure.</p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="section">
          <h2>Project Statistics</h2>
          <div className="grid cols-3">
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Simulation Framework</h3>
              <p>
                Complete 5G/6G network stack integrated with semantic
                communication models
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🔬</div>
              <h3>Research Focus</h3>
              <p>
                XR optimization, semantic communication, resource scheduling
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Validation Scope</h3>
              <p>Latency, reliability, QoE metrics, multi-user scenarios</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="section"
          style={{ textAlign: "center", paddingBottom: "80px" }}
        >
          <h2>Get Started</h2>
          <p className="section-intro" style={{ margin: "0 auto 32px" }}>
            Explore our research framework and contribute to advancing semantic
            communication for 6G networks.
          </p>
          <div className="hero-buttons">
            <Link href="/research" className="btn-primary">
              View Research Details
            </Link>
            <Link href="/documentation" className="btn-secondary">
              Read Documentation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
