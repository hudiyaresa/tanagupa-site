import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PermitState = {
  step: number;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  permitDetails: {
    park: string;
    date: string;
    duration: string;
  };
  documents: {
    fileName: string;
    fileUrl: string;
  };
};

const initialState: PermitState = {
  step: 1,
  personalInfo: { name: '', email: '', phone: '' },
  permitDetails: { park: '', date: '', duration: '' },
  documents: { fileName: '', fileUrl: '' },
};

const permitSlice = createSlice({
  name: 'permit',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setPersonalInfo(state, action: PayloadAction<{ name: string; email: string; phone: string }>) {
      state.personalInfo = action.payload;
    },
    setPermitDetails(state, action: PayloadAction<{ park: string; date: string; duration: string }>) {
      state.permitDetails = action.payload;
    },
    setDocuments(state, action: PayloadAction<{ fileName: string; fileUrl: string }>) {
      state.documents = action.payload;
    },
    resetPermit(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { setStep, setPersonalInfo, setPermitDetails, setDocuments, resetPermit } = permitSlice.actions;
export const permitReducer = permitSlice.reducer;
