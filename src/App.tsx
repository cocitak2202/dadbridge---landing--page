import "./App.css";

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function App() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "dadbridge-waitlist",
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
        why: String(formData.get("why") || ""),
      }),
    })
      .then(() => {
        window.location.href = "/thank-you.html";
      })
      .catch((error) => {
        console.error("Form submission error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <main className="page">
      <section className="hero" id="top">
        <div className="bg-grid" />
        <div className="glow glow-a" />
        <div className="glow glow-b" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">KNGS Inner Circle presents</p>

            <h1>
              DadBridge
              <span>Build the bridge before the gap gets wider.</span>
            </h1>

            <p className="subhead">
              Weekly father-child missions for busy dads who want stronger
              connection without overcomplicating life.
            </p>

            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">
                Join the First 25 Founding Dads
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                How It Works
              </a>
            </div>

            <p className="guided-note">
              One mission. One moment. One stronger bond.
            </p>
          </div>

          <div className="hero-card">
            <p className="card-kicker">Built around one belief:</p>
            <h2>Small moments compound.</h2>

            <div className="mini-points">
              <span>10-minute missions</span>
              <span>Better questions</span>
              <span>Real memories</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section fit-section" id="how-it-works">
        <div className="container fit-grid">
          <div className="fit-copy">
            <p className="eyebrow">Your weekly path</p>
            <h2>Join. Do the mission. Share the win.</h2>
            <p className="simple-text">
              A simple weekly rhythm to help dads create more intentional
              moments with their kids.
            </p>
          </div>

          <div className="flow-card">
            <div className="flow-step">
              <span>01</span>
              <div>
                <h3>Join the group</h3>
                <p>Step into KNGS Inner Circle.</p>
              </div>
            </div>

            <div className="flow-step">
              <span>02</span>
              <div>
                <h3>Do the mission</h3>
                <p>Complete one simple DadBridge challenge.</p>
              </div>
            </div>

            <div className="flow-step">
              <span>03</span>
              <div>
                <h3>Share what happened</h3>
                <p>Post the win, lesson, or honest reality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sample-section">
        <div className="container sample-grid">
          <div>
            <p className="eyebrow">Sample challenge</p>
            <h2>The 10-Minute Walk</h2>
            <p className="simple-text">
              No phone. No lecture. Just walk and ask one better question.
            </p>
          </div>

          <div className="challenge-card">
            <p>Ask this:</p>
            <h3>“What do you wish I understood better about you?”</h3>
          </div>
        </div>
      </section>

      <section className="section kngs-section">
        <div className="container kngs-card">
          <p className="eyebrow">Where this lives</p>
          <h2>KNGS Inner Circle</h2>

          <p className="kngs-text">
            A private community for dads, coaches, and mentors raising stronger
            kids through leadership, faith, youth sports, and connection.
          </p>

          <a
            className="btn btn-secondary skool-button"
            href="https://www.skool.com/kngs-inner-circle-3229"
            target="_blank"
            rel="noreferrer"
          >
            Visit KNGS Inner Circle
          </a>
        </div>
      </section>

      <section className="section final-section" id="waitlist">
        <div className="container final-card">
          <p className="eyebrow">First 25 Founding Dads</p>
          <h2>Help shape the first version.</h2>
          <p>
            Join the first group and get your starting DadBridge mission.
          </p>

          <form
            name="dadbridge-waitlist"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="waitlist-form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="dadbridge-waitlist" />
            <input type="hidden" name="bot-field" />

            <input type="text" name="name" placeholder="Your name" required />

            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
            />

            <input type="tel" name="phone" placeholder="Phone number" />

            <textarea
              name="why"
              placeholder="What made DadBridge interesting to you?"
              rows={4}
            />

            <button type="submit" className="btn btn-primary form-button">
              Join the First 25 Founding Dads
            </button>
          </form>

          <p className="bottom-note">
            No perfect-dad pressure. Just small moments that compound.
          </p>
        </div>
      </section>
    </main>
  );
}
