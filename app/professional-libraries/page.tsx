import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Libraries - Learning Resource Center | University of St. La Salle",
  description: "Explore our specialized professional libraries including Law, Medicine, and Graduate School collections at the University of St. La Salle.",
};

export default function ProfessionalLibrariesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">PROFESSIONAL LIBRARIES</h1>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="secondary-fullwidth" aria-labelledby="professional-intro-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="professional-intro-title" className="section-title">SPECIALIZED PROFESSIONAL COLLECTIONS</h2>
              <div className="secondary-text about-text">
                <p>
                  The University of St. La Salle houses specialized professional libraries dedicated to supporting the academic and research needs of our professional programs. These libraries provide comprehensive resources tailored to the unique requirements of law, medicine, and graduate studies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Law Library Section */}
        <section id="law-library" className="secondary-fullwidth" aria-labelledby="law-library-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="law-library-title" className="section-title">COLLEGE OF LAW LIBRARY</h2>
              <div className="secondary-grid">
                <div className="secondary-text">
                  <p>
                    The Law Library is located at the third floor of the Professional Building. It houses a collection of law books and other legal reference materials both Filipiniana and foreign, journals, and legal research studies of students.
                  </p>
                  <p>
                    The library special collection includes books donated by Atty. Yolanda Quisumbing Javellana and Atty. Ralph Sarmiento.
                  </p>
                </div>
                <div className="secondary-image">
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundColor: '#f3f4f6',
                      border: '2px dashed #d1d5db',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center' }}>
                      Law Library Image
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Library Section */}
        <section id= "medical-library" className="secondary-fullwidth" aria-labelledby="medical-library-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="medical-library-title" className="section-title">MEDICAL LIBRARY</h2>
              <div className="secondary-grid">
                <div className="secondary-image">
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundColor: '#f3f4f6',
                      border: '2px dashed #d1d5db',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center' }}>
                      Medical Library Image
                    </span>
                  </div>
                </div>
                <div className="secondary-text">
                  <p>
                    The Medical Library is located at the ground floor of the Professional Building. The collection includes journals, medical and allied health sciences resources.
                  </p>
                  <p>
                    Non-print resources are also available and included in the collection. Models and charts are part of the collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Graduate School Library Section */}
        <section id="graduate-library" className="secondary-fullwidth" aria-labelledby="graduate-library-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="graduate-library-title" className="section-title">GRADUATE SCHOOL LIBRARY</h2>
              <div className="secondary-grid">
                <div className="secondary-text">
                  <p>
                    The Graduate School Library is located at the ground floor of the Solomon building. The collection includes post-graduate books, general reference books, journals both foreign and local, dissertation and theses, and electronic resources.
                  </p>
                  <p>
                    Non-print resources are also available and included in the collection.
                  </p>
                </div>
                <div className="secondary-image">
                  <div
                    style={{
                      width: '100%',
                      height: '300px',
                      backgroundColor: '#f3f4f6',
                      border: '2px dashed #d1d5db',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center' }}>
                      Graduate School Library Image
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
