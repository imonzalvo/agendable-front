import React, { useContext, useState } from 'react';
import { Form, Button, Input, Select, Icon, message } from 'antd';
import router from 'umi/router';
import { useMutation } from '@apollo/react-hooks';
import humps from 'humps';
import moment from 'moment-timezone';
import { Auth } from 'aws-amplify';

import Stepper from '@/components/BookingStepper';
import { BookingContext } from '@/layouts';
import { CreateClientBooking } from '@/components/ConfirmBooking/queries';
import { isValidNumber } from 'libphonenumber-js';
import { getUrl } from '@/utils/utils';

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
        <Form.Item label="Nombre">
          {getFieldDecorator('givenName', {
            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
            initialValue: user ? user.givenName : '',
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Apellido">
          {getFieldDecorator('familyName', {
            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
            initialValue: user ? user.familyName : '',
          })(<Input />)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
            initialValue: user ? user.email : '',
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [
              {
                required: false,
                validator: (rule, value, callback) => {
                  try {
                    if (!value || isValidNumber(`+${form.getFieldValue('prefix')}${value}`)) {
                      callback();
                    }
                    throw new Error('Invalid Phone Number');
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
          Confirm Booking
        </Button>
      </Form>
    </Stepper>
  );
};

const WrappedConfirmForm = Form.create({ name: 'confirm' })(Confirm);

export default WrappedConfirmForm;
