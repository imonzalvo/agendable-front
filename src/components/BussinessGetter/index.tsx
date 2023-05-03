import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { get } from 'lodash';

import PageLoading from '@/components/PageLoading';
import PageNotFound from '@/pages/404';
import { parsePathnameHandle } from '@/utils/parsePathnameHandle';
import { GET_BUSINESS_BY_HANDLE } from './queries';
import {
  GetBusinessByHandle as IGetBusinessByHandle,
  GetBusinessByHandle_businessByHandle_items,
  GetBusinessByHandle_businessByHandle_items_branches,
} from './__generated__/GetBusinessByHandle';

export const BusinessContext = createContext({
  business: {
    businessName: '',
    loading: true,
    businessId: '',
    branches: [{ id: '' }],
  },
});

export default function BusinessGetter({
  children,
  pathname,
  subdomain,
}: {
  children: any;
  pathname: string;
  subdomain: string | null;
}) {
  const initialBusiness = localStorage.getItem('business');
  const initialState = initialBusiness
    ? JSON.parse(initialBusiness)
    : { businessName: '', loading: true };
  const [business, setBusiness] = useState(initialState);
  const [getBusinessByHandle, { data, error }] = useLazyQuery<IGetBusinessByHandle>(
    GET_BUSINESS_BY_HANDLE,
  );

  const pathnameHandle = parsePathnameHandle(pathname);

  useEffect(() => {
    console.log('name', subdomain, pathnameHandle);
    const businessHandle = subdomain || pathnameHandle;
    if (businessHandle) {
      if (
        localStorage.getItem('businessHandle') !== businessHandle ||
        !localStorage.getItem('business')
      ) {
        localStorage.removeItem('business');
        localStorage.setItem('businessHandle', businessHandle);
        getBusinessByHandle({ variables: { handle: businessHandle } });
      } else {
        setBusiness({
          ...business,
          loading: false,
        });
      }
    } else {
      localStorage.removeItem('business');
      localStorage.removeItem('businessHandle');
    }
  }, [pathnameHandle, subdomain]);

  // TODO: Refactor this method using optional chaining.
  useEffect(() => {
    console.log('data', data);
    if (data) {
      const businessData: GetBusinessByHandle_businessByHandle_items = get(
        data,
        'getBusinessByHandle',
      );
      if (businessData) {
        const branches: GetBusinessByHandle_businessByHandle_items_branches | null = get(
          businessData,
          'branches',
        );
        if (branches) {
          localStorage.setItem(
            'business',
            JSON.stringify({
              businessId: businessData.id,
              businessName: businessData.name,
              branches,
            }),
          );
          setBusiness({
            businessId: businessData.id,
            businessName: businessData.name,
            branches,
            loading: false,
          });
        } else {
          setBusiness({
            businessName: '',
            loading: false,
          });
        }
      } else {
        setBusiness({
          businessName: '',
          loading: false,
        });
      }
    }
  }, [data]);

  if (business.loading) {
    return <PageLoading />;
  }

  if (error) {
    return <Alert message="There was an error" description={JSON.stringify(error)} type="error" />;
  }

  if (pathnameHandle && !(get(data, 'businessByHandle') || business)) {
    return <PageNotFound />;
  }

  return <BusinessContext.Provider value={{ business }}>{children}</BusinessContext.Provider>;
}
