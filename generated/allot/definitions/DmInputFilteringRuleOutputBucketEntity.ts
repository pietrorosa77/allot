import { ChildRuleEntities } from "./ChildRuleEntities";
import { ConditionEntities } from "./ConditionEntities";
import { DmInputFilteringRuleEntity } from "./DmInputFilteringRuleEntity";
import { DmOutputBucketEntity } from "./DmOutputBucketEntity";

/**
 * DmInputFilteringRuleOutputBucketEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmInputFilteringRuleOutputBucketEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** childRuleEntities */
    childRuleEntities?: ChildRuleEntities;
    /** xsd:boolean */
    childRuleEntitiesChanged?: string;
    /** conditionEntities */
    conditionEntities?: ConditionEntities;
    /** xsd:boolean */
    conditionEntitiesChanged?: string;
    /** xsd:string */
    discriminatorType?: string;
    /** InputFilteringOperationEnum|xsd:string|OR,AND,INCLUDE_ALL,EXCLUDE_ALL */
    operation?: string;
    /** parentFilteringRuleEntity */
    parentFilteringRuleEntity?: DmInputFilteringRuleEntity;
    /** dmOutputBucketEntity */
    dmOutputBucketEntity?: DmOutputBucketEntity;
}
