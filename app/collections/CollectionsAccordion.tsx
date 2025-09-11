'use client';

import React, { useState, useEffect } from 'react';
import Image from "next/image";

// Reusable component for special collection items
const SpecialCollectionItem = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  index = 0
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
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

  const contentStyle = {
    flex: 1,
    minWidth: 0,
    width: isMobile ? '100%' : 'auto',
    padding: isMobile ? '0' : '0 16px',
  };

  const titleStyle = {
    marginTop: '0',
    marginBottom: '8px',
    color: '#111827',
    fontSize: isMobile ? (isSmallMobile ? '16px' : '18px') : '16px',
    fontWeight: 'bold',
    lineHeight: '1.3',
    textAlign: isMobile ? 'center' as const : 'left' as const,
  };

  const paragraphStyle = {
    margin: '0 0 16px 0',
    color: '#374151',
    lineHeight: isSmallMobile ? '1.5' : '1.6',
    fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '14px',
    textAlign: isMobile ? 'justify' as const : 'left' as const,
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
          <span style={{ color: '#6b7280', fontSize: '12px', textAlign: 'center', padding: '8px' }}>
            No Image Available
          </span>
        )}
      </div>
      <div style={contentStyle}>
        <h4 style={titleStyle}>{title}</h4>
        <p style={paragraphStyle}>{description}</p>
      </div>
    </div>
  );
};

type Collection = {
  id: string;
  title: string;
  content: string | React.ReactNode;
  items?: string[];
};

const specialCollections = [
  {
    title: "American Corner",
    description: "The American Corner provides a window to the life and culture of the United States of America. It is a partnership with the U.S. embassy through the American Center-Manila. The corner maintains a diverse collection of materials about American culture, education, and society.",
    imageSrc: "/images/american-corner-collection.jpg",
    imageAlt: "American Corner collection area"
  },
  {
    title: "Don Carlos Locsin Collection",
    description: "The Don Carlos Locsin Collection includes 3,000 volumes of books on various subject areas like Philippine history, literature, politics, government, and more. It also includes rare materials that date back to the early 1900s. It has precious and informative collection on the sugar industry, its history, and its development. Various periodicals are an outstanding part of this collection.",
    imageSrc: "/images/don-carlos-locsin-collection.jpeg",
    imageAlt: "Don Carlos Locscin Collection display"
  },
    {
    title: "Negrosiana",
    description: "The Negrosiana collection is about the local history of the Province of Negros. It consists of books, publications, brochures, and other materials about Negros Oriental and Negros Occidental mostly written by local authors and writers.",
    imageSrc: "/images/negrosiana-collection.jpg",
    imageAlt: "Negrosiana Collection display"
  },
  {
    title: "Knowledge Resource Collection (KRC)",
    description: "The Knowledge Resource Collection includes Bangko Sentral ng Pilipinas (BSP) publications such as books, reports, guides, manuals, primers, and brochures. This collection supports economic and financial research, providing valuable resources for students and researchers.",
    imageSrc: "/images/krc-collection.jpg",
    imageAlt: "Knowledge Resource Collection display"
  },
  {
    title: "Asian Studies Collection",
    description: "The Asian Studies collection houses resources about Asia and nearby countries such as Indonesia, Malaysia, China, Korea, Japan, and Singapore. The collection includes books, artifacts, cultural items, and research materials focused on Asian history, culture, and contemporary society.",
    imageSrc: "/images/asian-studies-jose-locsin-collection.jpeg",
    imageAlt: "Asian Studies collection and artifacts"
  },
  {
    title: "Senator Jose Locsin Collection",
    description: "This is the personal collection of the late Senator Jose Locsin, who was a physician, legislator, and philanthropist. The collection includes original manuscripts of his speeches, historical books like Noli Me Tangere and El Filibusterismo, and medical texts, providing valuable historical and academic resources.",
    imageSrc: "/images/asian-studies-jose-locsin-collection.jpeg",
    imageAlt: "Senator Jose Locsin Collection display"
  }
];

