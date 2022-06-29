import { RuleDefinition } from "./RuleDefinition";

/**
 * RuleDefinitionToFilterEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.serviceplan.sms.nms.allot.com`
 */
export interface RuleDefinitionToFilterEntity {
    /** xsd:int */
    filterId?: string;
    /** xsd:int */
    id?: string;
    /** ruleDefinition */
    ruleDefinition?: RuleDefinition;
}
