import { Mitor } from "./mitor";

export interface MiterRoom {
    _id: string;
    room: number;
    foor: number;
    section: number;
    mitor_id: string;
    current_month: {
        num: number,
        time_edit: string
    }
    last_month: {
        num: number,
        time_edit: string
    }
}