import React from 'react';
import { Button, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import useSubdomain from '@/hooks/useSubdomain';
import themeColorClient from '@/components/SettingDrawer/themeColorClient';
import BusinessIndex from '@/pages/a/$businessHandle';

const { Title } = Typography;

export default () => {
  const isValidSubdomain = useSubdomain();
  return isValidSubdomain ? (
    <BusinessIndex />
  ) : (
    <PageHeaderWrapper>
      <Title>Bienvenido a Agendable!</Title>
      <Button
        size="large"
        type="primary"
        htmlType="submit"
        onClick={() => {
          themeColorClient
            .changeColor('#FF0000')
            .then(() => console.log('colors!'))
            .catch(err => console.log('error!', err));
        }}
      >
        Cambiar colores
      </Button>
    </PageHeaderWrapper>
  );
};
