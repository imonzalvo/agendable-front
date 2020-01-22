import React, { useState, useContext } from 'react';
import 'moment/locale/es';
import { useQuery } from '@apollo/react-hooks';

import AdminCalendar from '@/components/AdminCalendar';
import NewBookingModal from '@/components/NewBookingModal';
import EditBookingModal from '@/components/EditBookingModal';
import { GetBranchEmployees } from '@/queries/adminPageQueries';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import { BusinessContext } from '@/components/BussinessGetter';
import GlobalStyles from './styles';

export interface ModalState {
  id: 'NEW_BOOKING' | 'EDIT_BOOKING' | null;
  params?: {
    date?: Date | string;
    bookingId?: string;
    employeeId?: string;
    selectedServices?: string[];
    selectedStartTime?: string | Date;
    selectedDuration?: number;
    services?: string[];
    clientEmail?: string;
    clientName?: string;
    clientFamilyName?: string;
    clientPhone?: string;
  };
}

export interface BookingState {
  selectedServices: string[];
  selectedEmployee?: string;
  selectedStartTime?: string | Date;
  selectedDuration?: number;
  errors: {
    [key: string]: string;
  }[];
}

export default function Admin() {
  const {
    business: { branches },
  } = useContext(BusinessContext);
  const [modal, setModal] = useState<ModalState>({ id: null });
  const employeesResponse = useQuery<IGetBranchEmployees>(GetBranchEmployees, {
    variables: { id: branches[0].id },
  });

  return (
    <div>
      <GlobalStyles isModalOpen={!!modal.id} />
      <AdminCalendar
        setModal={setModal}
        employeesResponse={employeesResponse}
        branchId={branches[0].id}
      />

      {modal.id === 'NEW_BOOKING' && (
        <NewBookingModal
          visible={modal.id === 'NEW_BOOKING'}
          modalParams={modal.params}
          employeesResponse={employeesResponse}
          onOk={() => setModal({ id: null, params: {} })}
          onCancel={() => setModal({ id: null, params: {} })}
          branchId={branches[0].id}
        />
      )}

      {modal.id === 'EDIT_BOOKING' && (
        <EditBookingModal
          visible={modal.id === 'EDIT_BOOKING'}
          modalParams={modal.params}
          employeesResponse={employeesResponse}
          onOk={() => setModal({ id: null, params: {} })}
          onCancel={() => setModal({ id: null, params: {} })}
          branchId={branches[0].id}
        />
      )}
    </div>
  );
}
