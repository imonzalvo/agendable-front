import React from 'react';
import { Form, Input, Col, Row, Icon, Select, Typography, Card } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { isValidNumber } from 'libphonenumber-js';

// import { FormButtonsContainer } from './styles';
const { Option } = Select;

// export interface ClientDetailsFormProps extends FormComponentProps {
//   clientEmail: string;
//   clientName: string;
//   clientFamilyName: string;
//   clientPhone: string;
// }

function ClientDetailsForm({ form }: FormComponentProps): JSX.Element {
  const { getFieldDecorator } = form;

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '598',
  })(
    <Select style={{ width: 80 }}>
      <Option value="598">+598</Option>
    </Select>,
  );

  return (
    <Card style={{ height: '75%', overflow: 'auto' }}>
      <Typography.Title>Client Details</Typography.Title>
      <Form>
        <Row gutter={32}>
          <Col span={12}>
            {/* GIVEN NAME */}
            <Form.Item label="First Name">
              {getFieldDecorator('clientName', {
                rules: [
                  { required: true, message: 'Please input your first name!', whitespace: true },
                ],
              })(<Input placeholder="First Name" size="large" />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            {/* FAMILY NAME */}
            <Form.Item label="Last Name">
              {getFieldDecorator('clientFamilyName', {
                rules: [
                  { required: true, message: 'Please input your last name!', whitespace: true },
                ],
              })(<Input placeholder="Last Name" size="large" />)}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Phone Number">
              {getFieldDecorator('clientPhone', {
                rules: [
                  {
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
          </Col>
          <Col span={24}>
            <Form.Item label="E-mail">
              {getFieldDecorator('clientEmail', {
                rules: [
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
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

const WrapperClientDetailsForm = Form.create<FormComponentProps>({
  name: 'clientDetails',
})(ClientDetailsForm);

export default WrapperClientDetailsForm;
