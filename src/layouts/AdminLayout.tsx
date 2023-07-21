import React, { useContext, useState, createContext } from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import { Button, Layout, Menu } from 'antd';
import { match, useHistory, useLocation } from 'react-router-dom';
import { useResponsive } from 'react-hooks-responsive';
import { formatMessage } from 'umi-plugin-locale';

import { isAntDesignPro, getUrl } from '@/utils/utils';
import AuthLayout from '@/layouts/AuthLayout';
import { AuthContext } from '@/layouts';
import { BusinessContext } from '@/components/BussinessGetter';
import { SettingOutlined, CalendarOutlined, LayoutOutlined } from '@ant-design/icons';
import { AnimatedLayout, ButtonFooter } from './styles';

const { Content, Header, Sider, Footer } = Layout;

export const SiderContext = createContext({
  isCollapsed: true,
  isDisplayed: false,
});

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
  const history = useHistory();
  const location = useLocation();
  const [isCollapsed, setCollapsed] = useState(true);
  const { children, settings } = props;
  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 480,
    md: 576,
    lg: 768,
  });

  const getTab = () => {
    if (location.pathname.includes('settings')) {
      return ['2'];
    }
    return ['1'];
  };

  const displaySider = screenIsAtLeast('lg');

  const renderSider = () => {
    return (
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={value => setCollapsed(value)}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 22,
        }}
      >
        <div
          className="logo"
          style={{
            height: 64,
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {business?.landing?.displayName}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={getTab()}>
          <Menu.Item
            key="1"
            style={{ marginTop: 0 }}
            icon={<CalendarOutlined />}
            onClick={() => history.push(getUrl('admin'))}
          >
            {formatMessage({ id: 'navBar.home' })}
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<SettingOutlined />}
            onClick={() => history.push(getUrl('admin/settings/business'))}
          >
            {formatMessage({ id: 'navBar.settings' })}
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<LayoutOutlined />}
            onClick={() => history.push(getUrl('admin/landing-settings'))}
          >
            {formatMessage({ id: 'navBar.landing-settings' })}
          </Menu.Item>
        </Menu>
      </Sider>
    );
  };

  const renderFooter = () => {
    return (
      <Footer
        style={{
          position: 'fixed',
          display: 'flex',
          bottom: 0,
          width: '100%',
          zIndex: 30,
          backgroundColor: '#001529',
          height: 56,
          padding: 0,
        }}
      >
        <ButtonFooter
          isSelected={getTab().includes('1')}
          onClick={() => history.push(getUrl('admin'))}
        >
          <CalendarOutlined />
          {formatMessage({ id: 'navBar.home' })}
        </ButtonFooter>
        <ButtonFooter
          isSelected={getTab().includes('2')}
          onClick={() => history.push(getUrl('admin/settings/business'))}
        >
          <SettingOutlined />
          {formatMessage({ id: 'navBar.settings' })}
        </ButtonFooter>
      </Footer>
    );
  };

  return (
    <Layout>
      {displaySider && renderSider()}
      <AnimatedLayout className="site-layout" isCollapsed={isCollapsed} isDisplayed={displaySider}>
        <Header
          className="site-layout-background"
          style={{ position: 'fixed', zIndex: 100, width: '100%' }}
        >
          {/* <SelectLang isAdmin /> */}
        </Header>
        <Content
          style={{
            paddingTop: 64,
            paddingLeft: 0,
            margin: 20,
            paddingBottom: displaySider ? 0 : 56,
          }}
        >
          <SiderContext.Provider value={{ isCollapsed, isDisplayed: displaySider }}>
            {children}
          </SiderContext.Provider>
        </Content>
      </AnimatedLayout>
      {!displaySider && renderFooter()}
    </Layout>
  );
};

export default (props: any) => (
  <AuthLayout>
    <AdminLayout {...props} />
  </AuthLayout>
);
