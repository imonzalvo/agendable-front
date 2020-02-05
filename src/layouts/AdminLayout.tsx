import React, { useContext, useState } from 'react';
// import ProLayout, {
//   MenuDataItem,
//   BasicLayoutProps as ProLayoutProps,
//   Settings,
// } from '@ant-design/pro-layout';
import { Button, Layout, Icon, Menu } from 'antd';
import { Auth } from 'aws-amplify';
import { match } from 'react-router-dom';

import { isAntDesignPro } from '@/utils/utils';
import AuthLayout from '@/layouts/AuthLayout';
import { AuthContext } from '@/layouts';
import { BusinessContext } from '@/components/BussinessGetter';
import SelectLang from '@/components/SelectLang';

const { Content, Header, Sider } = Layout;

export interface AdminLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
  settings: Settings;
  match: match<{ businessHandle: string }>;
  children: any;
}
export type AdminLayoutContext = { [K in 'location']: AdminLayoutProps[K] } & {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
};
const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map(item => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return localItem;
  });
const footerRender: AdminLayoutProps['footerRender'] = (_, defaultDom) => {
  if (!isAntDesignPro()) {
    return defaultDom;
  }
  return (
    <>
      {defaultDom}
      <div style={{ padding: '0px 24px 24px', textAlign: 'center' }}>
        <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
            width="82px"
            alt="netlify logo"
          />
        </a>
      </div>
    </>
  );
};
const AdminLayout = (props: AdminLayoutProps) => {
  const { setAuthenticated } = useContext(AuthContext);
  const { business } = useContext(BusinessContext);
  const [isCollapsed, setCollapsed] = useState(true);
  const { children, settings } = props;

  const handleSignOut = () => {
    Auth.signOut().finally(() => {
      setAuthenticated(false);
    });
  };

  return (
    <Layout>
      {/* <Sider
        collapsible
        trigger={null}
        collapsed={isCollapsed}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 100,
        }}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider> */}
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 100, width: '100%' }}>
          {/* <Icon
            // className="trigger"
            type={isCollapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setCollapsed(!isCollapsed)}
            style={{
              fontSize: 18,
              cursor: 'pointer',
              transition: 'color 0.3s',
              color: '#fff',
            }}
          /> */}
          <SelectLang isAdmin />
        </Header>
        <Content style={{ paddingTop: 64, paddingLeft: 0, margin: 20 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default (props: any) => (
  <AuthLayout>
    <AdminLayout {...props} />
  </AuthLayout>
);
