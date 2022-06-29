import { ChargingPlan } from "./ChargingPlan";

/**
 * action
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface Action {
    /** chargingPlan */
    chargingPlan?: ChargingPlan;
    /** xsd:int */
    chargingPlanID?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
}
