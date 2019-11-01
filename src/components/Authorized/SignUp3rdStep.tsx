import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';

import { FormButtonsContainer } from './styles';

interface ISignUpFormProps extends FormComponentProps {
  username: string;
  nextStep: () => void;
  prevStep: () => void;
}

function SignUp3rdStep({ form, username }: ISignUpFormProps): JSX.Element {
  const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.validateFieldsAndScroll((error, { confirmationCode }) => {
      if (!error) {
        Auth.confirmSignUp(username, confirmationCode)
          .then(() => {
            // TODO: redirect?
            message.success('Successfully Signed Up');
          })
          .catch(err => {
            // TODO: send error to sentry
            // TODO: Format error msg
            message.error(JSON.stringify(err));
          });
      }
    });
  };

  const handleResendCode = () => {
    Auth.resendSignUp(username)
      .then(() => message.success('Code sent!'))
      .catch(err => {
        // TODO: send error to sentry
        // TODO: Format error msg
        message.error(JSON.stringify(err));
      });
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
          <Button type="default" onClick={handleResendCode}>
            Resend Code
          </Button>
        </Form.Item>
        {/* SUBMIT */}
        <Form.Item style={{ marginLeft: 10 }}>
          <Button type="primary" htmlType="submit">
            Confirm
          </Button>
        </Form.Item>
      </FormButtonsContainer>
    </Form>
  );
}

const Wrapped3rdStepForm = Form.create<ISignUpFormProps>({ name: 'signup3rd' })(SignUp3rdStep);

export default Wrapped3rdStepForm;
