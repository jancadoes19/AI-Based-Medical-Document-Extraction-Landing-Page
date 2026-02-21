import React from 'react';
import { UseCasesPage } from '../../pages/UseCasesPage';
import { PortalGuard } from '../../components/PortalGuard';
export default function Page() {
  return (
    <PortalGuard>
      <UseCasesPage />
    </PortalGuard>);

}