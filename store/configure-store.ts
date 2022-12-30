import { AnyAction, ThunkAction, ThunkMiddleware, configureStore } from "@reduxjs/toolkit";
import { LayoutReducer, layoutInitialState, layoutReducer } from "./slices";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

export type PMStoreState = {
    layoutReducer: LayoutReducer;
};

export type PMStore = ToolkitStore<PMStoreState, AnyAction, [ThunkMiddleware<PMStoreState, AnyAction>]>;

export const PMReduxStore: PMStore = configureStore({
    reducer: {
        layoutReducer
    },
});

export type PMDispatchAction = AnyAction | ThunkAction<unknown, { layoutReducer: LayoutReducer; }, undefined, AnyAction>;

export const dispatch = (action: PMDispatchAction) => {
    if(!PMReduxStore){
        return;
    }

    return PMReduxStore.dispatch(action);
}

export const getStoreState = () => {
    if(!PMReduxStore){
        return { layoutReducer: layoutInitialState };
    }
    return PMReduxStore.getState();
}
