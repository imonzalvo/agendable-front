import React, { useState } from 'react';
import {
 Form, Input, Button, message,
} from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { Auth } from 'aws-amplify';

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
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((error, { givenName, familyName, password }) => {
      setLoading(true);
      if (!error) {
        Auth.signUp({
          username,
          password,
          attributes: {
            family_name: familyName,
            given_name: givenName,
            email,
            // TODO: remove address param
            address: 'undefined',
            name: 'undefined',
            // phone_number: phoneNumber,
          },
        })
          .then(() => {
            setCurrentStep(2);
          })
          // TODO: send error to sentry
          // TODO: Format error msg
          .catch(err => message.error(JSON.stringify(err)))
          .finally(() => setLoading(false));
      }
    });
  };

  const handleConfirmBlur = (e: React.FormEvent<EventTarget>) => {
    const { value } = e.target as HTMLInputElement;
    toggleConfirmDirty(confirmDirty || !!value);
  };

  const compareToFirstPassword = (rule: any, value: string, callback: (arg0?: any) => {}) => {
    if (value && value !== form.getFieldValue('password')) {
      callback("The two passwords don't match");
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
      <Form.Item label="First Name">
        {getFieldDecorator('givenName', {
          rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
        })(<Input />)}
      </Form.Item>

      {/* FAMILY NAME */}
      <Form.Item label="Last Name">
        {getFieldDecorator('familyName', {
          rules: [{ required: true, message: 'Please input your last name!', whitespace: true }],
        })(<Input />)}
      </Form.Item>

      {/* PASSWORD */}
      <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: validateToNextPassword,
            },
          ],
        })(<Input.Password />)}
      </Form.Item>

      {/* CONFIRM PASSWORD */}
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!',
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
            Back
          </Button>
        </Form.Item>
        {/* SUBMIT */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginLeft: 10 }} loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </FormButtonsContainer>
    </Form>
  );
}

const Wrapped2ndStepForm = Form.create<ISignUpFormProps>({ name: 'signup2nd' })(SignUp2ndStepForm);

export default Wrapped2ndStepForm;
