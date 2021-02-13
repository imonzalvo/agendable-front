import React, { useContext } from 'react';
import {
  CarryOutOutlined,
  FacebookOutlined,
  InstagramOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { Row, Col, Typography, Button, Card, Layout, Menu } from 'antd';
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
        src: 'https://www.academiadechoferesdelparque.com.uy/img/unidades3.jpg',
      },
    ],
    displayName: 'Academia de Choferes del Parque',
    cta: 'Aprendé a manejar con los que más saben',
    description:
      'En Academia De Chóferes Del Parque funcionamos desde el año 1989 en forma ininterrumpida habiendo formado más de 10.000 conductores',
  },
  logo: 'https://www.academiadechoferesdelparque.com.uy/img/logo.png',
  instagramURL: 'https://instagram.com/academiadelparque',
  facebookURL: 'https://facebook.com/AcademiaDeChoferesDelParque/',
  websiteURL: 'https://www.academiadechoferesdelparque.com.uy/',
};

// export interface BusinessHomeProps extends BusinessLayoutProps {}

export default function BusinessHome(props: Partial<BusinessLayoutProps>) {
  const {
    business: { businessName },
  } = useContext(BusinessContext);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        {businessMock.logo ? (
          <img
            src={businessMock.logo}
            style={{
              width: 200,
              objectFit: 'contain',
            }}
          />
        ) : (
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
        )}

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
            icon={<CarryOutOutlined />}
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
              icon={<CarryOutOutlined />}
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
          {!!businessMock.websiteURL && (
            <a
              href={businessMock.websiteURL}
              className={styles.footerLink}
              style={{ marginRight: 12 }}
              target="_blank"
            >
              <GlobalOutlined />
            </a>
          )}
          {!!businessMock.instagramURL && (
            <a
              href={businessMock.instagramURL}
              className={styles.footerLink}
              style={{ marginRight: 12 }}
              target="_blank"
            >
              <InstagramOutlined />
            </a>
          )}
          {!!businessMock.facebookURL && (
            <a href={businessMock.facebookURL} className={styles.footerLink} target="_blank">
              <FacebookOutlined />
            </a>
          )}
        </div>
      </Footer>
    </Layout>
  );
}
