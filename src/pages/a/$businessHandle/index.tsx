import React from 'react';
import { Row, Col, Typography, Button } from 'antd';

import BusinessLayout, { BusinessLayoutProps } from '@/layouts/BusinessLayout';

// export interface BusinessHomeProps extends BusinessLayoutProps {}

export default function BusinessHome(props: BusinessLayoutProps) {
  return (
    <BusinessLayout {...props}>
      <Row align="middle" justify="center">
        <Col
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 14, offset: 4 }}
          md={{ span: 12, offset: 6 }}
          lg={{ span: 9, offset: 7 }}
          style={{
            marginTop: 50,
            textAlign: 'center',
          }}
        >
          <Typography.Title>{props.match.params.businessHandle}</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis
            imperdiet.
          </Typography.Paragraph>
          <Button type="primary">Agendarse</Button>
        </Col>
      </Row>
    </BusinessLayout>
  );
}
