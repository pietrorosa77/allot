
/**
 * QuotaEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.quota.sms.nms.allot.com`
 */
export interface QuotaEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:decimal */
    bytesAll?: string;
    /** xsd:decimal */
    bytesIn?: string;
    /** xsd:decimal */
    bytesOut?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    duration?: string;
    /** xsd:int */
    numOfDays?: string;
    /** xsd:int */
    peakEndDay?: string;
    /** xsd:int */
    peakEndHour?: string;
    /** xsd:int */
    peakEndMinutes?: string;
    /** xsd:int */
    peakStartDay?: string;
    /** xsd:int */
    peakStartHour?: string;
    /** xsd:int */
    peakStartMinutes?: string;
    /** xsd:int */
    startsAt?: string;
    /** xsd:int */
    timeCatalogId?: string;
    /** xsd:int */
    timeLimit?: string;
    /** xsd:int */
    timeType?: string;
    /** xsd:int */
    type?: string;
}
