import React, { useContext, useState } from 'react';
import { Form, Button, Input, Select, Icon, message } from 'antd';
import router from 'umi/router';
import { useMutation } from '@apollo/react-hooks';
import humps from 'humps';
import moment from 'moment-timezone';
import { Auth } from 'aws-amplify';
import { formatMessage } from 'umi-plugin-locale';

import Stepper from '@/components/BookingStepper';
import { BookingContext } from '@/layouts';
import { CreateClientBooking } from '@/components/ConfirmBooking/queries';
import { isValidNumber } from 'libphonenumber-js';
import { getUrl } from '@/utils/utils';
import { EmailInput } from '@/utils/formInput';

moment.locale('es');

interface AttrInterface {
  attributes: {
    address: String;
    email: String;
    email_verified: Boolean;
    family_name: String;
    given_name: String;
    name: String;
    sub: String;
  };
}

interface UserInterface {
  address: String;
  email: String;
  emailVerified: Boolean;
  familyName: String;
  givenName: String;
  name: String;
  sub: String;
}

const Confirm = ({ form }) => {
  const [user, setUser] = useState<UserInterface | null>(null);
  const { bookData } = useContext(BookingContext);
  const [createBooking] = useMutation(CreateClientBooking, {
    onCompleted: () => {
      message.success('Successfully Created Booking');
      router.push(getUrl(''));
    },
    onError: err => {
      message.error(JSON.stringify(err)); // TODO handle error
    },
  });

  Auth.currentAuthenticatedUser()
    .then(({ attributes }: AttrInterface) => {
      if (!user) setUser(humps.camelizeKeys(attributes));
    })
    .catch(() => {});

  const getBookingEnd = () => moment(bookData.date).add(bookData.service.duration, 'minutes');

  const handleSubmit = e => {
    e.preventDefault();
    const { branch, professional, date } = bookData;
    const start = moment(date).format();
    form.validateFields((err, values) => {
      if (!err) {
        createBooking({
          variables: {
            createdAt: moment().format(),
            start,
            end: getBookingEnd().format(),
            status: 'PENDING',
            bookingBranchId: branch,
            bookingEmployeeId: professional,
            clientEmail: values.email ? values.email : undefined,
            clientName: values.givenName,
            clientFamilyName: values.familyName,
            clientPhone: values.phone ? `+598${values.phone}` : undefined,
          },
        });
      }
    });
  };

  const { getFieldDecorator } = form;
  const { Option } = Select;

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '598',
  })(
    <Select style={{ width: 80 }}>
      <Option value="598">+598</Option>
    </Select>,
  );
  return (
    <Stepper active={4}>
      <Form onSubmit={handleSubmit}>
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
            initialValue: user ? user.givenName : '',
          })(<Input />)}
        </Form.Item>
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
            initialValue: user ? user.familyName : '',
          })(<Input />)}
        </Form.Item>
        <EmailInput initialValue={user ? user.email : ''} getFieldDecorator={getFieldDecorator} />
        <Form.Item label={formatMessage({ id: 'form.phone' })}>
          {getFieldDecorator('phone', {
            rules: [
              {
                required: false,
                validator: (rule, value, callback) => {
                  try {
                    if (!value || isValidNumber(`+${form.getFieldValue('prefix')}${value}`)) {
                      callback();
                    }
                    throw new Error(
                      formatMessage(
                        {
                          id: 'message.inputError',
                        },
                        { input: formatMessage({ id: 'form.phone' }) },
                      ),
                    );
                  } catch (err) {
                    callback(err);
                  }
                },
              },
            ],
            initialValue: user ? user.phone : '',
          })(
            <Input
              addonBefore={prefixSelector}
              prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone number"
              style={{ width: '100%' }}
              size="large"
            />,
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          {formatMessage({ id: 'button.booking' })}
        </Button>
      </Form>
    </Stepper>
  );
};

const WrappedConfirmForm = Form.create({ name: 'confirm' })(Confirm);

export default WrappedConfirmForm;
