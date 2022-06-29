import { CsEtlGroupEntity } from "./CsEtlGroupEntity";

/**
 * CsEtlGroup2CollectorEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsEtlGroup2CollectorEntity {
    /** xsd:int */
    collectorId?: string;
    /** csEtlGroupEntity */
    csEtlGroupEntity?: CsEtlGroupEntity;
    /** xsd:int */
    enableCollection?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:int */
    type?: string;
}
