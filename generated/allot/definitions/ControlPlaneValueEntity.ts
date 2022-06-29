import { ControlPlaneKeyEntity } from "./ControlPlaneKeyEntity";

/**
 * ControlPlaneValueEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface ControlPlaneValueEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    accessRight?: string;
    /** controlPlaneKeyEntity */
    controlPlaneKeyEntity?: ControlPlaneKeyEntity;
    /** xsd:string */
    value?: string;
}
