import React from 'react';
import { Row, Col, Card, Grid } from 'antd';

export default function LandingSettingsLayout({ children, history }) {
  return (
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
        <Card>{children}</Card>
      </Col>
    </Row>
  );
}
