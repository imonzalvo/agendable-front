import React, { useState } from 'react';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useQuery } from '@apollo/react-hooks';

import AdminCalendar from '@/components/AdminCalendar';
import NewBookingModal from '@/components/NewBookingModal';
import { GetBranchEmployees } from '@/queries/adminPageQueries';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import { useBusiness } from '@/components/BussinessGetter';

export interface ModalState {
  id: 'NEW_BOOKING' | null;
  params?: {
    date?: Date;
  };
}

export default function Admin() {
  const { branches } = useBusiness();
  const [modal, setModal] = useState<ModalState>({ id: null });
  const employeesResponse = useQuery<IGetBranchEmployees>(GetBranchEmployees, {
    variables: { id: branches[0].id },
  });

  return (
    <div>
      <AdminCalendar
        setModal={setModal}
        employeesResponse={employeesResponse}
        branchId={branches[0].id}
      />

      <NewBookingModal
        visible={modal.id === 'NEW_BOOKING'}
        modalParams={modal.params}
        employeesResponse={employeesResponse}
        onOk={() => setModal({ id: null })}
        onCancel={() => setModal({ id: null })}
        branchId={branches[0].id}
      />
    </div>
  );
}
