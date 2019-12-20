import React, { useState } from 'react';
import moment from 'moment-timezone';

export default function TimeSlotWrapper(props: {
  children: React.ReactNode;
  resource?: string;
  value: Date;
  isAvailable: (date: Date, resource: string) => boolean;
}): React.ReactElement<any> {
  const [isHover, setHover] = useState(false);

  // If resource is null/undefined this slot is a gutter/grid space
  if (!props.resource) {
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
    children: isHover && time,
  });
}
