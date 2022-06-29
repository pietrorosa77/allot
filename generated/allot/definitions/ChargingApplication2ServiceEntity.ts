import { ChargingApplication } from "./ChargingApplication";

/**
 * ChargingApplication2ServiceEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.ca.charging.catalog.nms.allot.com`
 */
export interface ChargingApplication2ServiceEntity {
    /** xsd:int */
    changeStatus?: string;
    /** chargingApp */
    chargingApp?: ChargingApplication;
    /** xsd:int */
    groupId?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    serviceId?: string;
    /** xsd:int */
    tethering?: string;
}
