import { Component, OnInit } from '@angular/core';
import {BandService} from "../../../services/band.service";
import {Band} from "../../../models/band.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-band-detail',
  templateUrl: './band-detail.component.html',
  styleUrls: ['./band-detail.component.scss'],
})
export class BandDetailComponent implements OnInit {

    band: Band;
    readOnly = true;

    constructor(private bandService: BandService, private router: Router) {
    }

    ngOnInit() {
        this.getBand();
    }

    getBand() {
        this.bandService.getBand().subscribe((band) => {
          this.band = band;
        });
    }

    clearChanges() {
        this.getBand();
        this.toggleEdit();
    }


    toggleEdit() {
        this.readOnly = !this.readOnly;
    }

    saveBand() {
        this.bandService.create(this.band)
            .subscribe(() => {
                this.readOnly = true;
            });
    }

    viewBandMember(member) {
        this.router.navigateByUrl('band-member/' + member.id);
    }

}
