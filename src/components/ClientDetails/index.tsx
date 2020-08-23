import React from 'react';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Col, Row, Select, Card } from 'antd';
import { FormComponentProps } from '@ant-design/compatible/lib/form';
import { parsePhoneNumberFromString, isValidNumber } from 'libphonenumber-js';
import { formatMessage } from 'umi-plugin-locale';

const { Option } = Select;

export interface ClientDetailsFormProps extends FormComponentProps {
  clientEmail?: string;
  clientName?: string;
  clientFamilyName?: string;
  clientPhone?: string;
}

function ClientDetailsForm({
  form,
  clientEmail,
  clientName,
  clientFamilyName,
  clientPhone,
}: ClientDetailsFormProps): JSX.Element {
  const { getFieldDecorator } = form;

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '598',
  })(
    <Select style={{ width: 80 }}>
      <Option value="598">+598</Option>
    </Select>,
  );

  return (
    <Card title={formatMessage({ id: 'modal.clientDetails' })} type="inner">
      <Form layout="vertical">
        <Row gutter={32}>
          <Col span={12}>
            {/* GIVEN NAME */}
            <Form.Item label={formatMessage({ id: 'form.name' })}>
              {getFieldDecorator('clientName', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'message.fieldRequired' }),
                    whitespace: true,
                  },
                ],
                initialValue: clientName,
              })(<Input placeholder={formatMessage({ id: 'form.name' })} size="large" />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            {/* FAMILY NAME */}
            <Form.Item label={formatMessage({ id: 'form.lastName' })}>
              {getFieldDecorator('clientFamilyName', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'message.fieldRequired' }),
                    whitespace: true,
                  },
                ],
                initialValue: clientFamilyName,
              })(<Input placeholder={formatMessage({ id: 'form.lastName' })} size="large" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label={formatMessage({ id: 'form.phone' })}>
              {getFieldDecorator('clientPhone', {
                rules: [
                  {
                    validator: (_rule, value, callback) => {
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
                initialValue: clientPhone
                  ? parsePhoneNumberFromString(clientPhone)?.nationalNumber
                  : undefined,
              })(
                <Input
                  addonBefore={prefixSelector}
                  prefix={<PhoneOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={formatMessage({ id: 'form.phone' })}
                  style={{ width: '100%' }}
                  size="large"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Email">
              {getFieldDecorator('clientEmail', {
                rules: [
                  {
                    type: 'email',
                    message: formatMessage(
                      {
                        id: 'message.inputError',
                      },
                      { input: 'Email' },
                    ),
                  },
                ],
                initialValue: clientEmail,
              })(
                <Input
                  prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Email"
                  size="large"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}

const WrapperClientDetailsForm = Form.create<ClientDetailsFormProps>({
  name: 'clientDetails',
})(ClientDetailsForm);

export default WrapperClientDetailsForm;
