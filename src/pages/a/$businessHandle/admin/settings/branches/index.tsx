import React, { useContext, useState } from 'react';
import { Button, Result, PageHeader, List, Avatar, Skeleton, Grid, Drawer } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useQuery } from '@apollo/client';
import { createGlobalStyle } from 'styled-components';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';
import BranchCRUD from './BranchCRUD';
import { GET_BRANCHES_DATA } from './branchesQueries';
import {
  GetBranchesData as IGetBranchesData,
  GetBranchesDataVariables as IGetBranchesDataVariables,
  GetBranchesData_getBusiness_branches,
} from './__generated__/GetBranchesData';

import FullPageSpinner from '@/components/common/FullPageSpinner';

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

export default function Branches() {
  const { business } = useContext(BusinessContext);
  const { data, loading, error } = useQuery<IGetBranchesData, IGetBranchesDataVariables>(
    GET_BRANCHES_DATA,
    {
      variables: {
        id: business.businessId,
      },
    },
  );
  const [branchDrawerOpen, setBranchDrawerOpen] = useState<{
    branch?: GetBranchesData_getBusiness_branches;
    action: 'UPDATE' | 'CREATE';
  } | null>(null);

  const screens = useBreakpoint();

  if (loading) return <FullPageSpinner />;

  if (error || !data?.getBusiness?.branches) {
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

  return (
    <>
      <div>
        <PageHeader
          ghost={false}
          title="Sucursales"
          extra={[
            <Button
              key="1"
              type="primary"
              onClick={() => setBranchDrawerOpen({ branch: undefined, action: 'CREATE' })}
            >
              Crear nueva sucursal
            </Button>,
          ]}
        />
        <Spacer height={12} />
        <List
          loading={loading}
          itemLayout={screens.sm ? 'horizontal' : 'vertical'}
          dataSource={data.getBusiness.branches}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  onClick={() => setBranchDrawerOpen({ branch: item, action: 'UPDATE' })}
                  icon={<EditOutlined color="primary" />}
                >
                  Editar
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} active loading={false}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image || ''} />}
                  title={item.name}
                  description={
                    <>
                      <div>{item.description}</div>
                      <div>{item.address}</div>
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
        title={`${branchDrawerOpen?.action === 'CREATE' ? 'Crear' : 'Editar'} sucursal`}
        placement="bottom"
        closable
        onClose={() => setBranchDrawerOpen(null)}
        visible={!!branchDrawerOpen}
        key="branchDrawer"
        height="auto"
      >
        <BranchCRUD
          branch={branchDrawerOpen?.branch}
          action={branchDrawerOpen?.action}
          onDone={() => setBranchDrawerOpen(null)}
        />
      </Drawer>
    </>
  );
}
