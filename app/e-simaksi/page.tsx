"use client";
import React from 'react';
import ClientLayout from '@/components/ClientLayout';
import ProgressSidebar from './ProgressSidebar';
import PermitForm from './PermitForm';
import Providers from '@/components/Providers';

export default function ESimaksiPage() {
  return (
    <Providers>
      <ClientLayout>
        <div className="flex flex-col md:flex-row gap-8 pt-32 pb-8 min-h-screen bg-gray-50">
          <ProgressSidebar />
          <div className="flex-1">
            <PermitForm />
          </div>
        </div>
      </ClientLayout>
    </Providers>
  );
}
