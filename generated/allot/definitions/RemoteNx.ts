import { ExternalDms } from "./ExternalDms";

/**
 * remoteNx
 * @targetNSAlias `ns4`
 * @targetNamespace `http://ejb.remotenx.configuration.nms.allot.com`
 */
export interface RemoteNx {
    /** xsd:int */
    changeStatus?: string;
    /** externalDms */
    externalDms?: ExternalDms;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:string */
    password?: string;
    /** xsd:int */
    ssl?: string;
    /** xsd:string */
    userName?: string;
}
