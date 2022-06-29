import { CsCollectorIds } from "./CsCollectorIds";
import { CsSystemEntity } from "./CsSystemEntity";
import { EtlToExternalDms } from "./EtlToExternalDms";

/**
 * CsEtlGroupEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface CsEtlGroupEntity {
    /** xsd:int */
    changeStatus?: string;
    /** csCollectorIds */
    csCollectorIds?: CsCollectorIds;
    /** csSystemEntity */
    csSystemEntity?: CsSystemEntity;
    /** etlToExternalDms */
    etlToExternalDms?: EtlToExternalDms;
    /** xsd:boolean */
    externalDmsEnabled?: string;
    /** xsd:boolean */
    externalDmsToggleChanged?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
}
