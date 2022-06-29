import { DmOutputBucketEntity } from "./DmOutputBucketEntity";

/**
 * DmOutputTriggerFullEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface DmOutputTriggerFullEntity {
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
    /** xsd:string */
    field?: string;
    /** TriggerOperatorEnum|xsd:string|EQU,NEQ,LSS,LEQ,GTR,GEQ,EXIST */
    operator?: string;
    /** TimeDrivenTypeEnum|xsd:string|ON_ROUND_TIME,ON_TIMEOUT */
    timeDrivenType?: string;
    /** xsd:int */
    timeout?: string;
    /** xsd:string */
    value?: string;
}
