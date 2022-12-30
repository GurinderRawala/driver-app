import React, { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { PMReduxStore } from "./configure-store";

export interface PMReduxProviderProps{
    children: ReactNode
}
export const PMReduxProvider: FC<PMReduxProviderProps> = ({children}) =>(
    <Provider store={PMReduxStore}>{children}</Provider>
)