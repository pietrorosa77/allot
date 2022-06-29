import { WorkServerParams } from "./WorkServerParams";

/**
 * arg0
 * @targetNSAlias `ns38`
 * @targetNamespace `http://dto.servers.configuration.nms.allot.com`
 */
export interface Arg024 {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    csId?: string;
    /** xsd:string */
    description?: string;
    /** xsd:int */
    id?: string;
    /** xsd:int */
    ip?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    netAddr?: string;
    /** xsd:string */
    netName?: string;
    /** xsd:int */
    oper?: string;
    /** xsd:int */
    type?: string;
    /** workServerParams */
    workServerParams?: WorkServerParams;
}
