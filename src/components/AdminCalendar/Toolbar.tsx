import React from 'react';
import { Button } from 'antd';
import { ToolbarProps } from 'react-big-calendar';

interface CustomToolbarProps extends ToolbarProps {
  onNewBooking: (date: Date) => void;
}

function CustomToolbar({
  localizer: { messages },
  date,
  label,
  onNavigate,
  onNewBooking,
}: CustomToolbarProps) {
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => onNavigate('TODAY')}>
          {messages.today}
        </button>
        <button type="button" onClick={() => onNavigate('PREV')}>
          {messages.previous}
        </button>
        <button type="button" onClick={() => onNavigate('NEXT')}>
          {messages.next}
        </button>
      </span>

      <span className="rbc-toolbar-label">{label}</span>
      <Button type="primary" onClick={() => onNewBooking(date)}>
        Agendar
      </Button>
    </div>
  );
}

export default CustomToolbar;
