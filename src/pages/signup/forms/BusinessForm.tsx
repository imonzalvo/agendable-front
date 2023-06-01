import React, { useContext, useEffect, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useMutation } from '@apollo/client';
import { SET_UP_BUSINESS } from '@/components/AuthFlow/queries';
import { formatMessage } from 'umi-plugin-react/locale';
import { AuthContext } from '@/layouts';
import router from 'umi/router';
import { useResponsive } from 'react-hooks-responsive';

const formatToDomain = (text: string) => {
  const lowerText = text.toLowerCase();
  return lowerText.replaceAll(/\s/g, '-');
};

const BusinessForm = () => {
  const { user, setUser } = useContext(AuthContext);
  const [domain, setDomain] = useState('');
  const [signUpMutate, { loading: isLoading }] = useMutation(SET_UP_BUSINESS, {
    onCompleted: data => {
      const updatedUser = {
        ...user,
        business: {
          ...data.setUpBusiness,
        },
      };

      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      router.push('setup-services');
    },
    onError: err => message.error(JSON.stringify(err)),
  });

  const { screenIsAtLeast } = useResponsive({
    xs: 0,
    sm: 415,
    md: 510,
  });

  useEffect(() => {
    const noUserSet = !user;
    const isUserBusinessOwner = !!user && user.business && user.business.id;

    if (noUserSet || isUserBusinessOwner) {
      router.replace('/');
    }
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    signUpMutate({
      variables: {
        ...values,
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="businessInfo"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      layout={screenIsAtLeast('sm') ? 'horizontal' : 'vertical'}
      size="large"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: 'Ingrese un nombre!' }]}
      >
        <Input onChange={e => setDomain(formatToDomain(e.target.value))} />
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
        <Input placeholder={domain} addonAfter=".agendable.io" />
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Ingrese un email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Dirección"
        name="address"
        rules={[{ required: true, message: 'Ingrese una dirección!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Descripción"
        name="description"
        rules={[{ required: true, message: 'Ingrese una descripción!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading} size="large">
          Crear negocio
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BusinessForm;
