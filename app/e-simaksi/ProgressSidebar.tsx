"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const steps = [
  'Personal Info',
  'Trip Details',
  'Upload Documents',
  'Review & Submit',
];

export default function ProgressSidebar() {
  const currentStep = useSelector((state: RootState) => state.permit.step);

  return (
    <aside className="w-64 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Application Progress</h2>
      <ul className="space-y-4">
        {steps.map((step, idx) => (
          <li
            key={step}
            className={`flex items-center gap-2 ${idx + 1 === currentStep ? 'font-bold text-blue-600' : 'text-gray-500'}`}
          >
            <span className={`w-6 h-6 flex items-center justify-center rounded-full border ${idx + 1 <= currentStep ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-200 text-gray-400 border-gray-300'}`}>{idx + 1}</span>
            {step}
          </li>
        ))}
      </ul>
    </aside>
  );
}
