import React, { useState } from 'react';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useQuery } from '@apollo/react-hooks';

import AdminCalendar from '@/components/AdminCalendar';
import NewBookingModal from '@/components/NewBookingModal';
import { GetBranchEmployees } from '@/queries/adminPageQueries';
import { GetBranchEmployees as IGetBranchEmployees } from '@/queries/__generated__/GetBranchEmployees';
import { useBusiness } from '@/components/BussinessGetter';

export default function Admin() {
  const { branches } = useBusiness();
  const [whichModalOpen, setModalOpen] = useState<'NEW_BOOKING' | null>(null);
  const employeesResponse = useQuery<IGetBranchEmployees>(GetBranchEmployees, {
    variables: { id: branches[0].id },
  });

  return (
    <div>
      <AdminCalendar
        setModalOpen={setModalOpen}
        employeesResponse={employeesResponse}
        branchId={branches[0].id}
      />

      <NewBookingModal
        visible={whichModalOpen === 'NEW_BOOKING'}
        employeesResponse={employeesResponse}
        onOk={() => setModalOpen(null)}
        onCancel={() => setModalOpen(null)}
        branchId={branches[0].id}
      />
    </div>
  );
}
