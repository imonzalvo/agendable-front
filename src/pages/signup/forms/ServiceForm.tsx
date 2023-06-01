import React, { useContext, useState } from 'react';
import { Form, Input, Button, Modal, InputNumber } from 'antd';
import { useMutation } from '@apollo/client';
import Card from '@/components/Card';
import { SET_UP_SERVICES } from '@/components/AuthFlow/queries';
import { formatMessage } from 'umi-plugin-locale';
import router from 'umi/router';
import { AuthContext } from '@/layouts';

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

const ModalForm = ({ form, onFinish, onFinishFailed }) => {
  return (
    <Form
      name="serviceInfo"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        label={formatMessage({ id: 'form.name' })}
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Precio"
        rules={[
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'precio' }),
          },
        ]}
      >
        <InputNumber
          formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          parser={value => value.replace(/\$\s?|(,*)/g, '')}
          min={0}
          defaultValue={599}
          step={50}
          style={{ width: 160 }}
        />
      </Form.Item>
      <Form.Item
        name="duration"
        label="Duración"
        rules={[
          {
            type: 'number',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Duración' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'duracion' }),
          },
        ]}
      >
        <InputNumber
          formatter={value => `${value} mins.`}
          parser={value => value?.split(' ')[0]}
          min={15}
          max={600}
          defaultValue={60}
          step={15}
          style={{ width: 160 }}
        />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <Input.TextArea placeholder="Este servicio.." />
      </Form.Item>
    </Form>
  );
};

const ServiceForm = () => {
  const { user, setUser } = useContext(AuthContext);

  const [services, setServices] = useState<ServiceProps[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [createService, { loading: isLoading }] = useMutation(SET_UP_SERVICES, {
    onCompleted: data => {
      setServices([...services, data.setUpServices.services[0]]);
      setIsModalVisible(false);
      form.resetFields();
    },
    onError: err => console.log(JSON.stringify(err)),
  });

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const singleServiceData = [
      {
        currency: 'UYU',
        description: values.description,
        duration: values.duration,
        name: values.name,
        price: values.price,
      },
    ];

    createService({
      variables: {
        data: singleServiceData,
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleContinue = () => {
    const updatedUser = {
      ...user,
      business: {
        ...user.business,
        services: services,
      },
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    router.push('setup-professionals');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button style={{ marginBottom: 8 }} onClick={() => setIsModalVisible(true)}>
        Agregar Servicio
      </Button>
      <Modal
        title="Create service"
        visible={isModalVisible}
        confirmLoading={isLoading}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => {
          form.submit();
        }}
      >
        <ModalForm form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} />
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
      <Button
        type="primary"
        size="large"
        onClick={handleContinue}
        disabled={!services.length}
        style={{ marginTop: 8 }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default ServiceForm;
