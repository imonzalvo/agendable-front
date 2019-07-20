import React from 'react';
import { Button, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import themeColorClient from '../../components/SettingDrawer/themeColorClient';

const { Title } = Typography;

export default (): React.ReactNode => (
  <PageHeaderWrapper>
    <Title>Bienvenido a Agendable!</Title>
    <Button
      size="large"
      type="primary"
      htmlType="submit"
      onClick={() => {
        themeColorClient.changeColor('#FF0000');
      }}
    >
      Cambiar colores
    </Button>
  </PageHeaderWrapper>
);
