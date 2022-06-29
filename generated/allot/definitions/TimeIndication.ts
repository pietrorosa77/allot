import { CsSystemEntity } from "./CsSystemEntity";

/**
 * timeIndication
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface TimeIndication {
    /** xsd:string */
    busyHoursActDate?: string;
    /** xsd:string */
    busyHoursWeekDays?: string;
    /** xsd:string */
    busyHoursWeekend?: string;
    /** xsd:int */
    changeStatus?: string;
    /** csSystemEntity */
    csSystemEntity?: CsSystemEntity;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    weekendActDate?: string;
    /** xsd:string */
    weekendDays?: string;
    /** xsd:string */
    workHours?: string;
    /** xsd:string */
    workHoursActDate?: string;
}
