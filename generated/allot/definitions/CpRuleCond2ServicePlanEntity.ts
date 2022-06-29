import { ConditionEntity } from "./ConditionEntity";

/**
 * CPRuleCond2ServicePlanEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.chargingpolicy.policy.nms.allot.com`
 */
export interface CpRuleCond2ServicePlanEntity {
    /** conditionEntity */
    conditionEntity?: ConditionEntity;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    servicePlanId?: string;
}
