import React from 'react';
import { Spin } from 'antd';

export default function FullPageSpinner() {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 500,
      }}
    >
      <Spin size="large" />
    </div>
  );
}
