import React, { useContext } from 'react';
import '@ant-design/compatible/assets/index.css';
import { Typography, Form, Row, Col, Input, Button, Result, notification } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import { formatMessage } from 'umi-plugin-locale';
import Link from 'umi/link';

import { BusinessContext } from '@/components/BussinessGetter';
import Spacer from '@/components/common/Spacer';
import {
  GetLandingData as IGetLandingData,
  GetLandingDataVariables as IGetLandingDataVariables,
} from './__generated__/GetLandingData';
import {
  UpdateLandingInfo as IUpdateLandingInfo,
  UpdateLandingInfoVariables as IUpdateLandingInfoVariables,
  UpdateLandingInfo_updateLandingInfo,
} from './__generated__/UpdateLandingInfo';
import FullPageSpinner from '@/components/common/FullPageSpinner';
import { GET_LANDING_DATA, UPDATE_LANDING_DATA } from './landingQueries';

const { Title, Paragraph } = Typography;

export default function Settings() {
  const { business } = useContext(BusinessContext);
  const { data, loading, error } = useQuery<IGetLandingData, IGetLandingDataVariables>(
    GET_LANDING_DATA,
    {
      variables: {
        id: business.businessId,
      },
    },
  );
  const [updateLandingInfo, { loading: updateLandingInfoLoading }] = useMutation<
    IUpdateLandingInfo,
    IUpdateLandingInfoVariables
  >(UPDATE_LANDING_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
  });

  const onFinish = (values: Partial<UpdateLandingInfo_updateLandingInfo>) => {
    updateLandingInfo({
      variables: { id: data?.getBusiness?.landing?.id, ...values },
    });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if (loading) return <FullPageSpinner />;
  if (error || !data?.getBusiness?.landing)
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
      <Title level={2}>Pagina de inicio</Title>
      <Spacer height={12} />
      <Form
        layout="vertical"
        name="settings"
        initialValues={data.getBusiness?.landing}
        size="large"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        requiredMark="optional"
      >
        <Title level={4}>Datos principales</Title>
        <Paragraph type="secondary">
          Esta es la informacion que van a ver tus clientes cuando entren a tu agenda web. Para ver
          como se muestran tus datos
          <a href={`https://agendable.io/a/${data.getBusiness?.handle}`}> hace click aca</a>
        </Paragraph>
        <Form.Item
          label="Nombre a mostrar"
          name="displayName"
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
          <Input placeholder={data.getBusiness?.landing?.displayName} />
        </Form.Item>

        <Form.Item
          label="Cta"
          name="cta"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Cta' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'cta' }),
            },
          ]}
        >
          <Input placeholder={data.getBusiness?.landing?.cta || `cta`} />
        </Form.Item>

        <Form.Item
          label="Descripción"
          name="description"
          rules={[
            {
              type: 'string',
              message: formatMessage({ id: 'message.inputError' }, { input: 'Descripcion' }),
            },
            {
              required: true,
              message: formatMessage({ id: 'message.inputMissing' }, { input: 'descripcion' }),
            },
          ]}
        >
          <Input placeholder={data.getBusiness?.landing?.description} />
        </Form.Item>

        <Spacer height={12} />

        <Form.Item>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={updateLandingInfoLoading}
          >
            Guardar cambios
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
