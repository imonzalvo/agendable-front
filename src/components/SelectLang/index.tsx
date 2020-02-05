import { Icon, Menu, Typography } from 'antd';
import { formatMessage, getLocale, setLocale } from 'umi-plugin-locale';

import { ClickParam } from 'antd/es/menu';
import React from 'react';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

const { Text } = Typography;

interface SelectLangProps {
  className?: string;
  isAdmin?: boolean;
}
const SelectLang: React.FC<SelectLangProps> = props => {
  const { className, isAdmin } = props;
  const selectedLang = getLocale();
  const changeLang = ({ key }: ClickParam): void => {
    setLocale(key, false);
  };
  const locales = ['en-US', 'es-ES'];
  const languageLabels = {
    'en-US': 'English',
    'es-ES': 'Spanish',
  };

  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>{languageLabels[locale]}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span
        style={{ paddingRight: 38, color: isAdmin ? 'white' : 'rgba(0, 0, 0, 0.65)' }}
        className={classNames(styles.dropDown, className)}
      >
        <Icon
          style={{ paddingRight: 4 }}
          type="global"
          title={formatMessage({ id: 'navBar.lang' })}
        />
        <Text style={{ color: isAdmin ? 'white' : 'rgba(0, 0, 0, 0.65)' }}>
          {languageLabels[selectedLang]}
        </Text>
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
