import React, { useContext } from 'react';
import '@ant-design/compatible/assets/index.css';
import { Typography, Form, Row, Col, Input, Button, Result, notification } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';
import { GET_BUSINESS_DATA, UPDATE_BUSINESS_DATA } from './businessQueries';
import {
  GetBusinessData as IGetBusinessData,
  GetBusinessDataVariables as IGetBusinessDataVariables,
} from './__generated__/GetBusinessData';
import {
  UpdateBusinessData as IUpdateBusinessData,
  UpdateBusinessDataVariables as IUpdateBusinessDataVariables,
  UpdateBusinessData_updateBusiness,
} from './__generated__/UpdateBusinessData';
import FullPageSpinner from '@/components/common/FullPageSpinner';

const { Title, Paragraph } = Typography;

export default function Settings() {
  const { business } = useContext(BusinessContext);
  const { data, loading, error } = useQuery<IGetBusinessData, IGetBusinessDataVariables>(
    GET_BUSINESS_DATA,
    {
      variables: {
        id: business.businessId,
      },
    },
  );
  const [updateBusiness, { loading: updateBusinessLoading }] = useMutation<
    IUpdateBusinessData,
    IUpdateBusinessDataVariables
  >(UPDATE_BUSINESS_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
  });

  const onFinish = (values: Partial<UpdateBusinessData_updateBusiness>) => {
    updateBusiness({
      variables: { id: business.businessId, ...values },
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (loading) return <FullPageSpinner />;
  if (error || !data?.getBusiness)
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

  return (
    <div>
      <Title level={2}>Configuración del negocio</Title>
      <Spacer height={12} />
      <Form
        layout="vertical"
        name="settings"
        initialValues={data.getBusiness}
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark="optional"
      >
        {console.log('dataaaa', data)}
        <Title level={4}>Datos principales</Title>
        <Form.Item
          label="Nombre del negocio"
          name="name"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Nombre' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'nombre' }),
            },
          ]}
        >
          <Input placeholder={business.businessName} />
        </Form.Item>

        <Form.Item
          label="Dominio"
          name="handle"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Dominio' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'dominio' }),
            },
          ]}
        >
          <Paragraph type="secondary">
            Contacta a nuestro equipo de soporte para cambiar tu dominio
          </Paragraph>
          <Input disabled placeholder={data.getBusiness.handle} addonAfter=".agendable.io" />
        </Form.Item>

        <Title level={4}>Datos de contacto</Title>
        <Paragraph type="secondary">
          Estos son los datos que usaremos para contactarte desde Agendable. Los datos de contacto
          que verán tus clientes se agregan en la{' '}
          <Link to="branches">configuración de sucursales</Link>
        </Paragraph>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Email' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'email' }),
            },
          ]}
        >
          <Input placeholder="negocio@email.com" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Teléfono"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Teléfono' }),
            },
          ]}
        >
          <Input placeholder="099 123 456" addonBefore="+598" />
        </Form.Item>

        <Spacer height={12} />

        <Title level={4}>Redes sociales</Title>
        <Paragraph type="secondary">
          Agregá tus redes sociales para que los usuarios puedan encontrarte
        </Paragraph>

        <Form.Item
          name="website"
          label="Pagina web"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Website' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'website' }),
            },
          ]}
        >
          <Input placeholder="www.example.com" />
        </Form.Item>

        <Form.Item
          name="instagramUrl"
          label="Instagram"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Instagram' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'instagram' }),
            },
          ]}
        >
          <Input placeholder="https://www.instagram.com/tuNegocio" />
        </Form.Item>

        <Form.Item
          name="facebookUrl"
          label="Facebook"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Facebook' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'facebook' }),
            },
          ]}
        >
          <Input placeholder="https://www.facebook.com/tuNegocio" />
        </Form.Item>

        <Spacer height={12} />

        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={updateBusinessLoading}
          >
            Guardar cambios
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
