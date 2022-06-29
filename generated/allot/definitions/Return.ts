import { CollectorDto } from "./CollectorDto";

/**
 * return
 * @targetNSAlias `ns2`
 * @targetNamespace `http://dto.management.collectors.nms.allot.com`
 */
export interface Return {
    /** CollectorDTO[] */
    CollectorDTO?: Array<CollectorDto>;
}
