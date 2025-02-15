import { createSlice } from "@reduxjs/toolkit";

const modifyTextSlice = createSlice({
    name: "modifyTextSliceTask39",
    initialState: {value: ""},
    reducers: {
        changeText: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeText } = modifyTextSlice.actions;
export default modifyTextSlice.reducer;