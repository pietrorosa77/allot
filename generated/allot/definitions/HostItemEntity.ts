import { HostEntity } from "./HostEntity";
import { Ipv4 } from "./Ipv4";

/**
 * HostItemEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.host.catalog.nms.allot.com`
 */
export interface HostItemEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** hostEntity */
    hostEntity?: HostEntity;
    /** xsd:int */
    hostId?: string;
    /** xsd:int */
    ip?: string;
    /** xsd:int */
    ipLast?: string;
    /** ipv4 */
    ipv4?: Ipv4;
    /** xsd:int */
    ipv4IntVal?: string;
    /** ipv4Last */
    ipv4Last?: Ipv4;
    /** xsd:int */
    ipv4LastIntVal?: string;
    /** xsd:long */
    ipv6High?: string;
    /** xsd:long */
    ipv6LastHigh?: string;
    /** xsd:long */
    ipv6LastLow?: string;
    /** xsd:long */
    ipv6Low?: string;
    /** ipv6Prefix */
    ipv6Prefix?: Ipv4;
    /** ipv6PrefixLast */
    ipv6PrefixLast?: Ipv4;
    /** xsd:int */
    ipv6PrefixLength?: string;
    /** xsd:int */
    mask?: string;
    /** xsd:string */
    netAddress?: string;
    /** xsd:int */
    type?: string;
}
