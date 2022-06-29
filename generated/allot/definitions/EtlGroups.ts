import { CsEtlGroupEntity } from "./CsEtlGroupEntity";

/**
 * etlGroups
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.clearsee.management.configuration.nms.allot.com`
 */
export interface EtlGroups {
    /** CsEtlGroupEntity[] */
    CsEtlGroupEntity?: Array<CsEtlGroupEntity>;
}
