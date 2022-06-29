import { Application2KeyEntities } from "./Application2KeyEntities";
import { ParamValuesEntities } from "./ParamValuesEntities";

/**
 * ApplicationEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.application.catalog.nms.allot.com`
 */
export interface ApplicationEntity {
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
    /** xsd:int */
    admin?: string;
    /** application2KeyEntities */
    application2KeyEntities?: Application2KeyEntities;
    /** xsd:string */
    description?: string;
    /** xsd:boolean */
    ip?: string;
    /** xsd:int */
    localId?: string;
    /** xsd:boolean */
    nonIp?: string;
    /** paramValuesEntities */
    paramValuesEntities?: ParamValuesEntities;
    /** xsd:boolean */
    tcp?: string;
    /** xsd:boolean */
    tcpIdentity?: string;
    /** xsd:int */
    type?: string;
    /** xsd:boolean */
    udp?: string;
    /** xsd:boolean */
    udpIdentity?: string;
}
