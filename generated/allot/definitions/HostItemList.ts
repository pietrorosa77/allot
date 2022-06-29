import { HostItemEntity } from "./HostItemEntity";

/**
 * hostItemList
 * @targetNSAlias `ns2`
 * @targetNamespace `http://ejb.host.catalog.nms.allot.com`
 */
export interface HostItemList {
    /** HostItemEntity[] */
    HostItemEntity?: Array<HostItemEntity>;
}
