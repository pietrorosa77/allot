import { DmChargingAppEntity } from "./DmChargingAppEntity";

/**
 * chargingApps
 * @targetNSAlias `ns13`
 * @targetNamespace `http://ejb.datamediation.management.configuration.nms.allot.com`
 */
export interface ChargingApps {
    /** DmChargingAppEntity[] */
    DmChargingAppEntity?: Array<DmChargingAppEntity>;
}
