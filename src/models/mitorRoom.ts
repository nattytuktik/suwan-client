import { Mitor } from "./mitor";

export interface MiterRoom {
    _id: string;
    ROOM: number

    FOOR: number

    SECTION: number

    MITOR: {
        _id: string,
        createdAt: Date,
        updatedAt: Date,
        MITOR: Array<Mitor>
    }
}