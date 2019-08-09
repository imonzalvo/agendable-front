import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { useQuery } from 'react-apollo-hooks';
import { List, Typography } from 'antd';

import { GetServices } from './queries';

const { Title } = Typography;

const Services = () => {
  const { data, loading } = useQuery(GetServices, {
    variables: { id: '393ba48e-88b7-4820-a506-c349ce9e7eca' },
  });

  const services = data ? data.getBranch.services.items.map(item => item.service.name) : [];

  return (
    <PageHeaderWrapper>
      <Title>Services list</Title>
      <List
        size="large"
        header={<div>Header</div>}
        loading={loading}
        bordered
        dataSource={services}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </PageHeaderWrapper>
  );
};

export default Services;
