import React, { useState } from 'react';
import { match as matchType } from 'react-router-dom';

import BusinessGetter from '../../../components/BussinessGetter';

export const BusinessContext = React.createContext({
  businessId: '',
  businessName: '',
  branches: [],
});

export default function BusinessHandleLayout({
  match,
  children,
}: {
  match: matchType<{ businessHandle: string }>;
  children: any;
}) {
  const [business, setBusiness] = useState({ businessId: '', businessName: '', branches: [] });

  if (!match || !match.params || !match.params.businessHandle) {
    return <h1>404 - not found</h1>;
  }
  return (
    <BusinessGetter handle={match.params.businessHandle} setBusiness={setBusiness}>
      <BusinessContext.Provider value={business}>
        {business.branches && business.branches.length > 0 ? children : 'Need branchs'}
      </BusinessContext.Provider>
    </BusinessGetter>
  );
}
