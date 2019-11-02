import React, { useContext, useState } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';

import { AuthContext } from '@/layouts';
import { SingleFormButtonContainer } from './styles';

interface LoginProps extends FormComponentProps {
  stateEmail: string;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setUsername: (username: string) => void;
  nextStep: () => void;
}

function Login({ form: { validateFields, getFieldDecorator } }: LoginProps) {
  const { setAuthenticated } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFields((error, { username, password }) => {
      if (!error) {
        setLoading(true);
        Auth.signIn({ username, password })
          .then(() => {
            message.success('Successfully Signed In!');
            setAuthenticated(true);
          })
          // TODO: send error to sentry
          // TODO: Format error msg
          .catch(err => {
            message.error(JSON.stringify(err));
            setAuthenticated(false);
          })
          .finally(() => setLoading(false));
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
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
          Login
        </Button>
      </SingleFormButtonContainer>
    </Form>
  );
}

export default Form.create({ name: 'Login' })(Login);
