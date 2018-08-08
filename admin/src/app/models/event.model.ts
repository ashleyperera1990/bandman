import {Band} from "./band.model";

export class Event {

    id: number;
    title: string;
    dateTime: Date;
    location;
    details: string;
    facebookEventUrl: string;
    band: Band;

}