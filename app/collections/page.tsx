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
          <div className="secondary-background collections-intro-background">
            <div className="container">
              <div className="secondary-text about-text collections-intro-text">
                <p>
                  The USLS Library houses a comprehensive collection of resources that cater to the diverse academic needs of our community.
                  Our collections span from traditional print materials to cutting-edge digital resources, ensuring that students and faculty
                  have access to the information they need for learning, teaching, and research.
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
