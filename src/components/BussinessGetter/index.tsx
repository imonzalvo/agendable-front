import React, { useEffect, Dispatch, SetStateAction } from 'react';
import { Alert } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { get } from 'lodash';

import PageLoading from '@/components/PageLoading';
import { GetBusinessByHandle } from './queries';
import {
  GetBusinessByHandle as IGetBusinessByHandle,
  GetBusinessByHandle_businessByHandle_items,
  GetBusinessByHandle_businessByHandle_items_branches_items,
} from './__generated__/GetBusinessByHandle';

export default function BusinessGetter({
  children,
  setBusiness,
  handle,
}: {
  children: any;
  setBusiness: Dispatch<
    SetStateAction<{ businessId: string; businessName: string; branches: never[] }>
  >;
  handle: string;
}) {
  const { loading, data, error } = useQuery<IGetBusinessByHandle>(GetBusinessByHandle, {
    variables: { handle },
  });
  useEffect(() => {
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
        setBusiness({ businessId: business.id, businessName: business.name, branches });
      }
    }
  }, [data]);

  if (loading) {
    return <PageLoading />;
  }

  if (error) {
    return <Alert message="There was an error" description={JSON.stringify(error)} type="error" />;
  }

  return children;
}
