"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setStep, setPersonalInfo, setPermitDetails, setDocuments, resetPermit } from "./permitSlice";

export default function PermitForm() {
  const dispatch = useDispatch();
  const { step, personalInfo, permitDetails, documents } = useSelector((state: RootState) => state.permit);

  // Step 1: Personal Info
  const handlePersonalInfo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setPersonalInfo({
      name: (e.target as any).name.value,
      email: (e.target as any).email.value,
      phone: (e.target as any).phone.value,
    }));
    dispatch(setStep(2));
  };

  // Step 2: Permit Details
  const handlePermitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setPermitDetails({
      park: (e.target as any).park.value,
      date: (e.target as any).date.value,
      duration: (e.target as any).duration.value,
    }));
    dispatch(setStep(3));
  };

  // Step 3: Upload Documents
  const handleDocuments = (e: React.FormEvent) => {
    e.preventDefault();
    const file = (e.target as any).document.files[0];
    dispatch(setDocuments({
      fileName: file?.name || "",
      fileUrl: file ? URL.createObjectURL(file) : "",
    }));
    dispatch(setStep(4));
  };

  // Step 4: Review & Confirm
  const handleConfirm = () => {
    alert("Permit application submitted!");
    dispatch(resetPermit());
  };

  return (
    <div className="max-w-xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">National Park Permit Application</h2>
      {step === 1 && (
        <form onSubmit={handlePersonalInfo} className="space-y-4">
          <input name="name" className="w-full border rounded px-3 py-2" placeholder="Name" defaultValue={personalInfo.name} required />
          <input name="email" className="w-full border rounded px-3 py-2" placeholder="Email" defaultValue={personalInfo.email} required />
          <input name="phone" className="w-full border rounded px-3 py-2" placeholder="Phone" defaultValue={personalInfo.phone} required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handlePermitDetails} className="space-y-4">
          <input name="park" className="w-full border rounded px-3 py-2" placeholder="National Park" defaultValue={permitDetails.park} required />
          <input name="date" type="date" className="w-full border rounded px-3 py-2" defaultValue={permitDetails.date} required />
          <input name="duration" className="w-full border rounded px-3 py-2" placeholder="Duration (days)" defaultValue={permitDetails.duration} required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleDocuments} className="space-y-4">
          <input name="document" type="file" className="w-full border rounded px-3 py-2" required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Next</button>
        </form>
      )}
      {step === 4 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Review & Confirm</h3>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Name:</strong> {personalInfo.name}</p>
            <p><strong>Email:</strong> {personalInfo.email}</p>
            <p><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>National Park:</strong> {permitDetails.park}</p>
            <p><strong>Date:</strong> {permitDetails.date}</p>
            <p><strong>Duration:</strong> {permitDetails.duration}</p>
            <p><strong>Document:</strong> {documents.fileName}</p>
          </div>
          <button onClick={handleConfirm} className="bg-green-600 text-white px-6 py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
}
