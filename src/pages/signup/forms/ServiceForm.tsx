import React, { useState } from 'react';
import { Form, Input, Button, Modal, Select } from 'antd';
import { useMutation } from '@apollo/client';
import Card from '@/components/Card';
import { SET_UP_SERVICES } from '@/components/AuthFlow/queries';
import { getDurations } from '@/components/BookingDetails/BookingCard';
import { formatMessage } from 'umi-plugin-locale';

interface ServiceForm {
  setCurrentStep: (step: number) => void;
}

interface ServiceProps {
  id: string;
  duration: number;
  price: number;
  name: string;
  description: string;
}

const serviceTest = {
  name: 'Corte de pelo',
  price: 700,
  id: '1',
  duration: 45,
  description: 'Muy prolijo',
};

const ModalForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      name="serviceInfo"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={formatMessage({ id: 'form.name' })}
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={formatMessage({ id: 'form.price' })}
        name="price"
        rules={[{ required: true, message: 'Please input the price!' }]}
      >
        <Input type="number" prefix="$" min={1} />
      </Form.Item>

      <Form.Item label={formatMessage({ id: 'form.duration' })}>
        <Select
          style={{ width: '100%' }}
          size="large"
          value={1800}
          // onChange={onSelectDuration}
        >
          {getDurations()}
        </Select>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        // rules={[{ required: true, message: 'Please input the email!' }]}
      >
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
};

const ServiceForm = ({ setCurrentStep }: ServiceForm) => {
  const [services, setServices] = useState<ServiceProps[]>([serviceTest]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [createService, { data, loading: isLoading }] = useMutation(SET_UP_SERVICES, {
    onCompleted: data => {
      console.log('data ', data);
      // Add data to services
      // setServices([...services, data])
    },
    onError: err => console.log(JSON.stringify(err)),
  });

  const onFinish = (values: any) => {
    console.log('Success:', values);
    createService({
      variables: {
        ...values,
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Button onClick={() => setIsModalVisible(true)}>Add service</Button>
      <Modal
        title="Create service"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      >
        <ModalForm onFinish={onFinish} onFinishFailed={onFinishFailed} />
      </Modal>
      {services.map(({ id, name, description, price, duration }) => (
        <Card
          key={id}
          id={id}
          handleClick={() => {}}
          title={name}
          details={description}
          hasActions={false}
          service={{ price, duration, name }}
        />
      ))}
      <Button type="primary" onClick={() => setCurrentStep(2)}>
        Continue
      </Button>
    </div>
  );
};

export default ServiceForm;
