import { createSlice } from '@reduxjs/toolkit';

export type LayoutReducer = {
    height: number;
    width: number;
}
export const layoutInitialState: LayoutReducer = {
    height: 0,
    width: 0,
}

export type UpdateActionLayoutSlice = { payload: { type: string | undefined, payload: LayoutReducer } };

export const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: layoutInitialState,
    reducers: {
        updateLayoutSlice: (state, action: UpdateActionLayoutSlice) =>{
            const { payload } = action.payload;
            return{
                ...state,
                ...payload,
            }
        }
    },
})

export const { updateLayoutSlice } = layoutSlice.actions

export const layoutReducer =  layoutSlice.reducer