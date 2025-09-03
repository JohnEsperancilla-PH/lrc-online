export default function Calendar() {
  return (
    <section className="secondary-fullwidth" aria-labelledby="calendar-title">
      <div className="secondary-background">
        <div className="container">
          <h2 id="calendar-title" className="section-title">LIBRARY CALENDAR & RESERVATION FORM</h2>
          <div className="secondary-grid">
            <div className="secondary-text secondary-text-right">
              <p>
                Check library schedules, including operating hours and events, and conveniently reserve facilities, equipment, or study spaces. Designed to help you plan ahead and make the most of the library's resources for your academic and research needs.
              </p>
              <a className="btn small" href="#" aria-label="Reserve here">RESERVE HERE</a>
            </div>
            <img
              src="/images/Online-Library-Resources.png"
              alt="Calendar and reservation interface screenshot"
              className="secondary-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
