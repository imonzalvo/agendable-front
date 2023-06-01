import React, { useContext, useMemo, useState } from 'react';
import { Button, Form, Input, Modal, Select, Space, TimePicker } from 'antd';
import { useMutation } from '@apollo/client';
import { SET_UP_EMPLOYEES } from '@/components/AuthFlow/queries';
import moment from 'moment-timezone';

import { AuthContext } from '@/layouts';
import router from 'umi/router';
import Card from '@/components/Card';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import { formatMessage } from 'umi-plugin-locale';
interface EmployeesProps {
  id: string;
  givenName: string;
}

const getMomentFromStringHour = (hour: string) => {
  const dateObj = new Date();

  const dateStr = dateObj
    .toISOString()
    .split('T')
    .shift();

  return moment(dateStr + ' ' + hour);
};

const ModalForm = ({
  form,
  onFinish,
  onFinishFailed,
  defaultAvailabilityItemStartDate,
  defaultAvailabilityItemEndDate,
}) => {
  return (
    <Form
      layout="vertical"
      name="employee"
      size="large"
      requiredMark="optional"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Title level={4}>Datos Empleado</Title>
      <Form.Item
        name="givenName"
        label="Nombre"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Nombre' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'nombre' }),
          },
        ]}
      >
        <Input placeholder="Juan" />
      </Form.Item>
      <Form.Item
        name="familyName"
        label="Apellido"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Nombre' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'nombre' }),
          },
        ]}
      >
        <Input placeholder="Perez" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Teléfono"
        rules={[
          {
            type: 'string',
            message: formatMessage({ id: 'message.inputError' }, { input: 'Teléfono' }),
          },
          {
            required: true,
            message: formatMessage({ id: 'message.inputMissing' }, { input: 'teléfono' }),
          },
        ]}
      >
        <Input placeholder="099 123 456" addonBefore="+598" />
      </Form.Item>

      <Title level={4}>Horarios</Title>

      <Form.List name="schedules">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'id']}
                  style={{ width: 128 }}
                  hidden={true}
                ></Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'key']}
                  style={{ width: 128 }}
                  initialValue={restField.fieldKey}
                  hidden={true}
                ></Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'day']}
                  label="Dia"
                  rules={[
                    {
                      required: true,
                      message: 'Seleccionar dia!',
                      type: 'string',
                    },
                  ]}
                  style={{ width: 128 }}
                >
                  <Select placeholder="Dia">
                    <Select.Option value="MONDAY">Lunes</Select.Option>
                    <Select.Option value="TUESDAY">Martes</Select.Option>
                    <Select.Option value="WEDNESDAY">Miercoles</Select.Option>
                    <Select.Option value="THURSDAY">Jueves</Select.Option>
                    <Select.Option value="FRIDAY">Viernes</Select.Option>
                    <Select.Option value="SATURDAY">Sabado</Select.Option>
                    <Select.Option value="SUNDAY">Domingo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'range']}
                  label="Rango"
                  rules={[
                    {
                      required: true,
                      message: 'Seleccionar horario!',
                      type: 'array',
                    },
                    {
                      message: 'Hora de fin debe ser despues de la hora de comienzo!',
                      validator: (_, value) => {
                        const from = value[0];
                        const to = value[1];
                        const isValidToTime = from.isBefore(to);
                        if (isValidToTime) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject('Some message here');
                        }
                      },
                    },
                  ]}
                >
                  <TimePicker.RangePicker
                    placeholder={['Comienzo', 'Fin']}
                    format={'HH:mm'}
                    minuteStep={15}
                    picker="time"
                    defaultValue={[
                      defaultAvailabilityItemStartDate,
                      defaultAvailabilityItemEndDate,
                    ]}
                  />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Agregar rango de horarios
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form>
  );
};

const formatAvailabilityItems = (values: any) => {
  return values.schedules.map(schedule => {
    return {
      id: schedule.id,
      day: schedule.day,
      from: schedule.range[0].format('HH:mm'),
      to: schedule.range[1].format('HH:mm'),
    };
  });
};

const EmployeeForm = () => {
  const { user, setUser } = useContext(AuthContext);

  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [createEmployee, { loading: isLoading }] = useMutation(SET_UP_EMPLOYEES, {
    onCompleted: data => {
      setEmployees([...employees, data.setUpEmployees.employees[0]]);
      setIsModalVisible(false);
      form.resetFields();
    },
    onError: err => console.log(JSON.stringify(err)),
  });

  const defaultAvailabilityItemStartDate = useMemo(() => {
    return getMomentFromStringHour('8:00');
  }, []);

  const defaultAvailabilityItemEndDate = useMemo(() => {
    return getMomentFromStringHour('18:00');
  }, []);

  const onFinish = (values: any) => {
    const formattedAvailabilityItems = formatAvailabilityItems(values);

    const singleEmployeeData = [
      {
        givenName: values.givenName,
        familyName: values.familyName,
        phone: values.phone,
        availabilityItems: formattedAvailabilityItems,
      },
    ];

    createEmployee({
      variables: {
        data: singleEmployeeData,
      },
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleContinue = () => {
    const userBusiness = user.business != null ? {} : user.business;

    const updatedUser = {
      ...user,
      business: {
        ...userBusiness,
        employees: employees,
      },
    };

    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    router.replace(`/a/${user.business.handle}`);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button style={{ marginBottom: 8 }} onClick={() => setIsModalVisible(true)}>
        Agregar Empleado
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
        <ModalForm
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          defaultAvailabilityItemStartDate={defaultAvailabilityItemStartDate}
          defaultAvailabilityItemEndDate={defaultAvailabilityItemEndDate}
        />
      </Modal>
      {employees.map(({ id, givenName, familyName, phone }) => (
        <Card
          key={id}
          id={id}
          handleClick={() => {}}
          title={`${givenName} ${familyName}`}
          details={phone}
          hasActions={false}
        />
      ))}
      <Button
        type="primary"
        size="large"
        onClick={handleContinue}
        disabled={!employees.length}
        style={{ marginTop: 8 }}
      >
        Continuar
      </Button>
    </div>
  );
};

export default EmployeeForm;
