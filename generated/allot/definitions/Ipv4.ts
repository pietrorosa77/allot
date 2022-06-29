import { IpAsLong } from "./IpAsLong";

/**
 * ipv4
 * @targetNSAlias `ns1`
 * @targetNamespace `http://net.common.nms.allot.com`
 */
export interface Ipv4 {
    /** IPAddressType|xsd:string|IPV4,IPV6,IPV4_MAPPED_IPV6,UNKNOWN */
    IPAddressType?: string;
    /** xsd:integer */
    IPAsBigInteger?: string;
    /** xsd:base64Binary */
    IPAsByteArray?: string;
    /** xsd:int */
    IPAsInteger?: string;
    /** IPAsLong */
    IPAsLong?: IpAsLong;
    /** xsd:int */
    maskOrPrefixLength?: string;
}
