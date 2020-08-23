import React from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

interface EmailInputProps {
  getFieldDecorator: any;
  initialValue: String;
  label?: Boolean;
  size?: 'default' | 'large';
}

export const EmailInput = ({
  getFieldDecorator,
  initialValue,
  label = true,
  size,
}: EmailInputProps) => (
  <Form.Item label={label && 'E-mail'}>
    {getFieldDecorator('email', {
      rules: [
        {
          type: 'email',
          message: formatMessage({ id: 'message.inputError' }, { input: 'Email' }),
        },
        {
          required: true,
          message: formatMessage({ id: 'message.inputMissing' }, { input: 'email' }),
        },
      ],
      initialValue: initialValue,
    })(
      <Input
        prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
        type="email"
        size={size}
      />,
    )}
  </Form.Item>
);
