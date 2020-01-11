import React from 'react';
import Sticky from 'react-sticky-el';

interface ResourceHeaderProps {
  label: React.ReactNode;
}

export default function ResourceHeader({ label }: ResourceHeaderProps) {
  return (
    <div
      style={{
        zIndex: 20,
        borderBottom: '1px solid #ddd',
        backgroundColor: '#f0f2f5',
      }}
    >
      {label}
    </div>
  );
}
