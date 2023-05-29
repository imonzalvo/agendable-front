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

export default function BusinessHome(props: Partial<BusinessLayoutProps>) {
  const {
    business: { landing: businessLanding, website, instagramUrl, facebookUrl },
  } = useContext(BusinessContext);

  console.log('Actual business', businessLanding, website, instagramUrl, facebookUrl);
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        {businessLanding.logoUrl ? (
          <img
            src={businessLanding.logoUrl}
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
            {businessLanding.displayName}
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
              {businessLanding.displayName}
            </Typography.Title>
            <Typography.Title className={styles.tagline}>{businessLanding.cta}</Typography.Title>
            <Typography.Paragraph className={styles.description}>
              {businessLanding.description}
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
          <img src={businessLanding.images[0].url} className={styles.image} />
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
          {!!website && (
            <a
              href={website}
              className={styles.footerLink}
              style={{ marginRight: 12 }}
              target="_blank"
            >
              <GlobalOutlined />
            </a>
          )}
          {!!instagramUrl && (
            <a
              href={instagramUrl}
              className={styles.footerLink}
              style={{ marginRight: 12 }}
              target="_blank"
            >
              <InstagramOutlined />
            </a>
          )}
          {!!facebookUrl && (
            <a href={facebookUrl} className={styles.footerLink} target="_blank">
              <FacebookOutlined />
            </a>
          )}
        </div>
      </Footer>
    </Layout>
  );
}
