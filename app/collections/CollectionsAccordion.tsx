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
    content: (
      <div>
        <p style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
          Access our comprehensive collection of undergraduate and graduate theses, dissertations, and research papers from various academic programs at the University of St. La Salle.
        </p>

        {/* Undergraduate Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#006633',
            marginBottom: '1rem',
            borderBottom: '2px solid #006633',
            paddingBottom: '0.5rem'
          }}>
            Undergraduate Programs
          </h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=513655756#gid=513655756" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Accounting
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=1169297" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Accounting Technology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1637905600#gid=1637905600" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Agribusiness
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=1659101926" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Biology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1061220599#gid=1061220599" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Chemical Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=850759766#gid=850759766" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Computer Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=106582942#gid=106582942" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Computer Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=56602722#gid=56602722" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Electronic Communication Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=1092957455" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Economics
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1486721506#gid=1486721506" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1010400559#gid=1010400559" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Electrical Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1724598305#gid=1724598305" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Entrepreneurship
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1343821286#gid=1343821286" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Finance
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=578729399#gid=578729399" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Food Technology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=438193740" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Hospitality Management (FS)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1357872221#gid=1357872221" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Hospitality Management (T)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1799610607#gid=1799610607" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Interdisciplinary Studies
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1526863526#gid=1526863526" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Information Technology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=2003414995#gid=2003414995" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • LIACOM
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1586264708#gid=1586264708" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Management Accounting
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=362309357#gid=362309357" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Mass Communication
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1496238091#gid=1496238091" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Materials Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1383552989#gid=1383552989" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Marketing
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=1811981994" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Nursing
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit#gid=1288372434" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Operations Management (FS)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=2138837785#gid=2138837785" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Operations Management (T)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=2106052885#gid=2106052885" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Political Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1XjK9jWZo90VT0h87ANRXtv0hgPoZKTtt/edit?gid=1033403691#gid=1033403691" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Psychology
            </a>
          </div>
        </div>

        {/* Graduate Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#006633',
            marginBottom: '1rem',
            borderBottom: '2px solid #006633',
            paddingBottom: '0.5rem'
          }}>
            Graduate Programs
          </h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1652165966#gid=1652165966" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Business Administration - PP
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1556662772#gid=1556662772" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Business Administration - T
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1805193453#gid=1805193453" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Business Administration - Human Resource Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=187219272#gid=187219272" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Science in Hotel & Restaurant Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=182300704#gid=182300704" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Educational Leadership
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=878480500#gid=878480500" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - English
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1271210399#gid=1271210399" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - English Language
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=44081702#gid=44081702" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Marriage & Family
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1649721836#gid=1649721836" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Social Studies
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=149653329#gid=149653329" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Physical Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=788693897#gid=788693897" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Arts in Teaching - General Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1321904057#gid=1321904057" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Mathematics
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=195768359#gid=195768359" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Reading, Language & Literature
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=1689132796#gid=1689132796" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Chemistry
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1764320064#gid=1764320064" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Early Childhood Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=1520299368#gid=1520299368" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Education - Filipino
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1737182362#gid=1737182362" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Education - Natural Sciences
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=2056080139#gid=2056080139" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Arts in Education - Special Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1070976685#gid=1070976685" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Education - Youth Ministry
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=194714674#gid=194714674" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Educational Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1223541887#gid=1223541887" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Arts in Psychology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=422321408#gid=422321408" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Arts in Guidance & Counseling
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=310690460#gid=310690460" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Environmental Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=1116369841#gid=1116369841" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Engineering - Electronics & Communications Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=1903449216#gid=1903449216" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Engineering - Electrical Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=642687628#gid=642687628" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Environmental Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=2102999701#gid=2102999701" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Information Technology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=191340699#gid=191340699" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Arts - Conflict & Reconciliation Studies
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=347109241#gid=347109241" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Public Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1fZQllTIFwNrgsRl5V7NV5UbspL64py3a/edit?gid=799163276#gid=799163276" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master in Nursing
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=2055918684#gid=2055918684" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Science in Architecture
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=200452251#gid=200452251" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Science in Teaching Computer Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Ii6WLmfZSMQPhpIF0tSiakfD1swEM8lq/edit?gid=751998567#gid=751998567" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Master of Library Science
            </a>
          </div>
        </div>

        {/* Medicine Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#006633',
            marginBottom: '1rem',
            borderBottom: '2px solid #006633',
            paddingBottom: '0.5rem'
          }}>
            Medicine
          </h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://docs.google.com/spreadsheets/d/1XrWlAjYSxeAhn4wNTUdNNutyeHGEcl97/edit?gid=2065174322#gid=2065174322" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • College of Medicine
            </a>
          </div>
        </div>

        {/* Law Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#006633',
            marginBottom: '1rem',
            borderBottom: '2px solid #006633',
            paddingBottom: '0.5rem'
          }}>
            Law
          </h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://docs.google.com/spreadsheets/d/1yAqDdbDggmWVWbCH_FUEzXCYAtE1ftam/edit?gid=1887009511#gid=1887009511" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • SCRA vols. 1 to 965
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1yAqDdbDggmWVWbCH_FUEzXCYAtE1ftam/edit?gid=1177751954#gid=1177751954" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • List of Philippine Reports
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1yAqDdbDggmWVWbCH_FUEzXCYAtE1ftam/edit?gid=681704835#gid=681704835" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • List of Philippine Reports Annotated
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1yAqDdbDggmWVWbCH_FUEzXCYAtE1ftam/edit?gid=554846316#gid=554846316" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • List of CODAL
            </a>
          </div>
        </div>

        {/* Dissertation Section */}
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '700',
            color: '#006633',
            marginBottom: '1rem',
            borderBottom: '2px solid #006633',
            paddingBottom: '0.5rem'
          }}>
            Doctoral Dissertations
          </h3>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1055895750#gid=1055895750" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Nursing
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=971950397#gid=971950397" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=39638707#gid=39638707" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy Major in Educational Leadership
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=266395215#gid=266395215" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doc of Education Major in Educational Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1707328788#gid=1707328788" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1589904363#gid=1589904363" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Applied Linguistics
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1641340298#gid=1641340298" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Business Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=872352693#gid=872352693" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Development Studies
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1653606309#gid=1653606309" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Mathematics Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1074677373#gid=1074677373" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Religious Studies
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=459167589#gid=459167589" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Major Education in Religious Education and Values
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1565230253#gid=1565230253" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Development Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1289172196#gid=1289172196" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Communication
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=622073636#gid=622073636" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in History
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=925134302#gid=925134302" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Technology Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=55004334#gid=55004334" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Rural Development
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=797260881#gid=797260881" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Science Education
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=587564084#gid=587564084" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy Major in Psychology
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1931930630#gid=1931930630" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor in Management Major in Human Resource Management
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1472171700#gid=1472171700" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Environmental Engineering
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1980393538#gid=1980393538" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor in Public Administration
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=614972432#gid=614972432" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Environmental Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=345545645#gid=345545645" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Education (Curriculum Development)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=236030421#gid=236030421" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Education (Physical Education)
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1182543235#gid=1182543235" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in English
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1642237977#gid=1642237977" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy in Science
            </a>
            <a href="https://docs.google.com/spreadsheets/d/1Nu-b0bMk5pdP4hgi4uTmFtOVdPl6f0J0/edit?gid=1878377985#gid=1878377985" target="_blank" rel="noopener noreferrer" style={{ color: '#006633', textDecoration: 'none', fontSize: '0.95rem', lineHeight: '1.5' }}>
              • Doctor of Philosophy (Social Science)
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'online-resources',
    title: 'ONLINE RESOURCES',
    content: (
      <div>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: '700',
          color: '#006633',
          marginBottom: '1rem',
          borderBottom: '2px solid #006633',
          paddingBottom: '0.5rem',
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
              One of the world&apos;s most extensive multidisciplinary collections of online resources covering life, health, social and physical sciences, and humanities. Features journals, books, and reference works.
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
              Premier platform for peer-reviewed scholarly literature, offering access to scientific, technical, and medical research. Features journals, books, and reference works from Elsevier&apos;s extensive collection.
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
          fontSize: '1.3rem',
          fontWeight: '700',
          color: '#006633',
          margin: '3rem 0 1rem',
          borderBottom: '2px solid #006633',
          paddingBottom: '0.5rem',
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
                ELibraryUSA can be accessed only at the American corner.               To have your eLibraryUSA Personal Account please see us at the LRC office for more information. The American Corner is located on the Ground floor of the HEU Learning Resource Center.
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
          fontSize: '1.3rem',
          fontWeight: '700',
          color: '#006633',
          margin: '3rem 0 1rem',
          borderBottom: '2px solid #006633',
          paddingBottom: '0.5rem',
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
