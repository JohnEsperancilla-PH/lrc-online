export default function Calendar() {
  return (
    <section className="secondary-fullwidth" aria-labelledby="calendar-title">
      <div className="secondary-background">
        <div className="container">
          <h2 id="calendar-title" className="section-title">LIBRARY CALENDAR & RESERVATION FORM</h2>
          <div
            className="secondary-grid calendar-flex-responsive"
            style={{alignItems: 'center', gap: 32}}
          >
            <div
              className="secondary-text secondary-text-right"
              style={{width: '100%', maxWidth: 600, margin: '0 auto', flex: 1}}
            >
              <p>
                Check library schedules, including operating hours and events, and conveniently reserve facilities, equipment, or study spaces. Designed to help you plan ahead and make the most of the library's resources for your academic and research needs.
              </p>
              <a className="btn small" href="https://docs.google.com/forms/d/e/1FAIpQLSckaJPQkGKNptZJ584FywgXcvY-JLIUTNeeLU0kehmM-KLmLw/viewform?usp=sf_link" aria-label="Reserve here">RESERVE HERE</a>
            </div>
            <div
              style={{
                width: '100%',
                maxWidth: 600,
                minWidth: 0,
                display: 'flex',
                justifyContent: 'center',
                flex: 1
              }}
            >
              <div
                className="secondary-image calendar-slides-responsive"
                style={{
                  width: '100%',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  padding: 0,
                  border: 'none',
                  margin: '0 auto',
                  maxWidth: '600px',
                  minWidth: 0,
                  display: 'block'
                }}
              >
                <div style={{position: 'relative', width: '100%', paddingTop: '56.25%'}}>
                  <iframe
                    src="https://docs.google.com/presentation/d/19q_9yk62pxvK3OT6jJ88FnGfLlVNKKIQpRewdCOSMMU/embed?start=false&loop=false&delayms=3000"
                    title="Library Calendar Google Slides"
                    allowFullScreen
                    style={{
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'white',
                      minHeight: 180,
                      maxHeight: 400
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
            <style>{`
              @media (max-width: 900px) {
                .calendar-flex-responsive {
                  flex-direction: column !important;
                }
              }
              @media (max-width: 640px) {
                .calendar-slides-responsive {
                  max-width: 100vw !important;
                  min-width: 0 !important;
                  border-radius: 0 !important;
                  box-shadow: none !important;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
