import React from 'react';
import { Popover, Card, Avatar, Typography } from 'antd';
import { EventWrapperProps } from 'react-big-calendar';
import moment from 'moment-timezone';
import { formatMessage } from 'umi-plugin-locale';
import momentDurationFormatSetup from 'moment-duration-format';

import ServiceDetail from '@/components/BookingInfo/ServiceDetail';
import EventWrapperGlobalStyles, { Section, Price } from './eventWrapperStyles';
import getColor from '@/utils/getColor';
import { GetBookingsForBranch_getBranch_bookings_items as Booking } from './__generated__/GetBookingsForBranch';
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
  }>
> & {
  booking: Booking | null | undefined;
  employee: Employee | null | undefined;
};

export default function CustomEventWrapper({
  children,
  event,
  booking,
  employee,
}: CustomEventWrapperProps) {
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
        professional={`${employee?.givenName} ${employee?.familyName}`}
      />
    </Section>
  );

  if (booking && employee) {
    return (
      <>
        <EventWrapperGlobalStyles />
        <Popover
          mouseLeaveDelay={0}
          placement="right"
          overlayClassName="event-popover"
          content={
            <Card
              style={{
                height: 'min-content',
                width: 340,
              }}
              bordered={false}
              // TODO: Research if it's good to have actions in popover
              // actions={[
              //   <div>
              //     <Icon type="edit" key="edit" /> Edit
              //   </div>,
              //   <div>
              //     <Icon type="delete" key="delete" /> Delete
              //   </div>,
              // ]}
            >
              <Meta
                avatar={
                  <Avatar
                    style={{ width: 40, height: 40, backgroundColor: getColor(event.title) }}
                    size="large"
                  >
                    {event.title
                      .trim()
                      .substring(0, 1)
                      .toUpperCase()}
                  </Avatar>
                }
                title={event.title}
                description={booking.clientEmail}
                style={{ padding: '12px 0' }}
              />

              {renderDate()}
              {renderService()}
              {renderTotal()}
            </Card>
          }
        >
          {children}
        </Popover>
      </>
    );
  }
  return (
    <Popover content={formatMessage({ id: 'message.error.fetching.bookingDetails' })}>
      {children}
    </Popover>
  );
}
