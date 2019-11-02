import React, { useContext, useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';

import { AuthContext } from '@/pages/Authorized';
import { FormButtonsContainer } from './styles';

interface ISignUpFormProps extends FormComponentProps {
  username: string;
  setCurrentStep: (step: number) => void;
}

function SignUp3rdStep({ form, username }: ISignUpFormProps): JSX.Element {
  const { setAuthenticated } = useContext(AuthContext);
  const [isLoading, setLoading] = useState<'CONFIRM' | 'RESEND' | null>(null);

  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((error, { confirmationCode }) => {
      if (!error) {
        setLoading('CONFIRM');
        Auth.confirmSignUp(username, confirmationCode)
          .then(() => {
            message.success('Successfully Signed Up');
            setAuthenticated(true);
          })
          .catch(err => {
            // TODO: send error to sentry
            // TODO: Format error msg
            message.error(JSON.stringify(err));
          })
          .finally(() => setLoading(null));
      }
    });
  };

  const handleResendCode = () => {
    setLoading('RESEND');
    Auth.resendSignUp(username)
      .then(() => message.success('Code sent!'))
      .catch(err => {
        // TODO: send error to sentry
        // TODO: Format error msg
        message.error(JSON.stringify(err));
      })
      .finally(() => setLoading(null));
  };

  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handleConfirm}>
      {/* CONFIRMATION CODE */}
      <Form.Item label="Confirmation Code">
        {getFieldDecorator('confirmationCode', {
          rules: [
            { required: true, message: 'Please input confirmation code!', whitespace: false },
          ],
        })(<Input />)}
      </Form.Item>
      <FormButtonsContainer>
        {/* RESEND CODE */}
        <Form.Item>
          <Button type="default" onClick={handleResendCode} loading={isLoading === 'RESEND'}>
            Resend Code
          </Button>
        </Form.Item>
        {/* SUBMIT */}
        <Form.Item style={{ marginLeft: 10 }}>
          <Button type="primary" htmlType="submit" loading={isLoading === 'CONFIRM'}>
            Confirm
          </Button>
        </Form.Item>
      </FormButtonsContainer>
    </Form>
  );
}

const Wrapped3rdStepForm = Form.create<ISignUpFormProps>({ name: 'signup3rd' })(SignUp3rdStep);

export default Wrapped3rdStepForm;
