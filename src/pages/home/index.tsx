import React from 'react';
import { Button, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsExports from '../../aws-exports';

import themeColorClient from '../../components/SettingDrawer/themeColorClient';

Amplify.configure(awsExports);

const { Title } = Typography;

const Home = (): React.ReactNode => (
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

export default withAuthenticator(Home, true);
