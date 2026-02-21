import React from 'react';
import { IntegrationsPage } from '../../pages/IntegrationsPage';
import { PortalGuard } from '../../components/PortalGuard';
export default function Page() {
  return (
    <PortalGuard>
      <IntegrationsPage />
    </PortalGuard>);

}