import {BandMember} from "./band-member.model";

export class Band {

    id: number;
    name: string;
    baseLocation: string;
    genre: string;
    info: string;
    bandMembers: BandMember[];
    facebookLink: string;
    youtubeLink: string;
    twitterLink: string;


    constructor() {
        this.name = '';
        this.info = '';
        this.bandMembers = [];
        this.facebookLink = '';
        this.youtubeLink = '';
        this.twitterLink = '';
    }
}