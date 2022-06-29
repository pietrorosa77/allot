import { ChargingPolicyRule } from "./ChargingPolicyRule";
import { Return4 } from "./Return4";

/**
 * conditionEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface ConditionEntity {
    /** chargingPolicyRule */
    chargingPolicyRule?: ChargingPolicyRule;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** servicePlans */
    servicePlans?: Return4;
}
