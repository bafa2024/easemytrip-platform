import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  isSidebarOpen: boolean;
  isLoading: boolean;
  notification: {
    show: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  } | null;
}

const initialState: UIState = {
  isSidebarOpen: false,
  isLoading: false,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    showNotification: (state, action: PayloadAction<UIState['notification']>) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { toggleSidebar, setLoading, showNotification, hideNotification } = uiSlice.actions;
export default uiSlice.reducer;