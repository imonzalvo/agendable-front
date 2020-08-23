import React, { useContext } from 'react';
import { Typography, Card, Row, Col, Form, Input, Button, Radio } from 'antd';
import { useQuery, useSubscription, useApolloClient, QueryResult } from '@apollo/client';
import { formatMessage } from 'umi-plugin-locale';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';
import { EmailInput } from '@/utils/formInput';
import { GET_BUSINESS_DATA } from './settingsQueries';

const { Title, Paragraph } = Typography;

function Settings({ form }) {
  const { business } = useContext(BusinessContext);
  const { data, loading } = useQuery(GET_BUSINESS_DATA, {
    variables: {
      id: business.businessId,
    },
  });

  const { getFieldDecorator } = form;

  if (loading) return <div>loading</div>;

  return (
    <div
      style={{
        padding: '0 128px',
      }}
    >
      <Row>
        <Col span={12} offset={6}>
          <Title level={2}>Configuración del negocio</Title>
          {/* <Paragraph type="secondary">
            Configuración general de tu negocio
          </Paragraph> */}
          <Spacer height={12} />
          <Form layout="vertical">
            <Title level={4}>Datos principales</Title>
            {/* <Form.Item label="Nombre del negocio" getFieldDecorator={getFieldDecorator}>
              <Input
                initialValue={business.businessId}
                placeholder={business.businessName}
                size="large"
              />
            </Form.Item> */}

            <Form.Item label="Dominio">
              {getFieldDecorator('handle', {
                rules: [
                  {
                    type: 'string',
                    message: formatMessage({ id: 'message.inputError' }, { input: 'Email' }),
                  },
                  {
                    required: true,
                    message: formatMessage({ id: 'message.inputMissing' }, { input: 'email' }),
                  },
                ],
                initialValue: data.getBusiness.handle,
              })(
                <Input
                  placeholder={business.businessName}
                  size="large"
                  addonAfter=".agendable.io"
                />,
              )}
            </Form.Item>

            <Title level={4}>Datos de contacto</Title>
            <Paragraph type="secondary">
              Your business name is displayed across many areas including on your online booking
              profile, sales invoices and messages to clients
            </Paragraph>
            <EmailInput
              initialValue={business.businessId}
              getFieldDecorator={getFieldDecorator}
              size="large"
            />
            <Form.Item label="Email">
              <Input type="email" placeholder={business.businessName} size="large" />
            </Form.Item>

            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Form.create({ name: 'settings' })(Settings);
