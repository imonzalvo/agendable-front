import React from 'react';
import { Form, Input, Icon } from 'antd';
import { formatMessage } from 'umi-plugin-locale';

interface EmailInputProps {
  getFieldDecorator: any;
  initialValue: String;
  label?: Boolean;
}

export const EmailInput = ({ getFieldDecorator, initialValue, label = true }: EmailInputProps) => (
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
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="Email"
      />,
    )}
  </Form.Item>
);
