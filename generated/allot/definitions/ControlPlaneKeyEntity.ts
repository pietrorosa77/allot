import { NetworkDomainEntity } from "./NetworkDomainEntity";
import { Values } from "./Values";

/**
 * ControlPlaneKeyEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface ControlPlaneKeyEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    identifierNameID?: string;
    /** networkDomainEntity */
    networkDomainEntity?: NetworkDomainEntity;
    /** values */
    values?: Values;
}
