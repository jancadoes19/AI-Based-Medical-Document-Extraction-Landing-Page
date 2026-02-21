import React from 'react';
import { ImmenzAIPage } from '../../pages/ImmenzAIPage';
import { PortalGuard } from '../../components/PortalGuard';
export default function Page() {
  return (
    <PortalGuard>
      <ImmenzAIPage />
    </PortalGuard>);

}