const collections: Collection[] = [
  {
    id: 'special-collections',
    title: 'SPECIAL COLLECTIONS',
    content: (
      <div>
        {specialCollections.map((collection, index) => (
          <SpecialCollectionItem
            key={index}
            title={collection.title}
            description={collection.description}
            imageSrc={collection.imageSrc}
            imageAlt={collection.imageAlt}
            index={index}
          />
        ))}
      </div>
    ),
  },
  {
    id: 'thesis-dissertation',
    title: 'THESIS & DISSERTATION',
    content: 'The Reference Collection includes non-circulating materials that provide quick access to information. These materials are for in-library use only.',
    items: [
      'Encyclopedias',
      'Dictionaries',
      'Handbooks',
      'Almanacs',
      'Atlases',
      'Directories',
      'Yearbooks'
    ]
  },
  {
    id: 'online-resources',
    title: 'ONLINE RESOURCES',
    content: (
      <div>
        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          color: '#006633', 
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          General Online Resources
        </h3>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* EmeraldInsight */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/emerald-insight.jpg"
                  alt="Emerald Insight Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>Emerald Insight</h4>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              A leading publisher of academic and professional literature in business, management, economics, engineering, and social sciences. Access to over 300 journals and more than 2,500 books.
            </p>
            <a
              href="https://lib.usls.edu.ph/portal/v2/default/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006633',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
            >
              Access Database
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* ProQuest */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/pro-quest.png"
                  alt="ProQuest Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>ProQuest</h4>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              Comprehensive research database providing access to thousands of academic journals, newspapers, dissertations, and other scholarly content across multiple disciplines.
            </p>
            <a
              href="https://lib.usls.edu.ph/portal/v2/default/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006633',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
            >
              Access Database
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* EBSCOhost */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/ebsco-host.png"
                  alt="EBSCOhost Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>EBSCOhost</h4>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              Leading research platform offering a wide range of full-text databases, subject indexes, point-of-care medical references, and historical digital archives across various academic disciplines.
            </p>
            <a
              href="https://lib.usls.edu.ph/portal/v2/default/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006633',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
            >
              Access Database
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* Wiley Online Library */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/wiley-online.png"
                  alt="Wiley Online Library Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>Wiley Online Library</h4>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              One of the world's most extensive multidisciplinary collections of online resources covering life, health, social and physical sciences, and humanities. Features journals, books, and reference works.
            </p>
            <a
              href="https://lib.usls.edu.ph/portal/v2/default/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006633',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
            >
              Access Database
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>

          {/* ScienceDirect */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/science-direct.png"
                  alt="ScienceDirect Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>ScienceDirect</h4>
            </div>
            <p style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}>
              Premier platform for peer-reviewed scholarly literature, offering access to scientific, technical, and medical research. Features journals, books, and reference works from Elsevier's extensive collection.
            </p>
            <a
              href="https://lib.usls.edu.ph/portal/v2/default/login"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#006633',
                color: 'white',
                padding: '0.75rem 1rem',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                width: 'fit-content',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#005529'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#006633'}
            >
              Access Database
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          color: '#006633', 
          margin: '3rem 0 1.5rem',
          textAlign: 'center'
        }}>
          eLibraryUSA
        </h3>
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/elib-usa.png"
                  alt="eLibraryUSA Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>eLibraryUSA</h4>
            </div>
            <div>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                Provides American Spaces with resources to support programs and activities and provide visitors with access to information.
              </p>
              <h5 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#111827',
                marginBottom: '0.5rem'
              }}>
                How to access eLibraryUSA?
              </h5>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                ELibraryUSA can be accessed only at the American corner. To have your eLibraryUSA Personal Account please see us at the LRC office for more information. The American Corner is located on the Ground floor of the HEU Learning Resource Center.
              </p>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4b5563',
                fontStyle: 'italic'
              }}>
                Please ask for assistance from the AC staff.
              </p>
            </div>
          </div>
        </div>

        <h3 style={{ 
          fontSize: '1.2rem', 
          fontWeight: '600', 
          color: '#006633', 
          margin: '3rem 0 1.5rem',
          textAlign: 'center'
        }}>
          Philippine E-Journals
        </h3>
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
          padding: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '120px',
                height: '60px',
                backgroundColor: '#f3f4f6',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <Image
                  src="/logos/pej.png"
                  alt="Philippine E-Journals Logo"
                  width={100}
                  height={50}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#111827'
              }}>Philippine E-Journals (PEJ)</h4>
            </div>
            <div>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                The {' '}
                <a 
                  href="https://ejournals.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#006633',
                    textDecoration: 'underline',
                    fontWeight: '500'
                  }}
                >
                  Philippine E-Journals
                </a>
                {' '} is an online collection of academic publications of different higher education institutions and professional organizations.
              </p>
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: '#4b5563',
                marginBottom: '1rem'
              }}>
                Please click and register at this{' '}
                <a 
                  href="https://forms.gle/8LLgdq4jPA8HQUbH8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#006633',
                    textDecoration: 'underline',
                    fontWeight: '500'
                  }}
                >
                  PEJ form
                </a>
                {' '}for the username and password.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  }
];

export default function CollectionsAccordion() {
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
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

  const toggleCollection = (id: string) => {
    setActiveCollection(activeCollection === id ? null : id);
  };

  return (
    <section className="secondary-fullwidth" aria-labelledby="collections-accordion">
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
            {collections.map((collection) => (
              <div
                key={collection.id}
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
                  onClick={() => toggleCollection(collection.id)}
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
                  aria-expanded={activeCollection === collection.id}
                  aria-controls={`${collection.id}-content`}
                >
                  {collection.title}
                  <svg
                    width={isSmallMobile ? '18' : '20'}
                    height={isSmallMobile ? '18' : '20'}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: activeCollection === collection.id ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      flexShrink: 0,
                    }}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div
                  id={`${collection.id}-content`}
                  className="accordion-content"
                  style={{
                    maxHeight: activeCollection === collection.id ? '5000px' : '0',
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
                    <div style={{ color: '#374151' }}>
                      {typeof collection.content === 'string' ? (
                        <>
                          <p style={{ 
                            fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '14px',
                            lineHeight: isSmallMobile ? '1.5' : '1.6',
                            marginBottom: '1rem'
                          }}>
                            {collection.content}
                          </p>
                          {collection.items && (
                            <ul style={{ 
                              listStyleType: 'disc',
                              paddingLeft: isMobile ? (isSmallMobile ? '1.5rem' : '2rem') : '2rem',
                              fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '14px',
                              lineHeight: isSmallMobile ? '1.5' : '1.6',
                            }}>
                              {collection.items.map((item, index) => (
                                <li key={index} style={{ marginBottom: '0.5rem' }}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </>
                      ) : (
                        collection.content
                      )}
                    </div>
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
