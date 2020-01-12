import React, { useState } from 'react';
import { Popover, Card, Avatar, Typography, Drawer, Icon, Button } from 'antd';
import { EventWrapperProps } from 'react-big-calendar';
import moment from 'moment-timezone';
import { formatMessage } from 'umi-plugin-locale';
import momentDurationFormatSetup from 'moment-duration-format';
import { isMobile } from 'react-device-detect';
import { Swipeable } from 'react-swipeable';

import ServiceDetail from '@/components/BookingInfo/ServiceDetail';
import EventWrapperGlobalStyles, { Section, Price } from './eventWrapperStyles';
import getColor from '@/utils/getColor';
import { GetBranchEmployees_getBranch_employees_items as Employee } from '@/queries/__generated__/GetBranchEmployees';

const { Meta } = Card;
const { Title, Text } = Typography;
momentDurationFormatSetup(moment);

export type CustomEventWrapperProps = React.PropsWithChildren<
  EventWrapperProps<{
    id: string;
    title: string;
    start: Date;
    end: Date;
    resourceId: string;
    clientName: string;
    clientFamilyName: string;
    clientEmail: string;
    employee: Employee;
  }>
>;

export default function CustomEventWrapper({ children, event }: CustomEventWrapperProps) {
  const [isDetailDrawerOpen, setDetailDrawerOpen] = useState(false);

  const onOpenEdit = () => {
    // TODO: Edit
    alert('EDITAR');
  };

  const onDelete = () => {
    // TODO: Delete
    alert('BORRAR');
  };

  const renderDate = () => (
    <Section>
      <div style={{ flexDirection: 'column' }}>
        <Title level={4} style={{ marginBottom: 0 }}>{`${moment(event.start).format(
          'H:mm',
        )} - ${moment(event.end).format('H:mm')}`}</Title>
        <Text type="secondary" style={{ marginBottom: 0 }}>
          {moment(event.start).format('LL')}
        </Text>
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Title level={4}>
          {moment
            .duration(moment(event.end).diff(moment(event.start)))
            .format('h[h] m[min]', { trim: 'both' })}
        </Title>
      </div>
    </Section>
  );

  const renderTotal = () => (
    <Section style={{ paddingBottom: 0 }}>
      <Price>
        <Title level={4}>{formatMessage({ id: 'booking.total' })}</Title>
        <Title level={4} style={{ marginTop: 0 }}>
          {`UYU ${40}`}
        </Title>
      </Price>
    </Section>
  );

  const renderService = () => (
    <Section>
      {/* TODO: Get service info */}
      <ServiceDetail
        name="Service 3"
        price={40}
        professional={`${event.employee.givenName} ${event.employee.familyName}`}
      />
    </Section>
  );

  const renderDetails = () => {
    return (
      <Card
        style={{
          height: 'min-content',
          width: isMobile ? '100%' : 340,
        }}
        bordered={false}
        // TODO: Link actions
        actions={
          isMobile
            ? [
                <div style={{ color: '#ff4d4f' }} onClick={onDelete}>
                  <Icon type="delete" key="delete" /> {formatMessage({ id: 'actions.delete' })}
                </div>,
              ]
            : undefined
        }
        extra={
          isMobile && (
            <Button type="link" onClick={onOpenEdit}>
              <Icon type="edit" key="edit" /> {formatMessage({ id: 'actions.edit' })}
            </Button>
          )
        }
        size="small"
      >
        <Meta
          avatar={
            <Avatar
              style={{ width: 40, height: 40, backgroundColor: getColor(event.title) }}
              size="large"
            >
              {event.clientName.substring(0, 1).toUpperCase()}
            </Avatar>
          }
          title={event.title}
          description={event.clientEmail}
          style={{ padding: '12px 0' }}
        />

        {renderDate()}
        {renderService()}
        {renderTotal()}
      </Card>
    );
  };

  const child = React.Children.only(children) as React.ReactElement<any>;

  if (isMobile) {
    return (
      <>
        {React.cloneElement(child, {
          onClick: () => {
            setDetailDrawerOpen(true);
          },
        })}

        <Drawer
          placement="bottom"
          closable={false}
          onClose={() => {
            setDetailDrawerOpen(false);
          }}
          visible={isDetailDrawerOpen}
          destroyOnClose
          height="auto"
          bodyStyle={{ padding: 0 }}
        >
          <Swipeable
            onSwiped={({ deltaY }) => {
              if (deltaY < -10) {
                setDetailDrawerOpen(false);
              }
            }}
          >
            {renderDetails()}
          </Swipeable>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <EventWrapperGlobalStyles />
      <Popover
        mouseLeaveDelay={0}
        placement="right"
        overlayClassName="event-popover"
        content={renderDetails()}
      >
        {React.cloneElement(child, {
          onClick: onOpenEdit,
        })}
      </Popover>
    </>
  );
}
