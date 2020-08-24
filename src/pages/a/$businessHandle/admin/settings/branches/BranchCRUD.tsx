import React, { useEffect, useContext } from 'react';
import { Form, Input, Button, notification, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';
import { BusinessContext } from '@/components/BussinessGetter';

import { UPDATE_BRANCH_DATA, CREATE_BRANCH, GET_BRANCHES_DATA } from './branchesQueries';
import {
  CreateBranch as ICreateBranch,
  CreateBranchVariables as ICreateBranchVariables,
  CreateBranch_createBranch,
} from './__generated__/CreateBranch';
import {
  UpdateBranchData as IUpdateBranchData,
  UpdateBranchDataVariables as IUpdateBranchDataVariables,
  UpdateBranchData_updateBranch,
} from './__generated__/UpdateBranchData';
import { GetBranchesData_getBusiness_branches } from './__generated__/GetBranchesData';
import Spacer from '@/components/common/Spacer';

interface BranchDrawerProps {
  branch?: GetBranchesData_getBusiness_branches;
  action?: 'CREATE' | 'UPDATE';
  onDone: () => void;
}

export default function BranchDrawer({ branch, action, onDone }: BranchDrawerProps) {
  const { business } = useContext(BusinessContext);

  const [form] = Form.useForm();

  useEffect(() => {
    form.resetFields();
  }, [branch, action]);

  const [updateBranch, { loading: updateBranchLoading }] = useMutation<
    IUpdateBranchData,
    IUpdateBranchDataVariables
  >(UPDATE_BRANCH_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
  });

  const [createBranch, { loading: createBranchLoading }] = useMutation<
    ICreateBranch,
    ICreateBranchVariables
  >(CREATE_BRANCH, {
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
        query: GET_BRANCHES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

  const onFinish = (values: unknown) => {
    if (branch?.id) {
      updateBranch({
        variables: { id: branch.id, ...(values as Partial<UpdateBranchData_updateBranch>) },
      });
    } else {
      createBranch({
        variables: { ...(values as CreateBranch_createBranch) },
      });
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      layout="vertical"
      name="branch"
      initialValues={branch || undefined}
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
        <Input placeholder="Sucursal 1" />
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
        <Input placeholder="La sucursal n1" />
      </Form.Item>

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
        <Input placeholder="sucursal@negocio.com" />
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

      <Form.Item
        name="address"
        label="Dirección"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Dirección' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'dirección' }),
          },
        ]}
      >
        <Input placeholder="Sucursal 1" />
      </Form.Item>

      <Spacer height={18} />

      <div style={{ display: 'flex' }}>
        {/* TODO: Eliminar branch */}
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
            loading={updateBranchLoading || createBranchLoading}
          >
            {action === 'UPDATE' ? 'Guardar cambios' : 'Crear sucursal'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
