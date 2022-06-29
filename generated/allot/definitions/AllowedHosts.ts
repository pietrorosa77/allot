import { DeviceAccessListDto } from "./DeviceAccessListDto";

/**
 * allowedHosts
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface AllowedHosts {
    /** DeviceAccessListDTO[] */
    DeviceAccessListDTO?: Array<DeviceAccessListDto>;
}
