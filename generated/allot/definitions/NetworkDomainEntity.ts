import { AvailableControlPlaneIdentifierNames } from "./AvailableControlPlaneIdentifierNames";
import { ControlPlaneKeys } from "./ControlPlaneKeys";
import { RoutingMaps } from "./RoutingMaps";

/**
 * networkDomainEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface NetworkDomainEntity {
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
    /** availableControlPlaneIdentifierNames */
    availableControlPlaneIdentifierNames?: AvailableControlPlaneIdentifierNames;
    /** controlPlaneKeys */
    controlPlaneKeys?: ControlPlaneKeys;
    /** xsd:string */
    description?: string;
    /** routingMaps */
    routingMaps?: RoutingMaps;
}
