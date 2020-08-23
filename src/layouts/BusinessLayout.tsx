import React, { useContext } from 'react';
import { BasicLayoutProps } from '@ant-design/pro-layout';
// import { formatMessage } from 'umi-plugin-locale';

// import icon from '@/assets/agendable-icon.svg';
// import { Login, SignUp } from '@/components/AuthFlow';
import { BusinessContext } from '@/components/BussinessGetter';
import Error404 from '@/pages/404';
import { GlobalStyles } from './styles';
// import { AuthContext } from '.';
// import SelectLang from '@/components/SelectLang';

export interface BusinessLayoutProps extends BasicLayoutProps {
  children: any;
}

export default function BusinessLayout({ children }: BusinessLayoutProps) {
  // const [whichAuthModalVisible, setAuthModalVisible] = useState<'LOGIN' | 'SIGNUP' | null>(null);
  // const { isAuthenticated, setAuthenticated } = useContext(AuthContext);

  const {
    business: { businessName },
  } = useContext(BusinessContext);

  // const logout = () => {
  //   // TODO: LOGOUT
  //   setAuthenticated(false);
  //   setAuthModalVisible(null);
  // };

  // const renderRightContent = () => {
  //   if (isAuthenticated) {
  //     return (
  //       <>
  //         <SelectLang />
  //         <Button onClick={logout}>{formatMessage({ id: 'navBar.signOut' })}</Button>
  //       </>
  //     );
  //   }
  //   return (
  //     <>
  //       <SelectLang />
  //       <Button onClick={() => setAuthModalVisible('LOGIN')} style={{ alignSelf: 'center' }}>
  //         {formatMessage({ id: 'navBar.signIn' })}
  //       </Button>
  //       <Button
  //         onClick={() => setAuthModalVisible('SIGNUP')}
  //         style={{ marginLeft: 10, alignSelf: 'center' }}
  //       >
  //         {formatMessage({ id: 'navBar.signUp' })}
  //       </Button>
  //     </>
  //   );
  // };

  if (!businessName) return <Error404 />;

  return (
    <>
      <GlobalStyles />
      {children}
      {/* TODO: Add login/out */}
      {/* <Modal
        title={formatMessage({ id: 'navBar.signIn' })}
        visible={whichAuthModalVisible === 'LOGIN' && !isAuthenticated}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <Login />
      </Modal>
      <Modal
        title={formatMessage({ id: 'navBar.signUp' })}
        visible={whichAuthModalVisible === 'SIGNUP' && !isAuthenticated}
        footer={null}
        onCancel={() => setAuthModalVisible(null)}
      >
        <SignUp />
      </Modal> */}
    </>
  );
}
