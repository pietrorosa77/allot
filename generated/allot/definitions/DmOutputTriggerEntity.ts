import { DmOutputBucketEntity } from "./DmOutputBucketEntity";

/**
 * DmOutputTriggerEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputTriggerEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    description?: string;
    /** xsd:boolean */
    exportRecord?: string;
    /** xsd:int */
    index?: string;
    /** outputBucketEntity */
    outputBucketEntity?: DmOutputBucketEntity;
    /** xsd:boolean */
    resetPersistance?: string;
    /** TriggerTypeEnum|xsd:string|IMMEDIATE,DATA_DRIVEN,TIME_DRIVEN */
    triggerType?: string;
}
