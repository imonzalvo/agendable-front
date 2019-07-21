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

const rrr = {
  google_client_id: '997269797206-ir9cl70i56luah9sav5m76d8u1g3f2jp.apps.googleusercontent.com', // Enter your google_client_id here
  facebook_app_id: '381076525880234', // Enter your facebook_app_id here
};

export default withAuthenticator(Home, { federated: rrr });
