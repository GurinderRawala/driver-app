import { dispatch } from "./configure-store";
import { LayoutReducer, updateLayoutSlice } from "./slices";

export const updateLayoutStore = (
    type: string | undefined,
    payload: LayoutReducer
): void =>{
    dispatch(
        updateLayoutSlice({
            type,
            payload,
        })
    );
}