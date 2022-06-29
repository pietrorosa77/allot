import { ChargingApplicationsList } from "./ChargingApplicationsList";

/**
 * chargingPlan
 * @targetNSAlias `ns1`
 * @targetNamespace `http://ejb.cp.charging.catalog.nms.allot.com`
 */
export interface ChargingPlan {
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
    /** chargingApplicationsList */
    chargingApplicationsList?: ChargingApplicationsList;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    localId?: string;
}
