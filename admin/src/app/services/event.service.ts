import {Injectable} from "@angular/core";
import {tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Event} from "../models/event.model";

@Injectable()
export class EventService {

    events: Event[];

    constructor(private http: HttpClient) {}

    findAll() {
        return this.http.get<Event[]>('api/events').pipe(tap( (events) => {
            this.events = events;
        }));
    }

    findById(id) {
        return this.http.get<Event>('api/events/' + id);
    }

    findByBandId(id) {
        return this.http.get<Event[]>('api/band/events/' + id);
    }

    create(entity) {
        return this.http.post('api/events', entity);
    }

    update(entity) {
        return this.http.put('api/events', entity);
    }

    delete(id) {
        return this.http.delete('api/events/' + id);
    }

}