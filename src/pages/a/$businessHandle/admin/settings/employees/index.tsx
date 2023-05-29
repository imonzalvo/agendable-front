import React, { useContext, useState } from 'react';
import { Button, Result, PageHeader, List, Avatar, Skeleton, Grid, Drawer } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';

import {
  GetEmployeesData as IGGetEmployeesData,
  GetEmployeesDataVariables as IGetEmployeesDataVariables,
  GetEmployeesData_getBusiness_employee,
} from './__generated__/GetEmployeesData';

import EmployeeCRUD from './EmployeeCRUD';

import FullPageSpinner from '@/components/common/FullPageSpinner';
import { GET_EMPLOYEES_DATA } from './employeesQueries';

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

export default function Employees() {
  const { business } = useContext(BusinessContext);
  const { data, loading, error } = useQuery<IGGetEmployeesData, IGetEmployeesDataVariables>(
    GET_EMPLOYEES_DATA,
    {
      variables: {
        id: business.businessId,
      },
    },
  );
  const [employeeDrawerOpen, setEmployeeDrawerOpen] = useState<{
    employee?: GetEmployeesData_getBusiness_employee;
    action: 'UPDATE' | 'CREATE';
  } | null>(null);

  const screens = useBreakpoint();

  if (loading) return <FullPageSpinner />;

  if (error || !data?.getBusiness?.employee) {
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
  const servicesId = data.getBusiness.services.map(service => service.id);
  const commonVariables = {
    branchesId: branchsId,
    servicesId: servicesId,
    businessId: business.businessId,
  };
  return (
    <>
      <div>
        <PageHeader
          ghost={false}
          title="Empleados"
          extra={[
            <Button
              key="1"
              type="primary"
              onClick={() => setEmployeeDrawerOpen({ employee: undefined, action: 'CREATE' })}
            >
              Crear nuevo empleado
            </Button>,
          ]}
        />
        <Spacer height={12} />
        <List
          loading={loading}
          itemLayout={screens.sm ? 'horizontal' : 'vertical'}
          dataSource={data.getBusiness.employee}
          renderItem={item => {
            const servicesAmount = item.services.length;

            return (
              <List.Item
                actions={[
                  <Button
                    onClick={() => setEmployeeDrawerOpen({ employee: item, action: 'UPDATE' })}
                    icon={<EditOutlined color="primary" />}
                  >
                    Editar
                  </Button>,
                ]}
              >
                <Skeleton avatar title={false} active loading={false}>
                  <List.Item.Meta
                    title={`${item.givenName} ${item.familyName}`}
                    description={
                      <>
                        <div>{item.phone}</div>
                        <div>{`${servicesAmount} servicios`}</div>
                      </>
                    }
                  />
                </Skeleton>
              </List.Item>
            );
          }}
        />
      </div>
      <GlobalStyles />
      <Drawer
        title={`${employeeDrawerOpen?.action === 'CREATE' ? 'Crear' : 'Editar'} servicio`}
        placement="bottom"
        closable
        onClose={() => setEmployeeDrawerOpen(null)}
        visible={!!employeeDrawerOpen}
        key="serviceDrawer"
        height="auto"
      >
        <EmployeeCRUD
          employee={employeeDrawerOpen?.employee}
          action={employeeDrawerOpen?.action}
          onDone={() => setEmployeeDrawerOpen(null)}
          commonVariables={commonVariables}
        />
      </Drawer>
    </>
  );
}
