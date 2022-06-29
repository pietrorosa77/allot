import { Lags } from "./Lags";
import { Nics } from "./Nics";

/**
 * return
 * @targetNSAlias `ns0`
 * @targetNamespace `http://dto.management.configuration.nms.allot.com`
 */
export interface Return27 {
    /** lags */
    lags?: Lags;
    /** xsd:boolean */
    lagsChanged?: string;
    /** nics */
    nics?: Nics;
    /** xsd:boolean */
    nicsChanged?: string;
}
