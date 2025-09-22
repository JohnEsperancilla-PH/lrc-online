"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Reusable component for facility items
const FacilityItem = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  hasList = false, 
  listItems = [],
  index = 0
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  hasList?: boolean;
  listItems?: string[];
  index?: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : (index % 2 === 0 ? 'row' : 'row-reverse'),
    gap: isMobile ? '12px' : '32px',
    marginBottom: '32px',
    alignItems: 'center',
  } as const;

  const imageContainerStyle = {
    width: isMobile ? '100%' : '400px',
    maxWidth: isMobile ? '300px' : '400px',
    height: isSmallMobile ? '180px' : isMobile ? '200px' : '300px',
    backgroundColor: '#f3f4f6',
    border: '2px dashed #d1d5db',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    overflow: 'hidden',
    order: isMobile ? 0 : undefined
  };

  const imageTextStyle = {
    color: '#6b7280',
    fontSize: isSmallMobile ? '11px' : '12px',
    textAlign: 'center' as const,
    padding: '8px',
  };

  const contentStyle = {
    flex: 1,
    minWidth: 0,
    width: isMobile ? '100%' : 'auto',
    padding: isMobile ? '0' : '0 16px',
  };

  const titleStyle = {
    marginTop: '0',
    marginBottom: '8px',
    color: '#006633',
    fontSize: '1.3rem',
    fontWeight: '700',
    lineHeight: '1.3',
    textAlign: isMobile ? 'center' as const : 'left' as const,
    borderBottom: '2px solid #006633',
    paddingBottom: '0.5rem'
  };

  const paragraphStyle = {
    margin: '0 0 16px 0',
    color: '#374151',
    lineHeight: isSmallMobile ? '1.5' : '1.6',
    fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '14px',
    textAlign: isMobile ? 'justify' as const : 'left' as const,
  };

  const listStyle = {
    margin: `0 0 16px ${isMobile ? (isSmallMobile ? '12px' : '16px') : '20px'}`,
    color: '#374151',
    lineHeight: isSmallMobile ? '1.5' : '1.6',
    fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '14px',
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={isMobile ? 300 : 400}
            height={isSmallMobile ? 180 : isMobile ? 200 : 300}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              borderRadius: '12px'
            }}
            sizes={isMobile ? "100vw" : "400px"}
          />
        ) : (
          <span style={imageTextStyle}>No Image Available</span>
        )}
      </div>
      <div style={contentStyle}>
        <h4 style={titleStyle}>{title}</h4>
        {hasList ? (
          <>
            <p style={{ ...paragraphStyle, marginBottom: '8px' }}>{description}</p>
            <ul style={listStyle}>
              {listItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p style={paragraphStyle}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default function FacilitiesAccordion() {
  const [openFloor, setOpenFloor] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleFloor = (floorId: string) => {
    setOpenFloor(openFloor === floorId ? null : floorId);
  };

  const groundFloorFacilities = [
    {
      title: "Learning Resource (LRC) Office",
      description: "The Learning Resource Center Office supervises the library's daily operation and function are managed and maintained with the supervision of the LRC Head Librarian. The office is responsible for the reservation of the use of library facilities like the discussion room, library lobby, American Corner Conference Room, and the JRR Dizon Library Technology Center. The office issues referral letters to other libraries upon request.",
      imageSrc: "/images/lrc-office.jpg", // Add your image path here
      imageAlt: "LRC Office interior showing administrative workspace"
    },
    {
      title: "Faculty Reading Room",
      description: "The faculty reading room is intended for faculty use only especially for faculty members doing research. It is situated on the ground floor beside the Learning Resource Center Office.",
      imageSrc: "/images/faculty-reading.jpg", // Add your image path here
      imageAlt: "Faculty reading room with comfortable seating and study tables"
    },
    {
      title: "JRR Dizon Library Technology Center",
      description: "The center is named after Joaquin Rafael Raymundo (JRR) Dizon Foundation which provides internet services to students. A student is entitled to use the internet for one hour (1) every day for research and can be extended upon request for another hour. The center is also used for classroom instruction of faculty having research classes using the internet or library online databases.",
      imageSrc: "/images/library-technology-center.jpeg", // Add your image path here
      imageAlt: "Technology center with computers and internet access"
    },
    {
      title: "American Corner (AC)",
      description: "The American Corner provides a window of life and culture of the United States of America. It is a partnership with the U.S. embassy through the American Center-Manila. AC-Manila maintains and coordinates a network throughout the country. It provides a collaborative and innovative resource spaces where diverse range of people.",
      imageSrc: "/images/american-corner.jpg", // Add your image path here
      imageAlt: "American Corner with US cultural materials and resources"
    },
    {
      title: "Technical Services Section",
      description: "This section is in-charged of the organization of library materials before they are put into circulation. The process includes accessioning, classifying, cataloging, stamping, and covering of books.",
      imageSrc: "/images/technical-services.jpg", // Add your image path here
      imageAlt: "Technical services area with book processing equipment"
    },
    {
      title: "Periodicals Section",
      description: "The periodicals section contains newspapers, journals, magazines, and other serial literature. Pamphlets, vertical files, brochures, and clippings are housed in this section. Current issues of newspapers and journals are displayed in this area. All materials are for room use only.",
      imageSrc: "/images/periodicals-section.jpg", // Add your image path here
      imageAlt: "Periodicals section with newspapers and magazines display"
    },
    {
      title: "Theses & Dissertation Section",
      description: "This is a repository of academic research works done by students and faculty of the different colleges and graduate programs of the university. These materials are for room use only.",
      imageSrc: "/images/theses-dissertation.jpg", // Add your image path here
      imageAlt: "Theses and dissertations section with academic research materials"
    }
  ];

  const secondFloorFacilities = [
    {
      title: "Circulation and Information and Readers Services Section",
      description: "The circulation is one of the key sections in the Learning Resource Center. It provides check-outs and check ins, re-shelving of library borrowed materials, assist users in their needs and answer general queries. A drop box is provided at the entrance of the library for borrowers who wish to return the books they borrowed on or before the due date and even if the library has no service. This is regularly checked by the librarian. The Information and Readers Services Section provides information reference services to users like assisting retrieval of library resources, online searches, and marketing library services and programs. The reserve section is where books on demand with limited copies are placed. Faculty members can also place personal books reserved for room use only.",
      imageSrc: "/images/circulation-information.jpg", // Add your image path here
      imageAlt: "Circulation desk with library staff assisting students"
    },
    {
      title: "Knowledge Resource Collection (KRC)",
      description: "The Knowledge Resource Network Collection (KRN) houses Bangko Sentral ng Pilipinas (BSP) publications such as books, report guides, manuals, primer brochures and also provide research assistance to the public. This is inline with the BSP vision on KRC to be catalyst for economic development by empowering the public to make informed and better economic and financial decision through easy access to information and services.",
      imageSrc: "/images/krc-collection.jpg", // Add your image path here
      imageAlt: "KRC collection with BSP publications and research materials"
    },
    {
      title: "Business & Accountancy & General Reference Section",
      description: "The Business and accountancy house all books on accounting, economics, entrepreneurship, agribusiness, marketing, management and hospitality management. The general reference section houses general reference books which provide quick and easy information. These library resources are for room use only. This section includes the following books:",
      imageSrc: "/images/business-accountancy.jpg", // Add your image path here
      imageAlt: "Business and reference section with textbooks and reference materials",
      hasList: true,
      listItems: [
        "Encyclopedia - provide general information",
        "Manuals - give miscellaneous information",
        "Handbooks - are \"how-to-do\"",
        "Biographical Sources - listing of books on a particular subject",
        "Geographical Sources - information about places",
        "Dictionaries - information about words",
        "Directories - list of names and addresses of persons, organization or institutions."
      ]
    },
    {
      title: "Asian Studies and Senator Jose Locsin Collections",
      description: "The Asian Studies houses resources about Asia and nearby countries such as Indonesia, Malaysia, China, Korea, Japan, and Singapore. Many artifacts are found in this section. Also on display are distinguished markers, flags, ornaments that represent a particular nation. The Senator Jose Locsin Collection is the personal collection of the late Senator Jose Locsin. He was a physician, a former legislator and outstanding philanthropist. The collection includes original manuscripts of his speeches on different occasions and languages. The collection also includes history books such as Noli me Tangere, El Filibusterismo and medicine.",
      imageSrc: "/images/asian-studies.jpg", // Add your image path here
      imageAlt: "Asian studies collection with artifacts and historical materials"
    },
    {
      title: "Engineering and Information Technology, Social Sciences, Education & Nursing Section",
      description: "This section house books on Engineering and Information technology, nursing, social sciences, humanities, psychology, religious studies, philosophy, education, political science, communications, arts, physical education, literature and history. Books for leisure reading is also located in this section.",
      imageSrc: "/images/engineering-information.jpg", // Add your image path here
      imageAlt: "Engineering and IT section with technical books and resources"
    }
  ];

  const thirdFloorFacilities = [
    {
      title: "Discussion Rooms",
      description: "The discussion rooms are designed to facilitate group study and collaboration among students. Equipped with modern technology and comfortable seating, these rooms provide an ideal environment for brainstorming sessions, group projects, and interactive learning experiences.",
      imageSrc: "/images/discussion-rooms.jpg", // Add your image path here
      imageAlt: "Discussion room with students collaborating on a project"
    },
    {
      title: "Don Carlos Locsin Collection",
      description: "The Don Carlos Locsin Collection includes 3,000 volumes of books on various subject areas like Philippine history, literature, politics, government, and more. It also includes rare materials that date back to the early 1900s. It has precious and informative collection on the sugar industry, its history, and its development. Various periodicals are an outstanding part of this collection.",
      imageSrc: "/images/don-carlos.jpg", // Add your image path here
      imageAlt: "KRC collection with BSP publications and research materials"
    },
    {
      title: "Negrosiana Section",
      description: "The Negrosiana collection is about the local history of the Province of Negros. It consists of books, publications, brochures, and other materials about Negros Occidental and Negros Oriental. Exemplary research works written by local writers are housed in this section.",
      imageSrc: "", // Add your image path here
      imageAlt: "Business and reference section with textbooks and reference materials"
    },
    {
      title: "Filipiniana Section",
      description: "The Filipinana section consists of books and other resources about the Philippines, books written by Filipino authors, and books printed in the Philippines. These materials are for room use only.  This a close shelf section. In special cases, a student can borrow a book for classroom use only upon the request of the faculty.  A written note from the concerned faculty is required before approval by the LRC Head.",
      imageSrc: "", // Add your image path here
      imageAlt: "Asian studies collection with artifacts and historical materials"
    },
    {
      title: "Open Study Area",
      description: "Open study area is a space where students can discuss, engage and network  among their classmates to do their academic research, homework, assignments and study. ",
      imageSrc: "", // Add your image path here
      imageAlt: "Engineering and IT section with technical books and resources"
    },
    {
      title: "Individual Study Area",
      description: "Individual study area is a quite  space where students can sharpen their mind, can  concentrate and do their academic research, homework, assignments and study.  ",
      imageSrc: "", // Add your image path here
      imageAlt: "Engineering and IT section with technical books and resources"
    }
  ];

  const floors = [
    {
      id: "ground-floor",
      title: "GROUND FLOOR",
      content: (
        <div>
          {groundFloorFacilities.map((facility, index) => (
            <FacilityItem
              key={index}
              title={facility.title}
              description={facility.description}
              imageSrc={facility.imageSrc}
              imageAlt={facility.imageAlt}
              index={index}
            />
          ))}
        </div>
      )
    },
    {
      id: "second-floor", 
      title: "SECOND FLOOR",
      content: (
        <div>
          {secondFloorFacilities.map((facility, index) => (
            <FacilityItem
              key={index}
              title={facility.title}
              description={facility.description}
              imageSrc={facility.imageSrc}
              imageAlt={facility.imageAlt}
              hasList={facility.hasList}
              listItems={facility.listItems}
              index={index}
            />
          ))}
        </div>
      )
    },
    {
      id: "third-floor",
      title: "THIRD FLOOR", 
      content: (
        <div>
          {thirdFloorFacilities.map((facility, index) => (
            <FacilityItem
              key={index}
              title={facility.title}
              description={facility.description}
              imageSrc={facility.imageSrc}
              imageAlt={facility.imageAlt}
              index={index}
            />
          ))}
        </div>
      )
    }
  ];

  return (
    <section className="secondary-fullwidth" aria-labelledby="floors-accordion">
      <div className="secondary-background">
        <div className="container">
          <div
            className="accordion-container"
            style={{
              maxWidth: isMobile ? '100%' : '900px',
              margin: '0 auto',
              padding: `0 ${isSmallMobile ? '8px' : isMobile ? '12px' : '16px'}`,
            }}
          >
            {floors.map((floor) => (
              <div
                key={floor.id}
                className="accordion-item"
                style={{
                  marginBottom: isMobile ? '12px' : '16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}
              >
                <button
                  className="accordion-header"
                  onClick={() => toggleFloor(floor.id)}
                  style={{
                    width: '100%',
                    padding: isSmallMobile ? '14px 16px' : isMobile ? '16px 20px' : '20px 24px',
                    backgroundColor: '#006633',
                    color: 'white',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: isSmallMobile ? '15px' : isMobile ? '16px' : '18px',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
                  aria-expanded={openFloor === floor.id}
                  aria-controls={`${floor.id}-content`}
                >
                  {floor.title}
                  <svg
                    width={isSmallMobile ? '18' : '20'}
                    height={isSmallMobile ? '18' : '20'}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: openFloor === floor.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div
                  id={`${floor.id}-content`}
                  className="accordion-content"
                  style={{
                    maxHeight: openFloor === floor.id ? '5000px' : '0',
                    overflow: 'hidden',
                    transition: `max-height ${isMobile ? '0.3s' : '0.4s'} ease`,
                    backgroundColor: 'white'
                  }}
                >
                  <div
                    style={{
                      padding: isSmallMobile ? '16px' : isMobile ? '20px' : '24px',
                    }}
                  >
                    {floor.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
