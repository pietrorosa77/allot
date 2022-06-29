import { Action } from "./Action";
import { ChargingPolicy } from "./ChargingPolicy";
import { Conditions } from "./Conditions";

/**
 * chargingPolicyRule
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface ChargingPolicyRule {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** action */
    action?: Action;
    /** xsd:int */
    admin?: string;
    /** chargingPolicy */
    chargingPolicy?: ChargingPolicy;
    /** conditions */
    conditions?: Conditions;
    /** xsd:int */
    cost?: string;
    /** xsd:string */
    description?: string;
    /** xsd:boolean */
    fallback?: string;
}
