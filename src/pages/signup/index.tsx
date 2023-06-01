import React, { useContext, useState } from 'react';
import router from 'umi/router';

import { AuthContext } from '@/layouts';
import { getUrl } from '@/utils/utils';

export default function Signup() {
  const { user, isAuthenticated } = useContext(AuthContext);

  console.log('hola?', user);
  let path;

  if (!!user && !user.business) {
    path = 'signup/setup-business';
  }

  if (!!user && !!user.business && !!user.business.id) {
    path = 'signup/setup-services';
  }

  router.push(path);
  return null;
}
