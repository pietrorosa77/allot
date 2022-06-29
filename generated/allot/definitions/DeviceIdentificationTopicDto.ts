import { Arg024 } from "./Arg024";
import { SmtpWorkServerDtoList } from "./SmtpWorkServerDtoList";

/**
 * deviceIdentificationTopicDTO
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface DeviceIdentificationTopicDto {
    /** primaryWorkServerDTO */
    primaryWorkServerDTO?: Arg024;
    /** xsd:boolean */
    primaryWorkServerDTOChanged?: string;
    /** xsd:boolean */
    secondaryWorkServerChanged?: string;
    /** secondaryWorkServerDTO */
    secondaryWorkServerDTO?: Arg024;
    /** xsd:boolean */
    tertiaryWorkServerChanged?: string;
    /** tertiaryWorkServerDTO */
    tertiaryWorkServerDTO?: Arg024;
    /** xsd:int */
    cocGateway?: string;
    /** xsd:boolean */
    cocGatewayChanged?: string;
    /** xsd:int */
    cocIpAddress?: string;
    /** xsd:boolean */
    cocIpAddressChanged?: string;
    /** xsd:int */
    cocNetworkMask?: string;
    /** xsd:boolean */
    cocNetworkMaskChanged?: string;
    /** xsd:int */
    directAccess?: string;
    /** xsd:boolean */
    directAccessChanged?: string;
    /** dnsWorkServerDTOList */
    dnsWorkServerDTOList?: SmtpWorkServerDtoList;
    /** xsd:boolean */
    dnsWorkServerDTOListChanged?: string;
    /** xsd:string */
    domainName?: string;
    /** xsd:boolean */
    domainNameChanged?: string;
    /** xsd:int */
    gateway?: string;
    /** xsd:boolean */
    gatewayChanged?: string;
    /** xsd:int */
    gatewayInband?: string;
    /** xsd:boolean */
    gatewayInbandChanged?: string;
    /** xsd:int */
    gatewayOB?: string;
    /** xsd:int */
    gatewayOutband?: string;
    /** xsd:boolean */
    gatewayOutbandChanged?: string;
    /** xsd:string */
    host?: string;
    /** xsd:boolean */
    hostChanged?: string;
    /** xsd:int */
    ipAddress?: string;
    /** xsd:boolean */
    ipAddressChanged?: string;
    /** xsd:int */
    ipAddressInband?: string;
    /** xsd:boolean */
    ipAddressInbandChanged?: string;
    /** xsd:int */
    ipAddressOutband?: string;
    /** xsd:boolean */
    ipAddressOutbandChanged?: string;
    /** xsd:int */
    managmentStatus?: string;
    /** xsd:boolean */
    managmentStatusChanged?: string;
    /** xsd:string */
    netAddressOutband?: string;
    /** xsd:boolean */
    netAddressOutbandChanged?: string;
    /** xsd:string */
    netGatewayOutband?: string;
    /** xsd:boolean */
    netGatewayOutbandChanged?: string;
    /** xsd:string */
    netMaskOutband?: string;
    /** xsd:boolean */
    netMaskOutbandChanged?: string;
    /** xsd:int */
    netVlanIdOutband?: string;
    /** xsd:boolean */
    netVlanIdOutbandChanged?: string;
    /** xsd:int */
    networkMask?: string;
    /** xsd:boolean */
    networkMaskChanged?: string;
    /** xsd:int */
    networkMaskInband?: string;
    /** xsd:boolean */
    networkMaskInbandChanged?: string;
    /** xsd:int */
    networkMaskOutband?: string;
    /** xsd:boolean */
    networkMaskOutbandChanged?: string;
    /** xsd:int */
    vlanId?: string;
    /** xsd:boolean */
    vlanIdChanged?: string;
    /** xsd:int */
    vlanIdInband?: string;
    /** xsd:boolean */
    vlanIdInbandChanged?: string;
    /** xsd:int */
    vlanIdOutband?: string;
    /** xsd:boolean */
    vlanIdOutbandChanged?: string;
}
