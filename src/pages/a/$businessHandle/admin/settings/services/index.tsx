import React, { useContext, useState } from 'react';
import { Button, Result, PageHeader, List, Avatar, Skeleton, Grid, Drawer } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';

import {
  GetBusinessServicesData as IGetBusinessServicesData,
  GetBusinessServicesDataVariables as IGetBusinessServicesDataVariables,
  GetBusinessServicesData_getBusiness_services,
} from './__generated__/GetBusinessServicesData';
import ServiceCRUD from './ServiceCRUD';

import FullPageSpinner from '@/components/common/FullPageSpinner';
import { GET_BUSINESS_SERVICES_DATA } from './servicesQueries';

const { useBreakpoint } = Grid;

const GlobalStyles = createGlobalStyle`
  .ant-drawer-bottom .ant-drawer-content-wrapper {
    width: 90%;
    max-width: 960px;
    max-height: 90vh;
    left: 0;
    right: 0;
    margin: 0 auto;
    overflow-y: scroll;
    border-radius: 4px 4px 0 0;
  }
`;

export default function Services() {
  const { business } = useContext(BusinessContext);
  const { data, loading, error } = useQuery<
    IGetBusinessServicesData,
    IGetBusinessServicesDataVariables
  >(GET_BUSINESS_SERVICES_DATA, {
    variables: {
      id: business.businessId,
    },
  });
  const [serviceDrawerOpen, setServiceDrawerOpen] = useState<{
    service?: GetBusinessServicesData_getBusiness_services;
    action: 'UPDATE' | 'CREATE';
  } | null>(null);

  const screens = useBreakpoint();

  if (loading) return <FullPageSpinner />;

  if (error || !data?.getBusiness?.services) {
    return (
      <Result
        status="500"
        title="Error"
        subTitle="Algo salió mal"
        // TODO: hook buttons up
        extra={[
          <Button type="ghost">Volver</Button>,
          <Button type="primary">Contactar soporte</Button>,
        ]}
      />
    );
  }
  const branchsId = data.getBusiness.branches.map(branch => branch.id);
  const categoryId = data.getBusiness.categories[0].id;
  const employeesId = data.getBusiness.employee.map(employee => employee.id);
  const commonVariables = {
    branchesId: branchsId,
    categoryId: categoryId,
    employeesId: employeesId,
    currency: 'UYU',
  };
  return (
    <>
      <div>
        <PageHeader
          ghost={false}
          title="Servicios"
          extra={[
            <Button
              key="1"
              type="primary"
              onClick={() => setServiceDrawerOpen({ service: undefined, action: 'CREATE' })}
            >
              Crear nuevo servicio
            </Button>,
          ]}
        />
        <Spacer height={12} />
        <List
          loading={loading}
          itemLayout={screens.sm ? 'horizontal' : 'vertical'}
          dataSource={data.getBusiness.services}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  onClick={() => setServiceDrawerOpen({ service: item, action: 'UPDATE' })}
                  icon={<EditOutlined color="primary" />}
                >
                  Editar
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} active loading={false}>
                <List.Item.Meta
                  title={item.name}
                  description={
                    <>
                      <div>{`$ ${item.price} - ${item.duration} mins.`}</div>
                      <div>{item.description}</div>
                    </>
                  }
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
      <GlobalStyles />
      <Drawer
        title={`${serviceDrawerOpen?.action === 'CREATE' ? 'Crear' : 'Editar'} servicio`}
        placement="bottom"
        closable
        onClose={() => setServiceDrawerOpen(null)}
        visible={!!serviceDrawerOpen}
        key="serviceDrawer"
        height="auto"
      >
        <ServiceCRUD
          service={serviceDrawerOpen?.service}
          action={serviceDrawerOpen?.action}
          onDone={() => setServiceDrawerOpen(null)}
          commonVariables={commonVariables}
        />
      </Drawer>
    </>
  );
}
