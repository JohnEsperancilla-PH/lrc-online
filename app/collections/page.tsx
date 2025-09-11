import type { Metadata } from "next";
import CollectionsAccordion from './CollectionsAccordion';

export const metadata: Metadata = {
  title: "Collections - Learning Resource Center | University of St. La Salle",
  description: "Explore the diverse collections available at the Learning Resource Center of University of St. La Salle.",
};

export default function CollectionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">COLLECTIONS</h1>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="secondary-fullwidth" aria-labelledby="collections-intro">
          <div className="secondary-background" style={{ background: '#fff' }}>
            <div className="container">
              <div className="secondary-text about-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <p>
                 The USLS Library offers a range of facilities across its three floors. The ground floor houses the Circulation and Reference sections, along with OPAC stations and new acquisitions. The second floor features the Multimedia and Internet Café areas, Thesis and Periodicals sections, and a Faculty Reading Area. On the third floor, students can access quiet study zones, a group Discussion Room, and special collections like the Don Carlos Locsin, Negrosiana, and Filipiniana sections.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CollectionsAccordion />
      </main>
    </>
  );
}
