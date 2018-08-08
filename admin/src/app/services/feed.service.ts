import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Feed} from "../models/feed.model";

@Injectable()
export class FeedService {

    constructor(private http: HttpClient) {}

    findByBandId(id) {
        return this.http.get<Feed[]>('api/band/feed/' + id);
    }

    findAll() {
        return this.http.get<Feed[]>('api/feed');
    }

    create(entity) {
        return this.http.post('api/feed', entity);
    }

    update(entity) {
        return this.http.put('api/feed', entity);
    }

    delete(id) {
        return this.http.delete('api/feed/' + id);
    }
}