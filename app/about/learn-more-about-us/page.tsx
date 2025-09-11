import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn More About Us - Learning Resource Center | University of St. La Salle",
  description: "Learn about the history, mission, and vision of the Learning Resource Center at University of St. La Salle.",
};

export default function LearnMoreAboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">ABOUT US</h1>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Our History Section */}
        <section className="secondary-fullwidth" aria-labelledby="history-title" id="history">
          <div className="secondary-background">
            <div className="container">
              <h2 id="history-title" className="section-title">OUR HISTORY</h2>
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1952</h3>
                      <p>La Salle Bacolod opened. The founding Brothers established the first library to serve the academic community. (Present-day Lower Grades Library stands on the same site.)</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1953</h3>
                      <p>A room in the High School Department was designated as the shared High School and College Library.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1958</h3>
                      <p>The Boarding Department was converted into a Science Laboratory; the College Library was relocated to the ground floor, where it remained for 25 years.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1982-1983</h3>
                      <p>Under Brother President Rafael S. Donato FSC, a new library complex was built. Completed in April 1983, it opened with 13,000 volumes.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1995-1996</h3>
                      <p>The JRR Dizon Foundation Library Technology introduced Internet access. By June 1996, the College of Engineering, Computer Center, and several offices were online.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1997</h3>
                      <p>The library moved into a new three-story building and was renamed the Alfredo M. Montelibano Sr., AFSC Library in honor of the benefactor of La Salle.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1998</h3>
                      <p>Extension programs began, and with ICEN, the library enabled direct electronic access to student records from the Registrar&apos;s Office.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>1999</h3>
                      <p>Construction of the Graduate School, College of Law, and Medical Library Building began. The libraries were blessed on October 31, 1999.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>2001</h3>
                      <p>The College of Law Library was recognized by the Supreme Court of the Philippines as the Model Centennial Law Library.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>2002</h3>
                      <p>The Health Science Library (now Medical Library) was established on the 3rd floor of the Professional Schools Library Building, along with a Multimedia Room for the College of Medicine.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>2012</h3>
                      <p>The Lasalliana University Archives were inaugurated to preserve the university&apos;s historical records.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h3>2016</h3>
                      <p>The Audio-Visual Resource Center merged with the College Library, forming the Learning Resource Center (LRC). In the same year, the Lasalliana Archives were transferred to Museo De La Salle Bacolod.</p>
                    </div>
                  </div>
                  
                  <div className="timeline-item">
                    <div className="timeline-marker present"></div>
                    <div className="timeline-content">
                      <h3>PRESENT</h3>
                      <p>The Don Alfredo M. Montelibano Sr., AFSC Learning Resource Center continues its mission of excellence in serving the academic community and society.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="secondary-fullwidth" aria-labelledby="mission-title" id="mission">
          <div className="secondary-background mission-background">
            <div className="container">
              <h2 id="mission-title" className="section-title">MISSION</h2>
              <div className="secondary-text about-text">
                <p>
                  The HEU Learning Resource Center (LRC) is committed to providing access to high-quality educational resources, innovative services, and a better learning environment that supports the academic and research needs of the University community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="secondary-fullwidth" aria-labelledby="vision-title" id="vision">
          <div className="secondary-background">
            <div className="container">
              <h2 id="vision-title" className="section-title">VISION</h2>
              <div className="secondary-text about-text">
                <p>
                  The HEU Learning Resource Center (LRC) aspires to be a pro-active learning hub with excellent resources, state-of-the-art technology, and innovative services that empower students, faculty, and researchers to achieve academic excellence and contribute to knowledge creation and dissemination.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
