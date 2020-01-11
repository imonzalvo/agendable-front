import React, { useState } from 'react';
import moment from 'moment-timezone';
import { ModalState } from '@/pages/a/$businessHandle/admin';

function TimeGutter(props) {
  const splitTime = (time: String) => {
    const splitted = time.split(':');
    return (
      <>
        <span style={{ fontWeight: 600, letterSpacing: '-0.1em', color: 'rgb(115, 115, 115)' }}>
          {splitted[0]}
        </span>
        <sup
          style={{
            top: '-0.5em',
            fontSize: '60%',
            fontWeight: 500,
            paddingLeft: 2,
            color: 'rgb(115, 115, 115)',
          }}
        >
          {splitted[1]}
        </sup>
      </>
    );
  };
  return <span className="rbc-label">{splitTime(props.children)}</span>;
}

export default function TimeSlotWrapper(props: {
  children: React.ReactNode;
  resource?: string;
  value: Date;
  isAvailable: (date: Date, resource: string) => boolean;
  setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}): React.ReactElement<any> {
  const [isHover, setHover] = useState(false);

  // If resource is null/undefined this slot is a gutter/grid space
  if (!props.resource) {
    const child = React.Children.only(props.children) as React.ReactElement<any>;
    if (child?.props?.children?.props.className === 'rbc-label') {
      return <TimeGutter>{child.props.children.props.children}</TimeGutter>;
    }
    return props.children as React.ReactElement<any>;
  }

  // We grab the child of the slotWrapper so we can add content and styles to it
  const child = React.Children.only(props.children) as React.ReactElement<any>;
  const time = moment(props.value).format('HH:mm');

  // Clone child (slot) but add custom props
  return React.cloneElement(child, {
    className: `${child.props.className} ${props.isAvailable(props.value, props.resource) &&
      'available-slot-bg'} ${isHover && 'hovered'}`,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: () => {
      props.setModal({
        id: 'NEW_BOOKING',
        params: { date: props.value, employeeId: props.resource },
      });
    },
    onTouchStart: () => setHover(true),
    onTouchEnd: () => setHover(false),
    children: isHover && time,
  });
}
