import { HostItemList } from "./HostItemList";
import { ServiceEntity } from "./ServiceEntity";

/**
 * ServicePortEntity
 * @targetNSAlias `tns`
 * @targetNamespace `http://ejb.service.catalog.nms.allot.com`
 */
export interface ServicePortEntity {
    /** xsd:int */
    changeStatus?: string;
    /** xsd:int */
    id?: string;
    /** xsd:dateTime */
    lastChange?: string;
    /** xsd:string */
    name?: string;
    /** xsd:int */
    fromPort?: string;
    /** xsd:int */
    hostId?: string;
    /** hostItemList */
    hostItemList?: HostItemList;
    /** xsd:string */
    hostName?: string;
    /** xsd:int */
    hostType?: string;
    /** xsd:int */
    protocol?: string;
    /** serviceEntity */
    serviceEntity?: ServiceEntity;
    /** xsd:int */
    serviceId?: string;
    /** xsd:int */
    toPort?: string;
    /** xsd:int */
    type?: string;
}
