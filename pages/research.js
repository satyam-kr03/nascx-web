import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Research() {
  return (
    <>
      <Head>
        <title>Research — Semantic Communication for XR</title>
        <meta
          name="description"
          content="Research on semantic communication strategies, compression algorithms, and RL-based scheduling for XR in 6G networks."
        />
      </Head>

      <Header />

      <main className="site">
        <section
          className="hero"
          style={{ paddingBottom: "40px", marginBottom: "40px" }}
        >
          <h1>Research Framework</h1>
          <p className="tagline">Advancing Semantic Communication for XR</p>
          <p className="subtitle">
            Explore our research methodology, algorithms, and validation
            approach for network-aware semantic communication.
          </p>
        </section>

        <section className="section">
          <h2>Research Methodology</h2>
          <p className="section-intro">
            Our research employs a systematic approach combining machine
            learning, network simulation, and reinforcement learning.
          </p>

          <div className="card">
            <h3>Phase 1: Semantic Relevance Estimation</h3>
            <p>
              The first phase focuses on developing machine learning models that
              can understand and prioritize content based on human perception
              and application requirements.
            </p>
            <h4
              style={{
                fontSize: "16px",
                marginTop: "16px",
                color: "var(--text-primary)",
                fontWeight: "600",
              }}
            >
              Key Components:
            </h4>
            <ul>
              <li>
                <strong>Gaze Tracking Integration:</strong> Eye-tracking data to
                identify regions of interest in XR scenes
              </li>
              <li>
                <strong>Scene Dynamics Analysis:</strong> Movement and change
                detection to prioritize dynamic regions
              </li>
              <li>
                <strong>Application Context:</strong> Domain-specific semantics
                (AR annotations, VR objects, etc.)
              </li>
              <li>
                <strong>ML Models:</strong> CNN, attention mechanisms, and
                transformer-based architectures
              </li>
            </ul>
            <p
              style={{
                marginTop: "16px",
                color: "var(--text-muted)",
                fontSize: "14px",
              }}
            >
              <strong>Output:</strong> Semantic importance maps indicating
              priority levels for different frame regions
            </p>
          </div>

          <div className="card">
            <h3>Phase 2: Adaptive Network-Aware Compression</h3>
            <p>
              The second phase develops compression algorithms that dynamically
              adapt to network conditions while preserving perceptually
              important content.
            </p>
            <h4
              style={{
                fontSize: "16px",
                marginTop: "16px",
                color: "var(--text-primary)",
                fontWeight: "600",
              }}
            >
              Compression Strategies:
            </h4>
            <ul>
              <li>
                <strong>Principal Component Analysis (PCA):</strong>{" "}
                Dimensionality reduction guided by semantic maps
              </li>
              <li>
                <strong>Autoencoder Networks:</strong> Learned compression with
                semantic-aware reconstruction
              </li>
              <li>
                <strong>Adaptive Bit Allocation:</strong> More bits for
                high-importance regions
              </li>
              <li>
                <strong>Network-Aware Tuning:</strong> Real-time adaptation to
                available bandwidth and latency
              </li>
            </ul>
            <p
              style={{
                marginTop: "16px",
                color: "var(--text-muted)",
                fontSize: "14px",
              }}
            >
              <strong>Output:</strong> Compressed XR frames maintaining QoE
              while reducing bandwidth by 40-70%
            </p>
          </div>

          <div className="card">
            <h3>Phase 3: RL-Based Joint Scheduling</h3>
            <p>
              The third phase implements intelligent resource scheduling using
              deep reinforcement learning to make optimal allocation decisions.
            </p>
            <h4
              style={{
                fontSize: "16px",
                marginTop: "16px",
                color: "var(--text-primary)",
                fontWeight: "600",
              }}
            >
              Scheduling Framework:
            </h4>
            <ul>
              <li>
                <strong>State Space:</strong> Network conditions, queue status,
                semantic maps, user context
              </li>
              <li>
                <strong>Action Space:</strong> Resource allocation quantities
                and timing decisions
              </li>
              <li>
                <strong>Reward Function:</strong> Latency minimization,
                reliability maximization, QoE preservation
              </li>
              <li>
                <strong>RL Algorithms:</strong> DQN, PPO, and actor-critic
                methods
              </li>
            </ul>
            <p
              style={{
                marginTop: "16px",
                color: "var(--text-muted)",
                fontSize: "14px",
              }}
            >
              <strong>Output:</strong> Scheduling decisions supporting 3-5
              concurrent XR users with sub-5ms latency
            </p>
          </div>

          <div className="card">
            <h3>Phase 4: Comprehensive Validation</h3>
            <p>
              The final phase validates the entire framework using Simu5G with
              rigorous assessment of key performance metrics.
            </p>
            <h4
              style={{
                fontSize: "16px",
                marginTop: "16px",
                color: "var(--text-primary)",
                fontWeight: "600",
              }}
            >
              Evaluation Metrics:
            </h4>
            <ul>
              <li>
                <strong>Latency:</strong> End-to-end frame delivery latency (ms)
              </li>
              <li>
                <strong>Reliability:</strong> Packet delivery ratio and frame
                drop rate (%)
              </li>
              <li>
                <strong>Quality of Experience:</strong> PSNR, SSIM, and user
                perception studies
              </li>
              <li>
                <strong>Scalability:</strong> Performance with 1, 3, 5, 10
                concurrent users
              </li>
              <li>
                <strong>Efficiency:</strong> Bandwidth savings and computation
                overhead
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Technical Approach</h2>
          <p className="section-intro">
            Our approach combines domain expertise with cutting-edge machine
            learning and networking techniques.
          </p>

          <div className="grid cols-4">
            <div className="feature-card">
              <div className="icon">🧬</div>
              <h3>Machine Learning</h3>
              <p>
                CNNs, autoencoders, transformers, and attention mechanisms for
                semantic understanding and compression.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🎮</div>
              <h3>Reinforcement Learning</h3>
              <p>
                Deep Q-Networks, PPO, and actor-critic methods for optimal
                scheduling decisions in dynamic environments.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Network Simulation</h3>
              <p>
                OMNeT++ and Simu5G for realistic 5G/6G network modeling and
                performance evaluation.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📈</div>
              <h3>Performance Analysis</h3>
              <p>
                Statistical analysis, benchmarking, and multi-metric
                optimization for comprehensive evaluation.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Expected Outcomes</h2>
          <p className="section-intro">
            Our research aims to deliver significant improvements in XR support
            capabilities for 5G/6G networks.
          </p>

          <div className="grid cols-2">
            <div className="card">
              <h3>Performance Improvements</h3>
              <ul>
                <li>40-70% bandwidth reduction through semantic compression</li>
                <li>Sub-5ms end-to-end latency for XR frames</li>
                <li>
                  Support for 3-5 concurrent XR users (vs. &lt;1 currently)
                </li>
                <li>99%+ reliability for critical frame regions</li>
              </ul>
            </div>
            <div className="card">
              <h3>Research Contributions</h3>
              <ul>
                <li>Novel semantic communication framework for XR</li>
                <li>Adaptive compression algorithms guided by perception</li>
                <li>RL-based scheduling for semantic content</li>
                <li>Comprehensive evaluation methodology for 6G XR</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Publications & Future Work</h2>
          <p className="section-intro">
            Sharing our findings with the research community and planning next
            steps.
          </p>

          <div className="card">
            <h3>Current Publications</h3>
            <p>
              This is a research framework project. Papers and results will be
              published through academic conferences and journals focusing on
              5G/6G networks, semantic communications, and XR technologies.
            </p>
          </div>

          <div className="card">
            <h3>Future Research Directions</h3>
            <ul>
              <li>Integration with real 5G testbeds for validation</li>
              <li>Extension to multi-access edge computing (MEC) scenarios</li>
              <li>
                Exploration of federated learning for distributed semantic
                models
              </li>
              <li>Application to other latency-critical services beyond XR</li>
              <li>Hardware acceleration and edge device optimization</li>
            </ul>
          </div>
        </section>

        <section
          className="section"
          style={{ textAlign: "center", paddingBottom: "80px" }}
        >
          <h2>Dive Deeper</h2>
          <p className="section-intro" style={{ margin: "0 auto 32px" }}>
            Explore our documentation and technical details.
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
