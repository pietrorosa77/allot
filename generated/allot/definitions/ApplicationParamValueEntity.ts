import { ApplicationEntity } from "./ApplicationEntity";

/**
 * ApplicationParamValueEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.application.catalog.nms.allot.com`
 */
export interface ApplicationParamValueEntity {
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
    /** applicationEntity */
    applicationEntity?: ApplicationEntity;
    /** xsd:int */
    deviceType?: string;
    /** xsd:int */
    parameter?: string;
    /** xsd:int */
    protocolType?: string;
    /** xsd:string */
    value?: string;
}
