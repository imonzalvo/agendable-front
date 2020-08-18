import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';

import { SIGN_UP } from './queries';
import { FormButtonsContainer } from './styles';

interface SignUpFormProps extends FormComponentProps {
  setCurrentStep: (step: number) => void;
  email: string;
  phoneNumber: string;
  username: string;
}

function SignUp2ndStepForm({
  form,
  email,
  username,
  setCurrentStep,
}: SignUpFormProps): JSX.Element {
  const [confirmDirty, toggleConfirmDirty] = useState(false);
  // const [isLoading, setLoading] = useState(false);

  const [signUpMutate, { data, loading: isLoading }] = useMutation(SIGN_UP, {
    onCompleted: () => {
      setCurrentStep(2);
    },
    onError: err => message.error(JSON.stringify(err)),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((error, { givenName, familyName, password }) => {
      if (!error) {
        signUpMutate({
          variables: {
            email,
            password,
            name: `${givenName} ${familyName}`,
            givenName,
            familyName,
            userName: username,
            userType: 'ADMIN',
          },
        });
      }
    });
  };

  const handleConfirmBlur = (e: React.FormEvent<EventTarget>) => {
    const { value } = e.target as HTMLInputElement;
    toggleConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule: any, value: string, callback: (arg0?: any) => {}) => {
    if (value && value !== form.getFieldValue('password')) {
      callback(formatMessage({ id: 'message.passwordNotMatch' }));
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule: any, value: string, callback: (arg0?: any) => {}) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const { getFieldDecorator } = form;

  return (
    <Form onSubmit={handleSubmit}>
      {/* GIVEN NAME */}
      <Form.Item label={formatMessage({ id: 'form.name' })}>
        {getFieldDecorator('givenName', {
          rules: [
            {
              required: true,
              message: formatMessage(
                { id: 'message.inputMissing' },
                { input: formatMessage({ id: 'form.name' }).toLowerCase() },
              ),
              whitespace: true,
            },
          ],
        })(<Input />)}
      </Form.Item>

      {/* FAMILY NAME */}
      <Form.Item label={formatMessage({ id: 'form.lastName' })}>
        {getFieldDecorator('familyName', {
          rules: [
            {
              required: true,
              message: formatMessage(
                { id: 'message.inputMissing' },
                { input: formatMessage({ id: 'form.lastName' }).toLowerCase() },
              ),
              whitespace: true,
            },
          ],
        })(<Input />)}
      </Form.Item>

      {/* PASSWORD */}
      <Form.Item label={formatMessage({ id: 'form.password' })} hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: formatMessage(
                { id: 'message.inputMissing' },
                { input: formatMessage({ id: 'form.password' }).toLowerCase() },
              ),
            },
            {
              min: 6,
              message: formatMessage({ id: 'message.passwordLength' }),
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password />)}
      </Form.Item>

      {/* CONFIRM PASSWORD */}
      <Form.Item label={formatMessage({ id: 'form.confirmPassword' })} hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: formatMessage({ id: 'message.confirmPassword' }),
            },
            {
              validator: compareToFirstPassword,
            },
          ],
        })(<Input.Password onBlur={handleConfirmBlur} />)}
      </Form.Item>

      <FormButtonsContainer>
        <Form.Item>
          <Button
            type="ghost"
            onClick={() => {
              setCurrentStep(0);
            }}
          >
            {formatMessage({ id: 'button.back' })}
          </Button>
        </Form.Item>
        {/* SUBMIT */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }} loading={isLoading}>
            {formatMessage({ id: 'button.signUp' })}
          </Button>
        </Form.Item>
      </FormButtonsContainer>
    </Form>
  );
}

const Wrapped2ndStepForm = Form.create<ISignUpFormProps>({ name: 'signup2nd' })(SignUp2ndStepForm);

export default Wrapped2ndStepForm;
