import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useMutation } from '@apollo/client';
import { SET_UP_BUSINESS } from '@/components/AuthFlow/queries';
import { formatMessage } from 'umi-plugin-react/locale';
interface BusinessFormProps {
  setCurrentStep: (step: number) => void;
}

const formatToDomain = (text: string) => {
  const lowerText = text.toLowerCase();
  return lowerText.replaceAll(/\s/g, '-');
};

const BusinessForm = ({ setCurrentStep }: BusinessFormProps) => {
  const [domain, setDomain] = useState('');
  const [signUpMutate, { data, loading: isLoading }] = useMutation(SET_UP_BUSINESS, {
    onCompleted: () => {
      setCurrentStep(1);
    },
    onError: err => message.error(JSON.stringify(err)),
  });

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
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
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
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input the phone!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input the email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input the address!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BusinessForm;
