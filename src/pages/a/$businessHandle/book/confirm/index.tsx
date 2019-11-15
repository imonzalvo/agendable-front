import React, { useContext } from 'react';
import {
 Form, Button, Input, Select, Icon,
} from 'antd';
import moment from 'moment';

import Stepper from '@/components/BookingStepper';
import { BookingContext } from '@/layouts';

const Confirm = ({ form }) => {
  const { bookData } = useContext(BookingContext);

  const handleSubmit = e => {
    e.preventDefault();
    const {
 branch, service, professional, date,
} = bookData;
    const start = moment(date);
    const end = moment(start).add(service.duration, 'm');
    // Hacer pegada de createBooking con:
    // branch, professional, start.toISOString(), end.toISOString(), y client info
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
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Apellido">
          {getFieldDecorator('familyName', {
            rules: [{ required: true, message: 'Please input your first name!', whitespace: true }],
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
            // initialValue: stateEmail
          })(
            <Input
              prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
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

        <Button type="primary" htmlType="submit">
          Confirm Booking
        </Button>
      </Form>
    </Stepper>
  );
};

const WrappedConfirmForm = Form.create({ name: 'confirm' })(Confirm);

export default WrappedConfirmForm;
