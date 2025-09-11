import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Office Hours & Staff - Learning Resource Center | University of St. La Salle",
  description: "Office hours for all libraries and staff listings of the Learning Resource Center.",
};

type OfficeCard = {
  title: string;
  image: string;
  hours: string[];
  note?: string;
};

const offices: OfficeCard[] = [
  {
    title: "COLLEGE LIBRARY",
    image: "/images/Online-Library-Resources.png",
    hours: [
      "Regular Class Days",
      "7:30 AM – 7:00 PM",
      "Semester/Summer Break",
      "8:00 AM – 5:00 PM (observes Lunch Break)",
    ],
    note: "Closed on Saturdays",
  },
  {
    title: "GRADUATE SCHOOL LIBRARY",
    image: "/images/Online-Library-Resources.png",
    hours: [
      "Regular Class Days",
      "8:30 AM – 12:00 NN; 1:00 PM – 8:00 PM",
      "Semester/Summer Break",
      "8:00 AM – 12:00 NN; 1:00 PM – 5:00 PM (No Saturday)",
      "Saturday",
      "8:00 AM – 5:00 PM (No Noon Break)",
    ],
  },
  {
    title: "LAW LIBRARY",
    image: "/images/Online-Library-Resources.png",
    hours: [
      "Regular Class Days",
      "8:00 AM – 8:00 PM (No Noon Break)",
      "Semester/Summer Break",
      "8:00 AM – 12:00 NN; 1:00 PM – 5:00 PM (No Saturday)",
      "Saturday",
      "8:00 AM – 5:00 PM (No Noon Break)",
    ],
  },
  {
    title: "MEDICINE LIBRARY",
    image: "/images/Online-Library-Resources.png",
    hours: [
      "Regular Class Days",
      "7:30 AM – 7:00 PM (No Noon Break)",
      "Semester/Summer Break",
      "8:00 AM – 12:00 NN; 1:00 PM – 5:00 PM (No Saturday)",
      "Saturday",
      "8:00 AM – 5:00 PM",
    ],
  },
  {
    title: "INSTRUCTIONAL MEDIA CENTER",
    image: "/images/Online-Library-Resources.png",
    hours: [
      "Regular Class Days",
      "7:30 AM – 7:00 PM",
      "Semester/Summer Break",
      "8:00 AM – 5:00 PM (observes Lunch Break)",
    ],
    note: "Closed on Saturdays",
  },
];

export default function OfficeHoursStaffPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">OFFICE HOURS & STAFF</h1>
        </div>
      </section>

      <main>
        {/* Office Hours */}
        <section className="secondary-fullwidth" aria-labelledby="office-hours-title">
          <div className="secondary-background office-hours-background">
            <div className="container">
              <h2 id="office-hours-title" className="section-title">OUR OFFICE HOURS</h2>
              <div className="office-grid">
                {offices.map((o) => (
                  <div key={o.title} className="office-card">
                    <Image src={o.image} alt={`${o.title} thumbnail`} width={400} height={200} className="office-image" />
                    <div className="office-body">
                      <h3>{o.title}</h3>
                      <ul className="office-hours">
                        {o.hours.map((h, idx) => (
                          <li key={idx} className={idx % 2 === 0 ? 'label' : 'value'}>{h}</li>
                        ))}
                      </ul>
                      {o.note ? <div className="office-note">{o.note}</div> : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personnel Sections */}
        <section className="secondary-fullwidth" aria-labelledby="personnel-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="personnel-title" className="section-title">PERSONNEL</h2>
              <div className="personnel-grid">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="person-card">
                    <div className="avatar" />
                    <div className="person-meta">
                      <strong>Full Name</strong>
                      <span>Role / Department</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="secondary-fullwidth" aria-labelledby="ps-title">
          <div className="secondary-background ps-background">
            <div className="container">
              <h2 id="ps-title" className="section-title">PROFESSIONAL SCHOOL PERSONNEL</h2>
              <div className="personnel-grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="person-card">
                    <div className="avatar" />
                    <div className="person-meta">
                      <strong>Full Name</strong>
                      <span>Role</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="secondary-fullwidth" aria-labelledby="imc-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="imc-title" className="section-title">IMC PERSONNEL</h2>
              <div className="personnel-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="person-card">
                    <div className="avatar" />
                    <div className="person-meta">
                      <strong>Full Name</strong>
                      <span>IMC Technical Staff</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


