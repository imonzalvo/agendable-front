import React from 'react';
import Sticky from 'react-sticky-el';

interface ResourceHeaderProps {
  label: React.ReactNode;
}

export default function ResourceHeader({ label }: ResourceHeaderProps) {
  return (
    <Sticky
      boundaryElement=".rbc-calendar"
      stickyStyle={{
        zIndex: 20,
        marginTop: 120,
        backgroundColor: '#f0f2f5',
        borderBottom: '1px solid #ddd',
      }}
      style={{ position: 'relative', zIndex: 20 }}
      topOffset={-120}
    >
      {label}
    </Sticky>
  );
}
