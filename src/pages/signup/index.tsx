import React, { useContext, useEffect, useState } from 'react';
import router from 'umi/router';

import { AuthContext } from '@/layouts';

export default function Signup() {
  const { user, isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    let path;

    if (!!user) {
      if (!!user && !user.business) {
        path = 'signup/setup-business';
      }

      if (!!user && !!user.business && !!user.business.id) {
        path = 'signup/setup-services';
      }

      if (!!user && !!user.business && !!user.business.id && !!user.business.services) {
        path = 'signup/setup-professionals';
      }

      router.push(path);
    }
  }, [user]);

  return null;
}
