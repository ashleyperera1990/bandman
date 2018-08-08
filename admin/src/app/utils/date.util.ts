import {Injectable} from "@angular/core";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class DateUtil {

    getTimeStructFromDate(date) {
        date = new Date(date);
        let struct: NgbTimeStruct = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        return struct;
    }



}