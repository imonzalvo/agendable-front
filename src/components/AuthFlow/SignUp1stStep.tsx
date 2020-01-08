import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { formatMessage } from 'umi-plugin-locale';

import { checkUsername } from '../../utils/lambdaFunctions';
import { SingleFormButtonContainer } from './styles';
import { EmailInput } from '@/utils/formInput';

const { Option } = Select;

interface ISignUp1stStepProps extends FormComponentProps {
  stateEmail: string;
  setEmail: (email: string) => void;
  setPhoneNumber: (phoneNumber: string) => void;
  setUsername: (username: string) => void;
  setCurrentStep: (value: number) => void;
}

function SignUp1stStep({
  form,
  stateEmail,
  setEmail,
  setPhoneNumber,
  setUsername,
  setCurrentStep,
}: ISignUp1stStepProps): JSX.Element {
  // Should set to false on initial when we start accepting phone numbers
  // [useEmail, toggleUseEmail]
  const [useEmail] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const validationSuccess = (phoneNumberParam?: string, emailParam?: string) => {
    setEmail(emailParam || '');
    setPhoneNumber(phoneNumberParam || '');
    setUsername(emailParam || phoneNumberParam || '');
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.validateFields((err, { email, phone, prefix }) => {
      if (!err) {
        const phoneNumber = phone ? `+${prefix}${phone}` : '';
        setLoading(true);
        checkUsername(email)
          .then(response => {
            const respObject = JSON.parse(
              (response as { StatusCode: number; Payload: string }).Payload,
            );
            if (respObject.statusCode === 200) {
              validationSuccess(phoneNumber, email);
            } else if (respObject.body) {
              form.setFields({
                email: {
                  value: email,
                  errors: [new Error(JSON.parse(respObject.body).error)],
                },
              });
            }
          })
          .catch(() => {
            // If usernameCheck crashes we want the signup to continue
            // The backend will stop the user from signing up at the end if there's an error
            // TODO: log this error in sentry
            validationSuccess(phoneNumber, email);
          })
          .finally(() => setLoading(false));
      }
    });
  };

  const { getFieldDecorator } = form;

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '598',
  })(
    <Select style={{ width: 80 }}>
      <Option value="598">+598</Option>
    </Select>,
  );

  const renderEmailOrPhone = () => {
    if (useEmail) {
      return <EmailInput getFieldDecorator={getFieldDecorator} initialValue={stateEmail} />;
    }
    return (
      <Form.Item label="Phone Number">
        {getFieldDecorator('phone', {
          rules: [{ required: true, message: 'Please input your phone number!' }],
        })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
      </Form.Item>
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        {/* <Radio.Group value={useEmail} onChange={e => toggleUseEmail(e.target.value)}>
          <Radio.Button value={false}>Use Phone Number</Radio.Button>
          <Radio.Button value>Use Email</Radio.Button>
        </Radio.Group> */}
        {renderEmailOrPhone()}
      </div>

      {/* TOS AGREEMENT */}
      {/* <Form.Item>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>,
        )}
      </Form.Item> */}

      {/* SUBMIT */}
      <SingleFormButtonContainer>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          {formatMessage({ id: 'button.next' })}
        </Button>
      </SingleFormButtonContainer>
    </Form>
  );
}

const Wrapped1stStepForm = Form.create<ISignUp1stStepProps>({ name: 'signup1st' })(SignUp1stStep);

export default Wrapped1stStepForm;
