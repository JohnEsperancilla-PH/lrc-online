import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guidelines & Handbook - Learning Resource Center | University of St. La Salle",
  description: "Policies, guidelines, and downloadable LRC handbooks.",
};

export default function GuidelinesHandbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">GUIDELINES & HANDBOOK</h1>
        </div>
      </section>

      <main>
        {/* Guidelines */}
        <section id="guidelines" className="secondary-fullwidth" aria-labelledby="guidelines-title">
          <div className="secondary-background" style={{ background: '#fff' }}>
            <div className="container">
              <h2 id="guidelines-title" className="section-title">GUIDELINES</h2>

              <div className="policy-section">
                <h3>LEARNING RESOURCE CENTER GENERAL POLICY</h3>
                <p className="policy-intro">
                  The Learning Resource Center (LRC) serves as the academic institution's "brain" and is vital to
                  advancing knowledge and achieving educational objectives. Its efficient operation ensures that users are
                  satisfied. The following guidelines must be followed:
                </p>
                <ul className="policy-list">
                  <li>
                    To conduct business in the library, you must present a validated identification card (ID). The
                    borrower is responsible for any materials borrowed.
                  </li>
                  <li>
                    Every student has one (1) hour to use the internet for research at the JRR Technology Center. Videos,
                    games, and movie downloads are not allowed.
                  </li>
                  <li>
                    The library is a place for learning and research. Unnecessary noise, such as loud laughter or idle
                    conversation, should be avoided. Discussions should be held in a low voice. The phone has to be muted.
                  </li>
                  <li>
                    Food and drinks are not allowed in all areas of the library.
                  </li>
                  <li>
                    Handle books and other library materials with care.
                  </li>
                  <li>
                    Avoid VANDALISM (the defacing, marking, cutting, mutilating, or any other type of damage to library
                    resources). Anyone caught violating this rule will be subject to disciplinary action and be required to
                    pay the full replacement cost of the resource.
                  </li>
                  <li>
                    FORGERY: A student's library privileges will be suspended during the following academic term if they
                    have falsified the librarian's signature to settle library bills. Additionally, the offending party will be
                    reported to the Disciplinary Board.
                  </li>
                  <li>
                    ONLINE RESERVATION: Reservations for facilities, equipment, and other relevant requests must be made
                    at least three (3) days in advance of usage through the LRC (tinyurl.com/formlibr) and IMC
                    (sites.google.com/usls.edu.ph/lrc/imc). Requests must be canceled two (2) days before the planned
                    event or activity.
                  </li>
                    A letter of recommendation is needed from visiting users and must be presented to the LRC office before
                    proceeding to the section of the library intended for research. Similarly, a referral letter is provided to
                    bona fide faculty members or student/s upon request who plan to do research at other institutions.
                </ul>
                <p className="policy-underline">
                The LRC office maintains the authority to retract or cancel any confirmation of any policy violations or acts of misrepresentation.
                </p>

                <h3>LIBRARY CLEARANCE</h3>
                <p className="policy-intro">
                  Students, faculty members, and staff must pay their library accountabilities (late fines, unreturned books,
                  printing costs, and reported lost book/s) at the end of each term before signing clearance from the library.
                </p>

                <h3>BORROWING PRIVILEGES</h3>
                <ul className="policy-list">
                  <li>
                    Faculty - A bona fide faculty is allowed to borrow 15 books at a time for one (1) month and maybe
                    renewed for another month unless called for by another user.
                  </li>
                  <li>
                    Students - Students are allowed to borrow three (3) books at a time for three (3) days and can be
                    renewed for another three (3) days unless called for by another user.
                  </li>
                  <li>
                    Overdue Fines - A fine of P2.00 a day is charged for overdue book/s excluding Sundays and Holidays.
                  </li>
                  <li>
                    Reserved Books - A fine of P5.00 is charged for the first hour or a fraction thereof. Additional P2.00
                    for the succeeding hours or a total fine of P29.00 for each day.
                  </li>
                </ul>

                <p className="policy-note">NOTE:</p>
                <p className="policy-intro">
                  Any violation of the library policy forfeits one's privilege/s in the use of library resources. Loaning out of
                  books or other library materials is subject for approval of the LRC Head.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Handbooks */}
        <section id="handbooks" className="secondary-fullwidth" aria-labelledby="handbooks-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="handbooks-title" className="section-title">HANDBOOKS</h2>
              <div className="handbooks-grid">
                <div className="handbook-card">
                  <h4>LEARNING RESOURCE CENTER HANDBOOK (A.Y. 2024–2025)</h4>
                  <p>
                    The LRC Handbook A.Y. 2024-2025 is already available online. Click the icon for the public view link:
                  </p>
                  <a href="https://drive.google.com/file/u/0/d/1Ya5k14YKdqeG-86bn7Td2EcEOxVlfS7f/view" className="btn small" aria-label="Access LRC Handbook AY 2024-2025">ACCESS HERE</a>
                </div>
                <div className="handbook-card">
                  <h4>LEARNING RESOURCE CENTER HANDBOOK (A.Y. 2023–2024)</h4>
                  <p>
                    The LRC Handbook A.Y. 2023-2024 is already available online. Click the icon for the public view link:
                  </p>
                  <a href="https://drive.google.com/file/d/1RrLOXb0VX-OfIWi1mJRpxj-ukEsoOqIU/view" className="btn small" aria-label="Access LRC Handbook AY 2023-2024">ACCESS HERE</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


