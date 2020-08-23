import React from 'react';

interface SpacerProps {
  width?: number;
  height?: number;
  grow?: number;
  shrink?: number;
}

export default function Spacer(p: SpacerProps) {
  return (
    <div
      style={{
        width: p.width,
        height: p.height,
        flexGrow: p.grow,
        flexShrink: p.shrink,
      }}
    />
  );
}
