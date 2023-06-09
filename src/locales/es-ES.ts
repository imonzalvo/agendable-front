import button from './es-ES/button';
import navBar from './es-ES/navBar';
import booking from './es-ES/booking';
import messages from './es-ES/messages';
import form from './es-ES/form';
import actions from './es-ES/actions';
import modal from './es-ES/modal';
import dates from './es-ES/dates';

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
  'notifications.newBooking': 'Nueva reserva',
  'notifications.updatedBooking': 'Reserva actualizada',
  'notifications.deletedBooking': 'Reserva eliminada',
  'navBar.home': 'Calendario',
  'navBar.settings': 'Configuracion',
  'navBar.landing-settings': 'Pagina de Inicio',
};
