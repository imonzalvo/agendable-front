import button from './en-US/button';
import navBar from './en-US/navBar';
import booking from './en-US/booking';
import messages from './en-US/messages';
import form from './en-US/form';
import actions from './en-US/actions';
import modal from './en-US/modal';
import dates from './en-US/dates';

export default {
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  ...button,
  ...navBar,
  ...booking,
  ...messages,
  ...form,
  ...actions,
  ...modal,
  ...dates,
  'notifications.newBooking': 'New booking',
  'notifications.updatedBooking': 'Booking updated',
  'notifications.deletedBooking': 'Booking deleted',
  'navBar.home': 'Calendar',
  'navBar.settings': 'Settings',
};
