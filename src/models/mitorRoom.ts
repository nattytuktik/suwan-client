import { Mitor } from "./mitor";

export interface MiterRoom {
    _id: string;
    room: number;
    foor: number;
    section: number;
    mitor: any;
    customers: Array<any>;
}