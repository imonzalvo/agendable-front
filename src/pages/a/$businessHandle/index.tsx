import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import router from 'umi/router';

import BusinessLayout, { BusinessLayoutProps } from '@/layouts/BusinessLayout';
import { useBusiness } from '@/components/BussinessGetter';

// export interface BusinessHomeProps extends BusinessLayoutProps {}

export default function BusinessHome(props: Partial<BusinessLayoutProps>) {
  const { businessName } = useBusiness();

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
          <Typography.Title>{businessName}</Typography.Title>
          <Typography.Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis
            imperdiet.
          </Typography.Paragraph>
          <Button
            type="primary"
            onClick={() => {
              router.push('book'); // TODO: This is not going to work locally
            }}
          >
            Agendarse
          </Button>
        </Col>
      </Row>
    </BusinessLayout>
  );
}
