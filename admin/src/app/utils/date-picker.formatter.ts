import {NgbDateParserFormatter, NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {Injectable} from "@angular/core";
import {isNumber, padNumber, toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

@Injectable()
export class DatePickerFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split('/');
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return {year: toInteger(dateParts[0]), month: null, day: null};
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null};
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0])};
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        let stringDate: string = "";
        if (date) {
            stringDate += isNumber(date.day) ? padNumber(date.day) + "/" : "";
            stringDate += isNumber(date.month) ? padNumber(date.month) + "/" : "";
            stringDate += date.year;
        }
        return stringDate;
    }

    toDate(date: NgbDateStruct) {
        let string = this.format(date);
        return new Date(string);
    }

    toDateTime(date: NgbDateStruct, time: NgbTimeStruct) {
        let newDate = this.toDate(date);
        newDate.setHours(time.hour + 1);
        newDate.setMinutes(time.minute);
        return newDate;
    }
}