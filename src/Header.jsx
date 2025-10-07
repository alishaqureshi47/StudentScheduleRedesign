export default function Header({ term = "Fall 2024", onTermChange = () => {}, name = "Alisha Qureshi", terms: propTerms = null }) {
  // Requested order: will use propTerms if provided
  const terms = propTerms || ["Fall 2024", "Spring 2025", "Winter 2025", "Summer 2025", "Fall 2025"];

  return (
    <header className="topbar">
      <div className="brand">
        <img
          src="/src/assets/dartmouth logo.jpg"
          alt="Dartmouth Logo"
          className="dartmouth-logo"
        />
        <span>Registration Information</span>
      </div>

      <div className="right-controls">
        <div className="term">
          <label className="term-label" htmlFor="term-select">Term:</label>
          <select id="term-select" value={term} onChange={(e) => onTermChange(e.target.value)} aria-label="Select term">
            {terms.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="user">{name}</div>
      </div>
    </header>
  );
}
