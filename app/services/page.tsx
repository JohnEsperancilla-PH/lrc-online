import type { Metadata } from "next";
import React from "react";
import {
  ReservationIcon,
  BookIcon,
  RenewalIcon,
  CirculationIcon,
  LiteracyIcon,
  DeliveryIcon,
  ReferenceIcon,
  PrintingIcon,
  ResearcherIcon
} from "@/components/icons/ServiceIcons";

export const metadata: Metadata = {
  title: "Services - Learning Resource Center | University of St. La Salle",
  description: "Discover the comprehensive services offered by the Learning Resource Center of University of St. La Salle.",
};

type Button = {
  text: string;
  link: string;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttons?: Button[];
};

const services: ServiceCard[] = [
  {
    title: "Online Reservation",
    description: "Online reservation of facilities and equipment must be done three (3) days before the intended date of use.",
    icon: <ReservationIcon style={{ width: '48px', height: '48px', color: '#006633' }} />,
    buttons: [
      {
        text: "LRC Reservation Form",
        link: "#reservation"
      },
      {
        text: "Library & IMC Facilities",
        link: "/facilities"
      }
    ]
  },
  {
    title: "Bibliographic Service",
    description: "Search the Online Public Access Catalog (OPAC). Please ask the librarian for assistance in finding the book.",
    icon: <BookIcon style={{ width: '48px', height: '48px', color: '#006633' }} />,
    buttons: [
      {
        text: "Access OPAC Here",
        link: "#opac"
      }
    ]
  },
  {
    title: "Online Renewal",
    description: "To renew your borrowed library resources or to register for an account.",
    icon: <RenewalIcon style={{ width: '48px', height: '48px', color: '#006633' }} />,
    buttons: [
      {
        text: "Access Online Renewal",
        link: "#renewal"
      }
    ]
  },
  {
    title: "Book Circulation",
    description: "Borrowing and returning of library resources.",
    icon: <CirculationIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  },
  {
    title: "Information Literacy",
    description: "The library provides literacy needs of the academic community through online tutorials, research workshops, and assistance searching for information, database searching and sourcing.",
    icon: <LiteracyIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  },
  {
    title: "Information Delivery",
    description: "Delivery of library resources; both online or physical. Book request will be delivered as a photocopy or scan and can be picked up at the library.",
    icon: <DeliveryIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  },
  {
    title: "Reference & Information",
    description: "The library provides assistance to library users in searching for the resources they for their research and academic needs.",
    icon: <ReferenceIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  },
  {
    title: "Printing",
    description: "The library facilitates printing of researches done by users with a fee depending on the kind of research to be printed.",
    icon: <PrintingIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  },
  {
    title: "Visiting Researchers",
    description: "Students from other schools, alumni, professional and corporate researchers.",
    icon: <ResearcherIcon style={{ width: '48px', height: '48px', color: '#006633' }} />
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">SERVICES</h1>
        </div>
      </section>
        {/* Main Content */}
        <main>
        {/* Introduction Section */}
        <section className="secondary-fullwidth" aria-labelledby="services-intro">
          <div className="secondary-background services-intro-background">
            <div className="container">
              <div className="secondary-text about-text services-intro-text">
                <p>
                    The USLS Library offers a variety of services to support students and faculty. These include book borrowing and returning, reference assistance, access to multimedia resources, and online catalog search. It also provides specialized help through LORA, a virtual assistant, and offers online reservation for discussion rooms and other facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="secondary-fullwidth" aria-labelledby="services-grid-title">
          <div className="secondary-background">
            <div className="container">
              <h2 id="services-grid-title" className="section-title">OUR SERVICES</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                {services.map((service) => (
                  <div key={service.title} className="service-card">
                    <div className="service-icon">
                      {service.icon}
                    </div>
                    <div className="service-content">
                      <h3 className="service-title">
                        {service.title}
                      </h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                      {service.buttons && service.buttons.length > 0 && (
                        <div className="service-buttons">
                          {service.buttons.map((button, idx) => (
                            <a
                              key={idx}
                              href={button.link}
                              className="service-btn"
                            >
                              {button.text}
                            </a>
                          ))}
                        </div>
                      )}
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