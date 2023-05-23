import React, { useEffect, useContext } from 'react';
import { Form, Input, Button, notification, Popconfirm, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';
import { BusinessContext } from '@/components/BussinessGetter';

import {
  UPDATE_SERVICE_DATA,
  CREATE_SERVICE,
  GET_BUSINESS_SERVICES_DATA,
  DELETE_SERVICE_DATA,
} from './servicesQueries';

import {
  CreateService as ICreateService,
  CreateServiceVariables as ICreateServiceVariables,
  CreateService_createService,
} from './__generated__/CreateService';
import {
  UpdateServiceData as IUpdateServiceData,
  UpdateServiceDataVariables as IUpdateServiceDataVariables,
  UpdateServiceData_updateService,
} from './__generated__/UpdateServiceData';
import {
  DeleteService as IDeleteServiceData,
  DeleteServiceVariables as IDeleteServiceDataVariables,
  DeleteService_deleteService,
} from './__generated__/DeleteService';

import { GetBusinessServicesData_getBusiness_services } from './__generated__/GetBusinessServicesData';
import Spacer from '@/components/common/Spacer';

interface ServiceDrawerProps {
  service?: GetBusinessServicesData_getBusiness_services;
  action?: 'CREATE' | 'UPDATE';
  onDone: () => void;
  commonVariables: any;
}

export default function ServiceDrawer({
  service,
  action,
  onDone,
  commonVariables,
}: ServiceDrawerProps) {
  const { business } = useContext(BusinessContext);

  const [form] = Form.useForm();

  console.log('bus11', commonVariables);
  console.log(form);

  useEffect(() => {
    form.resetFields();
  }, [service, action]);

  const [updateService, { loading: updateServiceLoading }] = useMutation<
    IUpdateServiceData,
    IUpdateServiceDataVariables
  >(UPDATE_SERVICE_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
  });

  const [createService, { loading: createServiceLoading }] = useMutation<
    ICreateService,
    ICreateServiceVariables
  >(CREATE_SERVICE, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
    refetchQueries: [
      {
        query: GET_BUSINESS_SERVICES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

  const [deleteService, { loading: deleteServiceLoading }] = useMutation<
    IDeleteServiceData,
    IDeleteServiceDataVariables
  >(DELETE_SERVICE_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
    refetchQueries: [
      {
        query: GET_BUSINESS_SERVICES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

  const onFinish = (values: unknown) => {
    if (service?.id) {
      updateService({
        variables: { id: service.id, ...(values as Partial<UpdateServiceData_updateService>) },
      });
    } else {
      createService({
        variables: { ...commonVariables, ...(values as CreateService_createService) },
      });
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="service"
      initialValues={service || undefined}
      size="large"
      requiredMark="optional"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="name"
        label="Nombre"
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
        <Input placeholder="Servicio" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Descripción"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Descripción' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'descripción' }),
          },
        ]}
      >
        <Input placeholder="Este servicio.." />
      </Form.Item>

      <Form.Item
        name="price"
        label="Precio"
        rules={[
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'precio' }),
          },
        ]}
      >
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          min={0}
          defaultValue={599}
          step={50}
          style={{ width: 160 }}
        />
      </Form.Item>

      <Form.Item
        name="duration"
        label="Duración"
        rules={[
          {
            type: 'number',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Duración' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'duracion' }),
          },
        ]}
      >
        <InputNumber
          formatter={value => `${value} mins.`}
          parser={value => value?.split(' ')[0]}
          min={15}
          max={600}
          defaultValue={60}
          step={15}
          style={{ width: 160 }}
        />
      </Form.Item>

      <Spacer height={18} />

      <div style={{ display: 'flex' }}>
        <Popconfirm
          title="¿Eliminar sucursal? Esta acción no se puede deshacer."
          onConfirm={() =>
            deleteService({
              variables: {
                id: service.id,
              },
            })
          }
          okText="Si, ELIMINAR"
          cancelText="No, cancelar"
          arrowPointAtCenter
          icon={<DeleteOutlined />}
          okButtonProps={{ danger: true }}
        >
          <Button danger type="ghost" icon={<DeleteOutlined />} />
        </Popconfirm>

        <Spacer width={12} />

        <Form.Item style={{ width: '100%' }}>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={updateServiceLoading || createServiceLoading}
          >
            {action === 'UPDATE' ? 'Guardar cambios' : 'Crear sucursal'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
