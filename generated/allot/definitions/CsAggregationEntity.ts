import { CsSystemEntity } from "./CsSystemEntity";

/**
 * CsAggregationEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsAggregationEntity {
    /** xsd:int */
    changeStatus?: string;
    /** csSystemEntity */
    csSystemEntity?: CsSystemEntity;
    /** xsd:int */
    delay?: string;
    /** xsd:int */
    delayDef?: string;
    /** xsd:int */
    delayMax?: string;
    /** xsd:int */
    delayMin?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    retention?: string;
    /** xsd:int */
    retentionDef?: string;
    /** xsd:int */
    retentionMax?: string;
    /** xsd:int */
    retentionMin?: string;
}
