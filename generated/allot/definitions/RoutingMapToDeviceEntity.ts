import { RoutingMapEntity } from "./RoutingMapEntity";

/**
 * RoutingMapToDeviceEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.domain.sms.nms.allot.com`
 */
export interface RoutingMapToDeviceEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    deviceId?: string;
    /** xsd:int */
    id?: string;
    /** routingMapEntity */
    routingMapEntity?: RoutingMapEntity;
}
