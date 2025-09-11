import type { Metadata } from "next";
import FacilitiesAccordion from "./FacilitiesAccordion";

export const metadata: Metadata = {
  title: "Facilities - Learning Resource Center | University of St. La Salle",
  description: "Explore the facilities and resources available at the Learning Resource Center of University of St. La Salle.",
};

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">FACILITIES</h1>
        </div>
      </section>

      {/* Main Content */}
      <main>
        {/* Introduction Section */}
        <section className="secondary-fullwidth" aria-labelledby="facilities-intro">
          <div className="secondary-background facilities-intro-background">
            <div className="container">
              <div className="secondary-text about-text facilities-intro-text">
                <p>
                  The USLS Library offers a range of facilities across its three floors. The ground floor houses the Circulation and Reference sections, along with OPAC stations and new acquisitions. The second floor features the Multimedia and Internet Café areas, Thesis and Periodicals sections, and a Faculty Reading Area. On the third floor, students can access quiet study zones, a group Discussion Room, and special collections like the Don Carlos Locsin, Negrosiana, and Filipiniana sections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Floors Accordion Section */}
        <FacilitiesAccordion />
      </main>
    </>
  );
}
