import React, { useContext, useState, useEffect } from 'react';
import { PhoneOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Input, Select, message, Card } from 'antd';
import router from 'umi/router';
import { useMutation } from '@apollo/client';
import moment from 'moment-timezone';
import { formatMessage } from 'umi-plugin-locale';
import { animateScroll as scroll } from 'react-scroll';

import { BookingContext } from '@/layouts';
import { CREATE_BOOKING } from '@/graphql/sharedQueries';
import { isValidNumber } from 'libphonenumber-js';
import { getUrl } from '@/utils/utils';
import { EmailInput } from '@/utils/formInput';

moment.locale('es');

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
  const { bookData, setBookData } = useContext(BookingContext);
  const [createBooking, { loading }] = useMutation(CREATE_BOOKING, {
    onCompleted: value => {
      setBookData({ ...bookData, id: value.createBooking.id });
      router.push(getUrl('book/success'));
    },
    onError: err => {
      message.error(JSON.stringify(err)); // TODO handle error
    },
  });
  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  const getBookingEnd = () => moment(bookData.date).add(bookData.service.duration, 'minutes');

  const handleSubmit = e => {
    e.preventDefault();
    const { branch, professional, date, service } = bookData;
    const start = moment(date).format();
    form.validateFields((err, values) => {
      if (!err) {
        createBooking({
          variables: {
            start,
            end: getBookingEnd().format(),
            status: 'PENDING',
            branchId: branch.id,
            employeeId: professional.id,
            clientEmail: values.email ? values.email : undefined,
            clientName: values.givenName,
            clientFamilyName: values.familyName,
            clientPhone: values.phone ? `+598${values.phone}` : undefined,
            servicesId: [service.id],
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
    <Card style={{ marginTop: 4, marginBottom: 32 }}>
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
              prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone number"
              style={{ width: '100%' }}
              size="large"
            />,
          )}
        </Form.Item>

        <Button type="primary" htmlType="submit" style={{ width: '100%' }} loading={loading}>
          {formatMessage({ id: 'button.booking' })}
        </Button>
      </Form>
    </Card>
  );
};

const WrappedConfirmForm = Form.create({ name: 'confirm' })(Confirm);

export default WrappedConfirmForm;
