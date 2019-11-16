import React, { useContext } from 'react';
import ProLayout, {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import { Button } from 'antd';
import { Auth } from 'aws-amplify';
import Link from 'umi/link';
import { formatMessage } from 'umi-plugin-react/locale';
import { match } from 'react-router-dom';

import { isAntDesignPro } from '@/utils/utils';
import AuthLayout from '@/layouts/AuthLayout';
import { AuthContext } from '@/layouts';
import { useBusiness } from '@/components/BussinessGetter';

export interface AdminLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
  settings: Settings;
  match: match<{ businessHandle: string }>;
  children: any;
}
export type AdminLayoutContext = { [K in 'location']: AdminLayoutProps[K] } & {
  breadcrumbNameMap: { [path: string]: MenuDataItem };
};
const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => menuList.map(item => {
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
  const business = useBusiness();
  const { children, settings } = props;

  const handleSignOut = () => {
    Auth.signOut().finally(() => {
      setAuthenticated(false);
    });
  };

  return (
    <>
      <ProLayout
        title={`${business ? business.businessName : ''} ADMIN`}
        logo={null}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        breadcrumbRender={(routers = []) => [
          { path: '/', breadcrumbName: formatMessage({ id: 'menu.home', defaultMessage: 'Home' }) },
          ...routers,
        ]}
        itemRender={(route, _params, routes, paths) => {
          const first = routes.indexOf(route) === 0;
          return first ? (
            <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
          ) : (
            <span>{route.breadcrumbName}</span>
          );
        }}
        footerRender={footerRender}
        menuDataRender={menuDataRender}
        formatMessage={formatMessage}
        rightContentRender={() => <Button onClick={handleSignOut}>Sign Out</Button>}
        {...props}
        {...settings}
      >
        {children}
      </ProLayout>
    </>
  );
};

export default (props: any) => (
  <AuthLayout>
    <AdminLayout {...props} />
  </AuthLayout>
);