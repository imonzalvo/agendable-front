import React from 'react';
import { Button, Typography } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { setLocale, getLocale } from 'umi-plugin-locale';

import useSubdomain from '@/hooks/useSubdomain';
import themeColorClient from '@/components/SettingDrawer/themeColorClient';
import BusinessIndex from '@/pages/app/$businessHandle';

const { Title } = Typography;

const locale = getLocale();

if (!locale || locale === 'es-ES') {
  setLocale('es-ES');
} else {
  setLocale('en-US');
}

export default () => {
  const isValidSubdomain = useSubdomain();
  return isValidSubdomain ? (
    <BusinessIndex />
  ) : (
    <PageHeaderWrapper>
      <Title>Agendable</Title>
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
