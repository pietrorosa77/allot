import { Rules } from "./Rules";

/**
 * chargingPolicy
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface ChargingPolicy {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    admin?: string;
    /** xsd:string */
    description?: string;
    /** rules */
    rules?: Rules;
    /** xsd:boolean */
    type?: string;
}
