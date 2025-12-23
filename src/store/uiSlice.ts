import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UiState {
    openDialog: boolean;
}

const initialState: UiState = {
    openDialog: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setOpenDialog: (state, action: PayloadAction<boolean>) => {
            state.openDialog = action.payload;
        },
    },
});

export const { setOpenDialog } = uiSlice.actions;

export default uiSlice.reducer;
