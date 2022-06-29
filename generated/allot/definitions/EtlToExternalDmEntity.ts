import { CsEtlGroupEntity } from "./CsEtlGroupEntity";
import { ExternalDm } from "./ExternalDm";

/**
 * ETLToExternalDMEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface EtlToExternalDmEntity {
    /** xsd:boolean */
    dataCollectionEnabled?: string;
    /** etlGroup */
    etlGroup?: CsEtlGroupEntity;
    /** externalDm */
    externalDm?: ExternalDm;
    /** xsd:int */
    id?: string;
}
