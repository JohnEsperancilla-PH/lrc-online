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

const IconStyle = {
  width: '48px',
  height: '48px',
  color: '#006633'
};

const services: ServiceCard[] = [
  {
    title: "Online Reservation",
    description: "Online reservation of facilities and equipment must be done three (3) days before the intended date of use.",
    icon: <ReservationIcon style={IconStyle} />,
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
    icon: <BookIcon style={IconStyle} />,
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
    icon: <RenewalIcon style={IconStyle} />,
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
    icon: <CirculationIcon style={IconStyle} />
  },
  {
    title: "Information Literacy",
    description: "The library provides literacy needs of the academic community through online tutorials, research workshops, and assistance searching for information, database searching and sourcing.",
    icon: <LiteracyIcon style={IconStyle} />
  },
  {
    title: "Information Delivery",
    description: "Delivery of library resources; both online or physical. Book request will be delivered as a photocopy or scan and can be picked up at the library.",
    icon: <DeliveryIcon style={IconStyle} />
  },
  {
    title: "Reference & Information",
    description: "The library provides assistance to library users in searching for the resources they for their research and academic needs.",
    icon: <ReferenceIcon style={IconStyle} />
  },
  {
    title: "Printing",
    description: "The library facilitates printing of researches done by users with a fee depending on the kind of research to be printed.",
    icon: <PrintingIcon style={IconStyle} />
  },
  {
    title: "Visiting Researchers",
    description: "Students from other schools, alumni, professional and corporate researchers.",
    icon: <ResearcherIcon style={IconStyle} />
  }
];

export default function FacilitiesPage() {
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
        <section className="secondary-fullwidth" aria-labelledby="facilities-intro">
          <div className="secondary-background" style={{ background: '#fff' }}>
            <div className="container">
              <div className="secondary-text about-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
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
                  <div key={service.title} style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}>
                    <div className="service-icon" style={{ 
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '2rem 0',
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px 8px 0 0'
                    }}>
                      {service.icon}
                    </div>
                    <div style={{
                      padding: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1
                    }}>
                      <h3 style={{ 
                        color: '#006633', 
                        fontSize: '1.25rem', 
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        textAlign: 'center'
                      }}>
                        {service.title}
                      </h3>
                      <p style={{ 
                        fontSize: '0.9rem', 
                        lineHeight: '1.5', 
                        color: '#333',
                        marginBottom: '1.5rem',
                        textAlign: 'center',
                        flexGrow: 1
                      }}>
                        {service.description}
                      </p>
                      {service.buttons && service.buttons.length > 0 && (
                        <div style={{ 
                          textAlign: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.5rem',
                          marginTop: 'auto',
                          width: '100%'
                        }}>
                          {service.buttons.map((button, idx) => (
                            <a 
                              key={idx}
                              href={button.link}
                              className="service-btn hover:bg-green-700"
                              style={{
                                display: 'block',
                                width: '100%',
                                backgroundColor: '#006633',
                                color: 'white',
                                padding: '0.75rem',
                                borderRadius: '4px',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                transition: 'all 0.2s ease'
                              }}
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