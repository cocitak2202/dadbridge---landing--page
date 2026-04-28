import type { FormEvent } from "react";
import "./App.css";

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function App() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
      {/* HERO */}
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
              Daily 5–10 minute father-child missions for busy dads who want
              stronger connection without adding more pressure to the calendar.
            </p>
            <div className="hero-actions">
              <a href="#waitlist" className="btn btn-primary">
                Claim Your Founding Dad Spot
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                How It Works
              </a>
            </div>
            <p className="guided-note">
              🔥 First 25 spots: Free for life. Next 25: $9/month. After that: $19/month.
            </p>
          </div>
          <div className="hero-card">
            <p className="card-kicker">What dads get:</p>
            <h2>Less guessing. More connection.</h2>
            <div className="mini-points">
              <span>A daily mission to follow</span>
              <span>A question that opens conversation</span>
              <span>A shared moment to build on</span>
              <span>The Fuel the King nutrition playbook</span>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section fit-section" id="how-it-works">
        <div className="container fit-grid">
          <div className="fit-copy">
            <p className="eyebrow">How it works</p>
            <h2>Daily missions. Weekly wins. Stronger bonds.</h2>
            <p className="simple-text">
              DadBridge gives busy dads one small connection mission each day,
              then a simple weekly check-in to share what worked.
            </p>
          </div>
          <div className="flow-card">
            <div className="flow-step">
              <span>01</span>
              <div>
                <h3>Join the circle</h3>
                <p>Step into KNGS Inner Circle with the first Founding Dads. Get instant access to everything inside.</p>
                <small>👑 Start with the community</small>
              </div>
            </div>
            <div className="flow-step">
              <span>02</span>
              <div>
                <h3>Do the daily mission</h3>
                <p>Complete one 5–10 minute DadBridge challenge with your child. Small enough to actually do.</p>
                <small>⏱ 5–10 minutes a day</small>
              </div>
            </div>
            <div className="flow-step">
              <span>03</span>
              <div>
                <h3>Share your weekly win</h3>
                <p>Post what changed, what surprised you, or what your kid said. Build momentum with other dads.</p>
                <small>🤝 Community accountability</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAMPLE MISSION */}
      <section className="section sample-section">
        <div className="container sample-grid">
          <div>
            <p className="eyebrow">Sample daily mission</p>
            <h2>The 10-Minute Walk</h2>
            <p className="simple-text">
              Take a short walk with your child. No phone. No lecture. Just ask
              one better question.
            </p>
          </div>
          <div className="challenge-card">
            <p>Ask this:</p>
            <h3>"What do you wish I understood better about you?"</h3>
          </div>
        </div>
      </section>

      {/* KNGS SECTION — strengthened */}
      <section className="section kngs-section">
        <div className="container kngs-card">
          <p className="eyebrow">Where this lives</p>
          <h2>KNGS Inner Circle</h2>
          <p className="kngs-text">
            A private community built for dads who coach, compete, and lead at home.
            Daily missions. Weekly father-child challenges. Youth athlete performance tips.
            Dad leadership lessons. Monthly live workshops. Everything you need to show up
            better for your kid — in one place.
          </p>
          <div className="kngs-pillars">
            <div className="pillar">
              <span>⚡</span>
              <p>Daily DadBridge missions</p>
            </div>
            <div className="pillar">
              <span>🏆</span>
              <p>Weekly father-child challenges</p>
            </div>
            <div className="pillar">
              <span>🏃</span>
              <p>Youth athlete performance tips</p>
            </div>
            <div className="pillar">
              <span>🍽️</span>
              <p>Fuel the King nutrition guidance</p>
            </div>
            <div className="pillar">
              <span>🛡️</span>
              <p>Dad leadership lessons</p>
            </div>
            <div className="pillar">
              <span>📅</span>
              <p>Monthly live workshops</p>
            </div>
          </div>
          <a
            className="btn btn-secondary skool-button"
            href="https://www.skool.com/kngs-inner-circle-3229"
            target="_blank"
            rel="noreferrer"
          >
            Visit KNGS Inner Circle →
          </a>
        </div>
      </section>

      {/* EBOOK BONUS */}
      <section className="section ebook-section">
        <div className="container ebook-card">
          <p className="eyebrow">Founding Dad Bonus</p>
          <div className="ebook-inner">
            <div className="ebook-copy">
              <h2>Fuel the King:<br />Stronger Faster Harder</h2>
              <p>
                Join today and get instant access to the complete youth athlete nutrition
                playbook by Kyle Cocita — free with membership.
              </p>
              <ul className="ebook-list">
                <li>✅ Meal plans and grocery lists for busy families</li>
                <li>✅ Pre-game and post-game fueling strategies</li>
                <li>✅ Simple athlete breakfasts and school lunches</li>
                <li>✅ Protein, hydration, and recovery basics for kids</li>
                <li>✅ What to eat before a game — done simple</li>
              </ul>
              <p className="ebook-note">
                Included free for all members. No extra cost.
              </p>
            </div>
            <div className="ebook-cover">
              <div className="ebook-mockup">
                <p className="ebook-title-top">FUEL THE KING</p>
                <p className="ebook-strong"><span className="c-teal">STRONG</span>ER</p>
                <p className="ebook-fast"><span className="c-yellow">FAST</span>ER</p>
                <p className="ebook-hard"><span className="c-green">HARD</span>ER</p>
                <p className="ebook-sub">The Athlete's guide to leveling up.</p>
                <p className="ebook-author">BY KYLE COCITA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing-section">
        <div className="container pricing-card">
          <p className="eyebrow">Membership pricing</p>
          <h2>Get in early. Lock your rate.</h2>
          <p className="simple-text">
            The price goes up as the community grows. Join now and lock in the lowest rate we'll ever offer.
          </p>
          <div className="pricing-ladder">
            <div className="pricing-tier tier-active">
              <p className="tier-label">👑 Founding Dads</p>
              <p className="tier-spots">Spots 1–25</p>
              <p className="tier-price">Free for life</p>
              <p className="tier-note">Manually invited. Helping build the foundation.</p>
            </div>
            <div className="pricing-tier">
              <p className="tier-label">⚡ Beta Founding Members</p>
              <p className="tier-spots">Spots 26–50</p>
              <p className="tier-price">$9/month</p>
              <p className="tier-note">Lowest paid price we'll ever offer.</p>
            </div>
            <div className="pricing-tier">
              <p className="tier-label">🛡️ Inner Circle Members</p>
              <p className="tier-spots">Spots 51–100</p>
              <p className="tier-price">$19/month</p>
              <p className="tier-note">Standard membership rate.</p>
            </div>
            <div className="pricing-tier tier-future">
              <p className="tier-label">Full Membership</p>
              <p className="tier-spots">After 100 members</p>
              <p className="tier-price">$29/month</p>
              <p className="tier-note">Full rate once community is established.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST / JOIN FORM */}
      <section className="section final-section" id="waitlist">
        <div className="container final-card">
          <p className="eyebrow">First 25 Founding Dads</p>
          <h2>Help build the first version.</h2>
          <p>
            Join the first group of dads, get your daily missions, and help shape
            what KNGS Inner Circle becomes. Founding Dads get lifetime access free
            and the Fuel the King nutrition playbook on day one.
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
              placeholder="What brought you here?"
              rows={4}
            />
            <button type="submit" className="btn btn-primary form-button">
              Claim My Founding Dad Spot
            </button>
          </form>
          <p className="bottom-note">
            No perfect-dad pressure. Just one intentional step at a time.
          </p>
          <p className="pricing-reminder">
            First 25 dads: Free for life &nbsp;·&nbsp; Next 25: $9/month &nbsp;·&nbsp; After that: $19/month
          </p>
        </div>
      </section>
    </main>
  );
}
