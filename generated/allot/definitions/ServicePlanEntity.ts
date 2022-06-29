import { GxUsages1 } from "./GxUsages1";
import { PipeRuleDefinitions } from "./PipeRuleDefinitions";
import { PlanToRuleDefEntities } from "./PlanToRuleDefEntities";

/**
 * ServicePlanEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.serviceplan.sms.nms.allot.com`
 */
export interface ServicePlanEntity {
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
    /** xsd:string */
    description?: string;
    /** gxUsages */
    gxUsages?: GxUsages1;
    /** xsd:int */
    hostGroupId?: string;
    /** xsd:int */
    localId?: string;
    /** pipeRuleDefinitions */
    pipeRuleDefinitions?: PipeRuleDefinitions;
    /** planToRuleDefEntities */
    planToRuleDefEntities?: PlanToRuleDefEntities;
    /** ServicePlanType|xsd:string|TYPE_INVALID,TYPE_PIPE,TYPE_VC,TYPE_PIPE_WITH_MULT_VC,TYPE_MULT_PIPE_WITH_VC */
    type?: string;
}
