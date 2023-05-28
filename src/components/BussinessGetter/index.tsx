import React, { useState, useEffect, createContext } from 'react';
import { Alert } from 'antd';
import { useLazyQuery } from '@apollo/client';
import { get } from 'lodash';

import PageLoading from '@/components/PageLoading';
import PageNotFound from '@/pages/404';
import { parsePathnameHandle } from '@/utils/parsePathnameHandle';
import { GET_BUSINESS_BY_HANDLE } from './queries';

import {
  GET_BUSINESS_BY_HANDLE_getBusinessByHandle as IGetBusinessByHandle,
  GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches,
  GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing,
  GET_BUSINESS_BY_HANDLE_getBusinessByHandle_Configuration,
} from './__generated__/GET_BUSINESS_BY_HANDLE';

export const BusinessContext = createContext({
  business: {
    businessName: '',
    loading: true,
    businessId: '',
    branches: [{ id: '' }],
    landing: {
      id: '',
    },
    configuration: {
      id: '',
    },
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
    const businessHandle = pathnameHandle;

    // TODO: Removed this. Should think about a smarter way to cache things
    // if (businessHandle) {
    //   if (
    //     localStorage.getItem('businessHandle') !== businessHandle ||
    //     !localStorage.getItem('business')
    //   ) {
    //     localStorage.removeItem('business');
    //     localStorage.setItem('businessHandle', businessHandle);
    //     getBusinessByHandle({ variables: { handle: businessHandle } });
    //   } else {
    //     setBusiness({
    //       ...business,
    //       loading: false,
    //     });
    //   }
    // } else {
    //   localStorage.removeItem('business');
    //   localStorage.removeItem('businessHandle');
    // }
    getBusinessByHandle({ variables: { handle: businessHandle } });
  }, [pathnameHandle, subdomain]);

  // TODO: Refactor this method using optional chaining.
  useEffect(() => {
    console.log('data', data);
    if (data) {
      const businessData: IGetBusinessByHandle = get(data, 'getBusinessByHandle');
      if (businessData) {
        const branches: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_branches[] | null = get(
          businessData,
          'branches',
        );
        const landing: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_landing | null = get(
          businessData,
          'landing',
        );
        const configuration: GET_BUSINESS_BY_HANDLE_getBusinessByHandle_Configuration | null = get(
          businessData,
          'Configuration',
        );
        if (branches) {
          localStorage.setItem(
            'business',
            JSON.stringify({
              businessId: businessData.id,
              businessName: businessData.name,
              website: businessData.website,
              instagramUrl: businessData.instagramUrl,
              facebookUrl: businessData.facebookUrl,
              branches,
              landing,
              configuration,
            }),
          );
          setBusiness({
            businessId: businessData.id,
            businessName: businessData.name,
            website: businessData.website,
            instagramUrl: businessData.instagramUrl,
            facebookUrl: businessData.facebookUrl,
            branches,
            landing,
            loading: false,
            configuration,
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
