import {Location, NavigateFunction, Params} from "react-router-dom";

export interface RouterProps {
    navigate: NavigateFunction;
    readonly params: Params;
    location: Location;
}

export type WithRouterProps<T> = T & RouterProps;
export type OmitRouter<T> = Omit<T, keyof RouterProps>;