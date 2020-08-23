import React, { useContext } from 'react';
import { Row, Col, Typography, Button, Card, Layout, Menu, Icon } from 'antd';
import router from 'umi/router';
import { formatMessage } from 'umi-plugin-locale';

import { BusinessLayoutProps } from '@/layouts/BusinessLayout';

import { BusinessContext } from '@/components/BussinessGetter';
import { getUrl } from '@/utils/utils';
import styles from './businessLandingStyles.less';
import icon from '@/assets/agendable-icon.svg';

const { Header, Footer } = Layout;

const businessMock = {
  landing: {
    imageGallery: [
      {
        id: 'asdf',
        src: 'https://i.ytimg.com/vi/dsRzG_xVPmE/maxresdefault.jpg',
      },
    ],
    displayName: "Kevo's Barbershop",
    cta: 'Para los mas facheros',
    description: 'Crack, no podes estar fachero sin un buen fade. Agendate ya.',
  },
  instagramURL: 'sdfasdf',
  facebookURL: 'asdfasdf',
  websiteURL: 'asdfasdf',
};

// export interface BusinessHomeProps extends BusinessLayoutProps {}

export default function BusinessHome(props: Partial<BusinessLayoutProps>) {
  const {
    business: { businessName },
  } = useContext(BusinessContext);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Typography.Title
          level={4}
          style={{
            height: 31,
            margin: '16px 24px 16px 0',
            float: 'left',
            color: '#000',
          }}
        >
          {businessName}
        </Typography.Title>

        <Menu
          theme="light"
          mode="horizontal"
          style={{
            lineHeight: '64px',
            border: 'none',
            backgroundColor: 'rgba(255,255,255,0)',
            color: '#000',
          }}
        >
          <Button
            type="primary"
            icon="carry-out"
            onClick={() => {
              router.push(getUrl('book'));
            }}
            size="large"
          >
            {formatMessage({ id: 'button.booking' })}
          </Button>
        </Menu>
      </Header>
      <Row type="flex" justify="space-between" align="middle" className={styles.mainRow}>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 24, order: 2 }}
          lg={{ span: 8, order: 1 }}
        >
          <Card
            className={styles.ctaContainer}
            bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}
            bordered={false}
          >
            <Typography.Title className={styles.displayName}>
              {businessMock.landing.displayName}
            </Typography.Title>
            <Typography.Title className={styles.tagline}>
              {businessMock.landing.cta}
            </Typography.Title>
            <Typography.Paragraph className={styles.description}>
              {businessMock.landing.description}
            </Typography.Paragraph>
            <Button
              type="link"
              icon="carry-out"
              onClick={() => {
                router.push(getUrl('book'));
              }}
              size="large"
              className={styles.ctaButton}
            >
              {formatMessage({ id: 'button.booking' })}
            </Button>
          </Card>
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 24, order: 1 }}
          lg={{ span: 15, order: 2 }}
          className={styles.imageContainer}
        >
          <img src={businessMock.landing.imageGallery[0].src} className={styles.image} />
        </Col>
      </Row>
      <Footer className={styles.footer}>
        <div style={{ textAlign: 'center' }}>
          <img
            src={icon}
            style={{ height: 48, width: 48, filter: 'grayscale(100%)' }}
            alt="Sitio creado con Agendable"
          />
        </div>
        <div>
          {!!businessMock.instagramURL && (
            <a
              href={businessMock.instagramURL}
              className={styles.footerLink}
              style={{ marginRight: 12 }}
            >
              <Icon type="instagram" />
            </a>
          )}
          {!!businessMock.facebookURL && (
            <a href={businessMock.facebookURL} className={styles.footerLink}>
              <Icon type="facebook" />
            </a>
          )}
        </div>
      </Footer>
    </Layout>
  );
}
