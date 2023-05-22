import React from 'react';
import { Row, Col, Menu, Card, Grid } from 'antd';
import {
  SettingOutlined,
  ShopOutlined,
  LayoutOutlined,
  AppstoreAddOutlined,
} from '@ant-design/icons';
import router from 'umi/router';

import Spacer from '@/components/common/Spacer';

const { useBreakpoint } = Grid;

export default function SettingsLayout({ children, history }) {
  const screens = useBreakpoint();

  const handleMenuClick = e => {
    router.push(e.key);
  };

  const parsedPathname = history.location.pathname.split('/');

  return (
    <Row>
      <Col xs={{ span: 24, offset: 0 }} md={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
        <Menu
          mode={screens.sm ? 'horizontal' : 'vertical'}
          onClick={handleMenuClick}
          selectedKeys={[parsedPathname[parsedPathname.length - 1]]}
        >
          <Menu.Item key="business" icon={<SettingOutlined />}>
            Negocio
          </Menu.Item>
          <Menu.Item key="services" icon={<AppstoreAddOutlined />}>
            Servicios
          </Menu.Item>
          <Menu.Item key="employees" icon={<AppstoreAddOutlined />}>
            Empleados
          </Menu.Item>
        </Menu>
        <Spacer height={18} />
        <Card>{children}</Card>
      </Col>
    </Row>
  );
}
