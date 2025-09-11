import React from 'react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ReservationIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M19.647 4.706h-1.177V3.53c0-.65-.527-1.177-1.176-1.177s-1.177.528-1.177 1.177v1.176H7.883V3.53c0-.65-.528-1.177-1.177-1.177-.65 0-1.176.528-1.176 1.177v1.176H4.353C3.055 4.706 2 5.76 2 7.059v12.94c0 1.3 1.055 2.354 2.353 2.354h15.294c1.299 0 2.353-1.055 2.353-2.353V7.059c0-1.3-1.054-2.353-2.353-2.353zm0 15.294H4.353V9.412h15.294v10.588z" fill="currentColor"/>
  </svg>
);

export const BookIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M21 4.087c0-.624-.504-1.13-1.125-1.13h-2.25V1.826c0-.624-.504-1.13-1.125-1.13H3.375C2.754.696 2.25 1.202 2.25 1.826v16.956c0 .624.504 1.13 1.125 1.13h2.25v1.13c0 .625.504 1.131 1.125 1.131h13.125c.621 0 1.125-.506 1.125-1.13V4.087zM4.5 17.652V3.087h10.875v14.565H4.5zm13.125 2.261H7.875v-1.13h9c.621 0 1.125-.507 1.125-1.131V5.217h1.125v14.696h-1.5z" fill="currentColor"/>
  </svg>
);

export const RenewalIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M20.453 12c0-4.87-3.95-8.82-8.82-8.82-3.41 0-6.37 1.93-7.83 4.76-.15.29-.11.64.1.89.21.25.56.35.87.23.31-.11.53-.39.53-.72 0-.06.01-.12.02-.18 1.27-2.38 3.83-4.01 6.77-4.01 4.21 0 7.63 3.42 7.63 7.63 0 4.21-3.42 7.63-7.63 7.63-2.95 0-5.51-1.64-6.77-4.02-.01-.06-.02-.12-.02-.18 0-.33-.22-.61-.53-.72-.31-.11-.66-.02-.87.23-.21.25-.25.6-.1.89 1.46 2.83 4.42 4.76 7.83 4.76 4.87 0 8.82-3.95 8.82-8.82z" fill="currentColor"/>
    <path d="M11.633 7.57c0-.414-.336-.75-.75-.75s-.75.336-.75.75v5c0 .414.336.75.75.75h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-2.75v-4.25z" fill="currentColor"/>
  </svg>
);

export const CirculationIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M19 2H8.5C7.12 2 6 3.12 6 4.5v11C6 16.88 7.12 18 8.5 18H19c1.38 0 2.5-1.12 2.5-2.5v-11C21.5 3.12 20.38 2 19 2zm-2 12h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5zm0-3h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5zm0-3h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5s-.22.5-.5.5z" fill="currentColor"/>
    <path d="M5 6.5v11C5 18.88 6.12 20 7.5 20H18c.55 0 1 .45 1 1s-.45 1-1 1H7.5C5.01 22 3 19.99 3 17.5v-11c0-.55.45-1 1-1s1 .45 1 1z" fill="currentColor"/>
  </svg>
);

export const LiteracyIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" fill="currentColor"/>
  </svg>
);

export const DeliveryIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="currentColor"/>
  </svg>
);

export const ReferenceIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
    <path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6z" fill="currentColor"/>
  </svg>
);

export const PrintingIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="currentColor"/>
  </svg>
);

export const ResearcherIcon = ({ className, style }: IconProps) => (
  <svg style={style} className={className} viewBox="0 0 24 24" fill="none">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor"/>
  </svg>
);
