import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Team() {
  const team = [
    {
      name: "Lead Researcher",
      role: "Project Principal Investigator",
      description:
        "Directing research on semantic communication frameworks for 6G networks",
    },
    {
      name: "Network Researcher",
      role: "Network Systems Specialist",
      description:
        "Developing 5G/6G simulation scenarios and network optimization strategies",
    },
    {
      name: "ML Engineer",
      role: "Machine Learning Specialist",
      description:
        "Building semantic estimation models and compression algorithms",
    },
    {
      name: "RL Developer",
      role: "Reinforcement Learning Engineer",
      description: "Implementing RL-based schedulers and optimization agents",
    },
  ];

  return (
    <>
      <Head>
        <title>Team — Semantic Communication for XR</title>
        <meta
          name="description"
          content="Meet the researchers and engineers working on semantic communication for XR in 6G networks."
        />
      </Head>

      <Header />

      <main className="site">
        <section
          className="hero"
          style={{ paddingBottom: "40px", marginBottom: "40px" }}
        >
          <h1>Our Team</h1>
          <p className="tagline">Advancing Semantic Communication for 6G</p>
          <p className="subtitle">
            A multidisciplinary team of researchers combining expertise in
            networks, machine learning, and systems optimization.
          </p>
        </section>

        <section className="section">
          <h2>Research Team</h2>
          <p className="section-intro">
            Our team brings together expertise across network engineering,
            machine learning, and telecommunications research.
          </p>

          <div className="grid">
            {team.map((member, idx) => (
              <div key={idx} className="card">
                <h3>{member.name}</h3>
                <p
                  style={{
                    color: "var(--accent-primary)",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  {member.role}
                </p>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Collaboration & Partnerships</h2>
          <p className="section-intro">
            We work with leading research institutions and industry partners in
            telecommunications.
          </p>

          <div className="card">
            <h3>Research Areas of Collaboration</h3>
            <ul>
              <li>5G/6G network architecture and standards</li>
              <li>Extended Reality (VR, AR, MR) applications</li>
              <li>Machine learning for communication systems</li>
              <li>Reinforcement learning and network optimization</li>
              <li>QoE metrics and user experience research</li>
            </ul>
          </div>

          <div className="card">
            <h3>Key Technologies & Standards</h3>
            <ul>
              <li>3GPP 5G NR specifications</li>
              <li>Open RAN initiatives</li>
              <li>Semantic communication concepts</li>
              <li>Network slicing for XR applications</li>
              <li>AI/ML for network management</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Research Expertise</h2>
          <p className="section-intro">
            The team's collective expertise spans multiple critical research
            areas.
          </p>

          <div className="grid cols-3">
            <div className="feature-card">
              <div className="icon">📡</div>
              <h3>5G/6G Networks</h3>
              <p>
                Network architecture, MAC scheduling, QoS provisioning, and
                cellular network optimization
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🧠</div>
              <h3>Deep Learning</h3>
              <p>
                CNNs, autoencoders, transformers, and attention mechanisms for
                content analysis
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🤖</div>
              <h3>Reinforcement Learning</h3>
              <p>
                Q-learning, policy gradient methods, and multi-agent RL systems
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🎮</div>
              <h3>XR Technologies</h3>
              <p>
                Virtual Reality, Augmented Reality, Mixed Reality, and immersive
                computing
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Performance Analysis</h3>
              <p>
                Network simulation, benchmarking, statistics, and empirical
                evaluation
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🔧</div>
              <h3>System Implementation</h3>
              <p>OMNeT++, INET, Simu5G, and full-stack network simulation</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Vision & Mission</h2>
          <p className="section-intro">
            Our commitment to advancing wireless communications for immersive
            applications.
          </p>

          <div className="grid cols-2">
            <div className="card">
              <h3>🎯 Mission</h3>
              <p>
                Develop and validate innovative semantic communication
                strategies that enable seamless Extended Reality experiences
                over 5G/6G networks through intelligent resource management and
                perceptually-aware content delivery.
              </p>
            </div>
            <div className="card">
              <h3>🌟 Vision</h3>
              <p>
                A future where XR applications are universally accessible with
                guaranteed ultra-low latency, high reliability, and exceptional
                quality of experience, powered by intelligent semantic
                communication in next-generation wireless networks.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Core Values</h2>
          <p className="section-intro">
            The principles that guide our research and development.
          </p>

          <div className="grid cols-3">
            <div className="feature-card">
              <div className="icon">🔬</div>
              <h3>Scientific Rigor</h3>
              <p>
                Rigorous methodology, comprehensive evaluation, and reproducible
                research practices
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                Open science, knowledge sharing, and partnerships with the
                research community
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">💡</div>
              <h3>Innovation</h3>
              <p>
                Exploring novel approaches to solve challenging problems in
                wireless networks
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Contributing to the Project</h2>
          <p className="section-intro">
            Interested in contributing to our research? We welcome
            collaborations and contributions.
          </p>

          <div className="card">
            <h3>Ways to Contribute</h3>
            <ul>
              <li>
                <strong>Code contributions:</strong> Submit pull requests to
                improve the framework
              </li>
              <li>
                <strong>Research collaborations:</strong> Partner with us on
                related research
              </li>
              <li>
                <strong>Feedback & suggestions:</strong> Report issues and
                suggest improvements
              </li>
              <li>
                <strong>Testing & validation:</strong> Help validate the
                framework in different scenarios
              </li>
              <li>
                <strong>Documentation:</strong> Improve guides and API
                documentation
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>Getting Started as a Contributor</h3>
            <ol>
              <li>
                Fork the{" "}
                <a
                  href="https://github.com/satyam-kr03/NASCX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub repository
                </a>
              </li>
              <li>Create a branch for your contribution</li>
              <li>Make your changes and test thoroughly</li>
              <li>Submit a pull request with clear description</li>
              <li>Engage in code review and discussion</li>
            </ol>
          </div>
        </section>

        <section
          className="section"
          style={{ textAlign: "center", paddingBottom: "80px" }}
        >
          <h2>Join Our Community</h2>
          <p className="section-intro" style={{ margin: "0 auto 32px" }}>
            Stay connected with the research community.
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/satyam-kr03/NASCX"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
            <a
              href="https://github.com/satyam-kr03/NASCX/issues"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Ideas
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
