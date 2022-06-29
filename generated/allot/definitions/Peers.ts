import { AsymPeerDto } from "./AsymPeerDto";

/**
 * peers
 * @targetNSAlias `tns`
 * @targetNamespace `http://dto.asymmetric.configuration.nms.allot.com`
 */
export interface Peers {
    /** AsymPeerDTO[] */
    AsymPeerDTO?: Array<AsymPeerDto>;
}
