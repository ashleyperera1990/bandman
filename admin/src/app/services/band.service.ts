import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Band} from "../models/band.model";
import {Observable} from "rxjs";

@Injectable()
export class BandService {

    currentBand: Band;

    constructor(private http: HttpClient){}

    findById(id): Observable<Band> {
        return this.http.get<Band>('api/band/2').pipe(tap (band => {
           this.currentBand = band;
        }));
    }

    getCurrentBand() {
        return this.currentBand;
    }

    getBand() {
        return this.findById(2);
    }

    setBand(band) {
        this.currentBand = band;
    }

    findAll() {
        return this.http.get<Band>('api/band').pipe(tap( (band) => {
           this.currentBand = band[0];
        }));
    }

    create(entity) {
        return this.http.post('api/band', entity);
    }

    update(entity) {
        return this.http.put('api/band', entity);
    }

    delete(id) {
        return this.http.delete('api/band/' + id);
    }


}