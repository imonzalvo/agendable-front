import React, { useEffect } from 'react';
import { Alert } from 'antd';
import { useLazyQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import PageLoading from '@/components/PageLoading';
import PageNotFound from '@/pages/404';
import { parsePathnameHandle } from '@/utils/parsePathnameHandle';
import { GetBusinessByHandle } from './queries';
import {
  GetBusinessByHandle as IGetBusinessByHandle,
  GetBusinessByHandle_businessByHandle_items,
  GetBusinessByHandle_businessByHandle_items_branches_items,
} from './__generated__/GetBusinessByHandle';

export const useBusiness = () => {
  const businessJSON = localStorage.getItem('business');
  return businessJSON ? JSON.parse(businessJSON) : null;
};

export default function BusinessGetter({
  children,
  pathname,
}: {
  children: any;
  pathname: string;
}) {
  const [getBusinessByHandle, { loading, data, error }] = useLazyQuery<IGetBusinessByHandle>(
    GetBusinessByHandle,
  );

  const pathnameHandle = parsePathnameHandle(pathname);

  useEffect(() => {
    if (pathnameHandle) {
      if (localStorage.getItem('businessHandle') !== pathnameHandle) {
        localStorage.removeItem('business');
        localStorage.setItem('businessHandle', pathnameHandle);
        getBusinessByHandle({ variables: { handle: pathnameHandle } });
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (data) {
      const business: GetBusinessByHandle_businessByHandle_items = get(
        data,
        'businessByHandle.items[0]',
      );
      if (business) {
        const branches: [GetBusinessByHandle_businessByHandle_items_branches_items] = get(
          business,
          'branches.items',
        );
        if (branches) {
          localStorage.setItem(
            'business',
            JSON.stringify({ businessId: business.id, businessName: business.name, branches }),
          );
        }
      }
    }
  }, [data]);

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <Alert message="There was an error" description={JSON.stringify(error)} type="error" />;
  }

  if (pathnameHandle && !(get(data, 'businessByHandle.items[0]') || useBusiness())) {
    return <PageNotFound />;
  }

  return children;
}
