import React, { useContext, useState } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';

import { AuthContext } from '@/layouts';
import { SingleFormButtonContainer } from './styles';
import { EmailInput } from '@/utils/formInput';
import { LOGIN } from './queries';

interface LoginProps extends FormComponentProps {
  stateEmail: string;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setUsername: (username: string) => void;
  nextStep: () => void;
}

function Login({ form: { validateFields, getFieldDecorator } }: LoginProps) {
  const { setAuthenticated } = useContext(AuthContext);
  const [loginMutation, { data, loading: isLoading }] = useMutation(LOGIN, {
    onCompleted: data => {
      message.success('Successfully Signed In!');
      localStorage.setItem('token', data.login.token);
      setAuthenticated(true);
    },
    onError: () => {
      message.error(err.message);
      setAuthenticated(false);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFields((error, { email, password }) => {
      if (!error) {
        loginMutation({
          variables: {
            email,
            password,
          },
        });
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <EmailInput getFieldDecorator={getFieldDecorator} initialValue={''} label={false} />
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <SingleFormButtonContainer>
        {/* {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>Remember me</Checkbox>)} */}
        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
          {formatMessage({ id: 'navBar.signIn' })}
        </Button>
      </SingleFormButtonContainer>
    </Form>
  );
}

export default Form.create({ name: 'Login' })(Login);
