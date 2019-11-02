import React, { useContext } from 'react';
import { Spin } from 'antd';

import { AuthContext } from '.';
import SignUp from '@/components/AuthFlow';

export default function AuthLayout({ children }: { children: any }) {
  const { isAuthenticated, isAuthCheckLoading } = useContext(AuthContext);

  if (isAuthCheckLoading) return <Spin size="large" />;

  return isAuthenticated ? <>{children}</> : <SignUp />;
}
