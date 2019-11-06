import React, { useState } from 'react';
import { Button, Modal, Typography } from 'antd';
import ProLayout, { BasicLayoutProps } from '@ant-design/pro-layout';

import icon from '@/assets/agendable-icon.svg';
import { Login, SignUp } from '@/components/AuthFlow';
import { useBusiness } from '@/components/BussinessGetter';

export interface BusinessLayoutProps extends BasicLayoutProps {
  children: any;
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  const [whichAuthModalVisible, setAuthModalVisible] = useState<'LOGIN' | 'SIGNUP' | null>(null);
  const { businessName } = useBusiness();

  return (
    <>
      <ProLayout
        title={businessName}
        logo={null}
        navTheme="light"
        layout="topmenu"
        // menuDataRender={() => [
        //   {
        //     name: 'safsd',
        //     path: '/',
        //   },
        // ]}
        // menuRender={() => <div>hey</div>}
        rightContentRender={() => (
          <>
            <Button onClick={() => setAuthModalVisible('LOGIN')} style={{ alignSelf: 'center' }}>
              Login
            </Button>
            <Button
              onClick={() => setAuthModalVisible('SIGNUP')}
              style={{ marginLeft: 10, alignSelf: 'center' }}
            >
              Sign Up
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
        title="Login"
        visible={whichAuthModalVisible === 'LOGIN'}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <Login />
      </Modal>
      <Modal
        title="Sign Up"
        visible={whichAuthModalVisible === 'SIGNUP'}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <SignUp />
      </Modal>
    </>
  );
}
