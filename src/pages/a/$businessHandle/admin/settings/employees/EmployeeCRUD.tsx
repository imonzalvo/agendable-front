import React, { useEffect, useContext } from 'react';
import { Form, Input, Button, notification, Popconfirm, InputNumber } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';
import { BusinessContext } from '@/components/BussinessGetter';

import { UPDATE_EMPLOYEE_DATA, CREATE_EMPLOYEE, GET_EMPLOYEES_DATA } from './employeesQueries';

import {
  CreateEmployee as ICreateEmployee,
  CreateEmployeeVariables as ICreateEmployeeVariables,
  CreateEmployee_createEmployee,
} from './__generated__/CreateEmployee';

import {
  UpdateEmployeeData as IUpdateEmployeeData,
  UpdateEmployeeDataVariables as IUpdateEmployeeDataVariables,
  UpdateEmployeeData_updateEmployee,
} from './__generated__/UpdateEmployeeData';
import { GetEmployeesData_getBusiness_employee } from './__generated__/GetEmployeesData';
import Spacer from '@/components/common/Spacer';

interface CommonVars {
  branchesId: string[];
  servicesId: string[];
  businessId: string;
}

interface EmployeeDrawerProps {
  service?: GetEmployeesData_getBusiness_employee;
  action?: 'CREATE' | 'UPDATE';
  onDone: () => void;
  commonVariables: CommonVars;
}

export default function EmployeeDrawer({
  service,
  action,
  onDone,
  commonVariables,
}: EmployeeDrawerProps) {
  const { business } = useContext(BusinessContext);

  const [form] = Form.useForm();

  console.log('bus11', commonVariables);
  console.log(form);

  useEffect(() => {
    form.resetFields();
  }, [service, action]);

  const [updateEmployee, { loading: updateEmployeeLoading }] = useMutation<
    IUpdateEmployeeData,
    IUpdateEmployeeDataVariables
  >(UPDATE_EMPLOYEE_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
  });

  const [createEmployee, { loading: createServiceLoading }] = useMutation<
    ICreateEmployee,
    ICreateEmployeeVariables
  >(CREATE_EMPLOYEE, {
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
        query: GET_EMPLOYEES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

  const onFinish = (values: unknown) => {
    if (service?.id) {
      updateEmployee({
        variables: { id: service.id, ...(values as Partial<UpdateEmployeeData_updateEmployee>) },
      });
    } else {
      createEmployee({
        variables: { ...commonVariables, ...(values as CreateEmployee_createEmployee) },
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
        name="givenName"
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
        <Input placeholder="Juan" />
      </Form.Item>
      <Form.Item
        name="familyName"
        label="Apellido"
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
        <Input placeholder="Perez" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Teléfono"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Teléfono' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'teléfono' }),
          },
        ]}
      >
        <Input placeholder="099 123 456" addonBefore="+598" />
      </Form.Item>

      <Spacer height={18} />

      <div style={{ display: 'flex' }}>
        {/* TODO: Eliminar service */}
        {/* <Popconfirm
          title="¿Eliminar sucursal? Esta acción no se puede deshacer."
          onConfirm={() => {}}
          okText="Si, ELIMINAR"
          cancelText="No, cancelar"
          arrowPointAtCenter
          icon={<DeleteOutlined />}
          okButtonProps={{ danger: true }}
        >
          <Button danger type="ghost" icon={<DeleteOutlined />} />
        </Popconfirm>

        <Spacer width={12} /> */}

        <Form.Item style={{ width: '100%' }}>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={updateEmployeeLoading || createServiceLoading}
          >
            {action === 'UPDATE' ? 'Guardar cambios' : 'Crear sucursal'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
