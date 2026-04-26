import "./App.css";

export default function App() {
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
              Simple weekly father-child challenges for busy dads who want
              stronger connection, better conversations, and real memories.
            </p>

            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">
                Join the First 25 Founding Dads
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                How It Works
              </a>
            </div>

            <p className="limited-note">
              Opening first to 25 dads who want to help shape the first version.
            </p>
          </div>

          <div className="hero-card">
            <p className="card-kicker">This is for the dad who says:</p>
            <h2>“I’m here… but I want to be more present.”</h2>

            <div className="mini-points">
              <span>10-minute missions</span>
              <span>Better questions</span>
              <span>More intentional moments</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Small moments. Big impact.</h2>
          </div>

          <div className="steps">
            <div className="step">
              <span>01</span>
              <h3>Get the mission</h3>
              <p>One simple weekly challenge.</p>
            </div>

            <div className="step">
              <span>02</span>
              <h3>Create the moment</h3>
              <p>Do it with your child in real life.</p>
            </div>

            <div className="step">
              <span>03</span>
              <h3>Build the bridge</h3>
              <p>Turn small reps into trust.</p>
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
              No phone. No fixing. No lecture. Just walk and ask one better
              question.
            </p>
          </div>

          <div className="challenge-card">
            <p>Ask this:</p>
            <h3>“What’s something you wish I understood better about you?”</h3>
          </div>
        </div>
      </section>

      <section className="section kngs-section">
        <div className="container split">
          <div>
            <p className="eyebrow">Where this lives</p>
            <h2>KNGS Inner Circle</h2>
          </div>

          <div>
            <p className="simple-text">
              A private community for dads, coaches, and mentors building
              stronger kids through leadership, connection, confidence,
              discipline, faith, and youth sports.
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
        </div>
      </section>

      <section className="section final-section" id="waitlist">
        <div className="container final-card">
          <p className="eyebrow">First 25 Founding Dads</p>
          <h2>Help shape the first version.</h2>
          <p>
            Join the waitlist and get early access to the first DadBridge
            challenge and KNGS Inner Circle launch details.
          </p>

          <form
            name="dadbridge-waitlist"
            method="POST"
            data-netlify="true"
            action="/thank-you.html"
            className="waitlist-form"
          >
            <input
              type="hidden"
              name="form-name"
              value="dadbridge-waitlist"
            />

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
            This is not about being a perfect dad. It’s about building small
            moments that compound.
          </p>
        </div>
      </section>
    </main>
  );
}