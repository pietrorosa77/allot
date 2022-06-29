import { BucketRoleEntities } from "./BucketRoleEntities";
import { FilteringRuleEntities } from "./FilteringRuleEntities";
import { OutputBucketProfileEntities } from "./OutputBucketProfileEntities";
import { OutputFieldEntities } from "./OutputFieldEntities";
import { OutputKeyEntities } from "./OutputKeyEntities";
import { TriggerEntities } from "./TriggerEntities";
import { TriggerFullEntities } from "./TriggerFullEntities";

/**
 * dmOutputBucketEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputBucketEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** bucketRoleEntities */
    bucketRoleEntities?: BucketRoleEntities;
    /** xsd:boolean */
    bucketRoleEntitiesChanged?: string;
    /** xsd:boolean */
    crossUnits?: string;
    /** xsd:string */
    csvDelimiterCharacter?: string;
    /** xsd:boolean */
    csvQuotationsMarks?: string;
    /** xsd:string */
    description?: string;
    /** filteringRuleEntities */
    filteringRuleEntities?: FilteringRuleEntities;
    /** xsd:boolean */
    filteringRuleEntitiesChanged?: string;
    /** OutputFileFormatTypeEnum|xsd:string|CSV,BINARY */
    formatType?: string;
    /** outputBucketProfileEntities */
    outputBucketProfileEntities?: OutputBucketProfileEntities;
    /** xsd:boolean */
    outputBucketProfileEntitiesChanged?: string;
    /** outputFieldEntities */
    outputFieldEntities?: OutputFieldEntities;
    /** xsd:boolean */
    outputFieldEntitiesChanged?: string;
    /** outputKeyEntities */
    outputKeyEntities?: OutputKeyEntities;
    /** xsd:boolean */
    outputKeyEntitiesChanged?: string;
    /** triggerEntities */
    triggerEntities?: TriggerEntities;
    /** xsd:boolean */
    triggerEntitiesChanged?: string;
    /** triggerFullEntities */
    triggerFullEntities?: TriggerFullEntities;
    /** xsd:int */
    version?: string;
}
