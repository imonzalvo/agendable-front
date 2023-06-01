import React, { useContext, useState } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Button, message } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form';
import { formatMessage } from 'umi-plugin-locale';

import { AuthContext } from '@/layouts';
import { FormButtonsContainer } from './styles';
import { useMutation } from '@apollo/client';
import { CONFIRM_USER } from './queries';

interface ISignUpFormProps extends FormComponentProps {
  email: string;
  setCurrentStep: (step: number) => void;
}

function SignUp3rdStep({ form, email }: ISignUpFormProps): JSX.Element {
  const { setAuthenticated, setUser } = useContext(AuthContext);

  const [confirmUserMutate, { data, loading: isLoading }] = useMutation(CONFIRM_USER, {
    onCompleted: data => {
      message.success('Successfully Signed In!');
      localStorage.setItem('token', data.confirmUser.token);
      setAuthenticated(true);
      setUser(data.confirmUser.user);
      localStorage.setItem('user', JSON.stringify(data.confirmUser.user));
    },
    onError: err => {
      message.error(err?.message);
      setAuthenticated(false);
    },
  });

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((error, { verifyToken }) => {
      if (!error) {
        if (!error) {
          confirmUserMutate({
            variables: {
              email,
              verifyToken,
            },
          });
        }
      }
    });
  };

  // const handleResendCode = () => {
  // };

  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handleConfirm}>
      {/* CONFIRMATION CODE */}
      <Form.Item label={formatMessage({ id: 'form.verifyToken' })}>
        {getFieldDecorator('verifyToken', {
          rules: [
            {
              required: true,
              message: formatMessage(
                { id: 'message.inputMissing' },
                { input: formatMessage({ id: 'form.verifyToken' }).toLowerCase() },
              ),
              whitespace: false,
            },
          ],
        })(<Input />)}
      </Form.Item>
      <FormButtonsContainer>
        {/* RESEND CODE */}
        {/* TODO: Not implemented in backend yet */}
        <Form.Item>
          <Button type="default" onClick={() => {}} loading={false}>
            {formatMessage({ id: 'button.resendCode' })}
          </Button>
        </Form.Item>
        {/* SUBMIT */}
        <Form.Item style={{ marginLeft: 10 }}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {formatMessage({ id: 'button.confirm' })}
          </Button>
        </Form.Item>
      </FormButtonsContainer>
    </Form>
  );
}

const Wrapped3rdStepForm = Form.create<ISignUpFormProps>({ name: 'signup3rd' })(SignUp3rdStep);

export default Wrapped3rdStepForm;
