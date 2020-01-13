import React, { useState, useContext } from 'react';
import { Button, Modal, Typography } from 'antd';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-locale';

import icon from '@/assets/agendable-icon.svg';
import { Login, SignUp } from '@/components/AuthFlow';
import { BusinessContext } from '@/components/BussinessGetter';
import Error404 from '@/pages/404';
import { GlobalStyles } from './styles';

export interface BusinessLayoutProps extends BasicLayoutProps {
  children: any;
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  const [whichAuthModalVisible, setAuthModalVisible] = useState<'LOGIN' | 'SIGNUP' | null>(null);
  const {
    business: { businessName },
  } = useContext(BusinessContext);

  if (!businessName) return <Error404 />;

  return (
    <>
      <GlobalStyles />
      {/* TODO: Replace this layout */}
      <ProLayout
        title={businessName}
        logo={null}
        navTheme="light"
        layout="topmenu"
        rightContentRender={() => (
          <>
            <Button onClick={() => setAuthModalVisible('LOGIN')} style={{ alignSelf: 'center' }}>
              {formatMessage({ id: 'navBar.signIn' })}
            </Button>
            <Button
              onClick={() => setAuthModalVisible('SIGNUP')}
              style={{ marginLeft: 10, alignSelf: 'center' }}
            >
              {formatMessage({ id: 'navBar.signUp' })}
            </Button>
          </>
        )}
        footerRender={() => (
          <div style={{ width: '100%', textAlign: 'center', marginBottom: 20 }}>
            <img src={icon} style={{ height: 48, width: 48 }} alt="Agendable" />
            <Typography.Text type="secondary" style={{ display: 'block' }}>
              Con el poder de <a href="https://agendable.io">Agendable</a>
            </Typography.Text>
          </div>
        )}
      >
        {children}
      </ProLayout>
      <Modal
        title={formatMessage({ id: 'navBar.signIn' })}
        visible={whichAuthModalVisible === 'LOGIN'}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <Login />
      </Modal>
      <Modal
        title={formatMessage({ id: 'navBar.signUp' })}
        visible={whichAuthModalVisible === 'SIGNUP'}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <SignUp />
      </Modal>
    </>
  );
}
