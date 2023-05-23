import React, { useEffect, useContext, useMemo } from 'react';
import { Form, Input, Button, notification, Select, Space, Popconfirm, TimePicker } from 'antd';
import { DeleteOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { formatMessage } from 'umi-plugin-locale';
import { useMutation } from '@apollo/client';
import { BusinessContext } from '@/components/BussinessGetter';

import {
  UPDATE_EMPLOYEE_DATA,
  CREATE_EMPLOYEE,
  GET_EMPLOYEES_DATA,
  DELETE_EMPLOYEE_DATA,
} from './employeesQueries';

import moment from 'moment-timezone';
import {
  CreateEmployee as ICreateEmployee,
  CreateEmployeeVariables as ICreateEmployeeVariables,
} from './__generated__/CreateEmployee';

import {
  UpdateEmployeeData as IUpdateEmployeeData,
  UpdateEmployeeDataVariables as IUpdateEmployeeDataVariables,
} from './__generated__/UpdateEmployeeData';

import {
  DeleteEmployee as IDeleteEmployee,
  DeleteEmployeeVariables as IDeleteEmployeeVariables,
} from './__generated__/DeleteEmployee';
import { GetEmployeesData_getBusiness_employee } from './__generated__/GetEmployeesData';
import Spacer from '@/components/common/Spacer';
import Title from 'antd/lib/typography/Title';
import { AvailabilityItemEmployeeInputType } from '__generated__/globalTypes';

interface CommonVars {
  branchesId: string[];
  servicesId: string[];
  businessId: string;
}

interface EmployeeDrawerProps {
  employee?: GetEmployeesData_getBusiness_employee;
  action?: 'CREATE' | 'UPDATE';
  onDone: () => void;
  commonVariables: CommonVars;
}

export default function EmployeeDrawer({
  employee,
  action,
  onDone,
  commonVariables,
}: EmployeeDrawerProps) {
  const { business } = useContext(BusinessContext);

  const [form] = Form.useForm();
  form.setFieldsValue({
    keys: [],
  });

  useEffect(() => {
    form.resetFields();
  }, [employee, action]);

  const [updateEmployee, { loading: updateEmployeeLoading }] = useMutation<
    IUpdateEmployeeData,
    IUpdateEmployeeDataVariables
  >(UPDATE_EMPLOYEE_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
  });

  const [deleteEmployee, { loading: _deleteEmployeeLoading }] = useMutation<
    IDeleteEmployee,
    IDeleteEmployeeVariables
  >(DELETE_EMPLOYEE_DATA, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
    refetchQueries: [
      {
        query: GET_EMPLOYEES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

  const [createEmployee, { loading: createEmployeeLoading }] = useMutation<
    ICreateEmployee,
    ICreateEmployeeVariables
  >(CREATE_EMPLOYEE, {
    onError: err =>
      notification.error({
        message: 'Ocurrió un error',
        description: JSON.stringify(err),
      }),
    onCompleted: () => {
      onDone();
    },
    refetchQueries: [
      {
        query: GET_EMPLOYEES_DATA,
        variables: {
          id: business.businessId,
        },
      },
    ],
  });

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
  const onFinish = (values: any) => {
    console.log('values', values);
    const formattedAvailabilityItems: AvailabilityItemEmployeeInputType = formatAvailabilityItems(
      values,
    );
    console.log('formated', formattedAvailabilityItems);
    if (employee?.id) {
      updateEmployee({
        variables: {
          id: employee.id,
          givenName: values.givenName,
          familyName: values.familyName,
          phone: values.phone,
          availabilityItems: formattedAvailabilityItems,
          ...commonVariables,
        },
      });
    } else {
      createEmployee({
        variables: {
          givenName: values.givenName,
          familyName: values.familyName,
          phone: values.phone,
          availabilityItems: formattedAvailabilityItems,
          ...commonVariables,
        },
      });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const sortedEmployeeAvailabilityItems = useMemo(() => {
    if (!employee) {
      return [];
    }
    const shuffledAvailabilityItems = employee.availability.map(item => {
      const dateObj = new Date();

      const dateStr = dateObj
        .toISOString()
        .split('T')
        .shift();

      const fromMoment = moment(dateStr + ' ' + item.from);
      const toMoment = moment(dateStr + ' ' + item.to);
      return {
        id: item.id,
        day: item.day,
        range: [fromMoment, toMoment],
      };
    });

    const sortedAvailabilityItems = shuffledAvailabilityItems.sort((a, b) => {
      const daysOrder = {
        MONDAY: 0,
        TUESDAY: 1,
        WEDNESDAY: 2,
        THURSDAY: 3,
        FRIDAY: 4,
        SATURDAY: 5,
        SUNDAY: 6,
      };
      const priorityA = daysOrder[a.day];
      const priorityB = daysOrder[b.day];
      if (priorityA < priorityB) {
        return -1;
      }
      if (priorityA > priorityB) {
        return 1;
      }

      return priorityA.from.isAfter(priorityB.from);
    });

    return sortedAvailabilityItems;
  }, [employee]);

  const getMomentFromStringHour = (hour: string) => {
    const dateObj = new Date();

    const dateStr = dateObj
      .toISOString()
      .split('T')
      .shift();

    return moment(dateStr + ' ' + hour);
  };

  const defaultAvailabilityItemStartDate = useMemo(() => {
    return getMomentFromStringHour('8:00');
  }, []);

  const defaultAvailabilityItemEndDate = useMemo(() => {
    return getMomentFromStringHour('18:00');
  }, []);

  return (
    <Form
      layout="vertical"
      name="employee"
      initialValues={{
        givenName: employee?.givenName || undefined,
        familyName: employee?.familyName || undefined,
        phone: employee?.phone || undefined,
        schedules: employee ? sortedEmployeeAvailabilityItems : undefined,
      }}
      size="large"
      requiredMark="optional"
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {console.log('defaultValueFields', {
        givenName: employee?.givenName || undefined,
        familyName: employee?.familyName || undefined,
        phone: employee?.phone || undefined,
        schedules: employee ? sortedEmployeeAvailabilityItems : undefined,
      })}
      <Title level={4}>Datos Personales</Title>
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

      <div style={{ display: 'flex' }}>
        <Popconfirm
          title="¿Eliminar Empleado? Esta acción no se puede deshacer."
          onConfirm={() =>
            deleteEmployee({
              variables: {
                id: employee.id,
              },
            })
          }
          okText="Si, ELIMINAR"
          cancelText="No, cancelar"
          arrowPointAtCenter
          icon={<DeleteOutlined />}
          okButtonProps={{ danger: true }}
        >
          <Button danger type="ghost" icon={<DeleteOutlined />} />
        </Popconfirm>

        <Spacer width={12} />

        <Form.Item style={{ width: '100%' }}>
          <Button
            type="primary"
            block
            size="large"
            htmlType="submit"
            loading={updateEmployeeLoading || createEmployeeLoading}
          >
            {action === 'UPDATE' ? 'Guardar cambios' : 'Crear sucursal'}
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
