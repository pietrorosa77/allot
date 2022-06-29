import { ApplicationServicesList } from "./ApplicationServicesList";

/**
 * chargingApplication
 * @targetNSAlias `ns1`
 * @targetNamespace `http://ejb.ca.charging.catalog.nms.allot.com`
 */
export interface ChargingApplication {
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
    /** xsd:int */
    applicationId?: string;
    /** applicationServicesList */
    applicationServicesList?: ApplicationServicesList;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:int */
    offilineUnits?: string;
    /** xsd:long */
    precedence?: string;
}
