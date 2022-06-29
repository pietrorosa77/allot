import { EtlToExternalDms } from "./EtlToExternalDms";
import { RemoteNx } from "./RemoteNx";

/**
 * externalDm
 * @targetNSAlias `ns1`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface ExternalDm {
    /** etlsToExternalDm */
    etlsToExternalDm?: EtlToExternalDms;
    /** xsd:int */
    id?: string;
    /** xsd:string */
    name?: string;
    /** xsd:string */
    netaddr?: string;
    /** remoteNx */
    remoteNx?: RemoteNx;
}
