import { Component, OnInit } from '@angular/core';
import {BandMember} from "../../../models/band-member.model";
import {ActivatedRoute} from "@angular/router";
import {BandService} from "../../../services/band.service";

@Component({
  selector: 'app-band-member-detail',
  templateUrl: './band-member-detail.component.html',
  styleUrls: ['./band-member-detail.component.scss']
})
export class BandMemberDetailComponent implements OnInit {

    band;
    bandMember: BandMember;

    constructor(private route: ActivatedRoute, private bandSerice: BandService) {
        this.band = bandSerice.getCurrentBand();
    }

    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.bandMember = this.band.bandMembers.find((element) => {
                return element.id.toString() === params.id;
            })
        });

    }
}
