import { HostAllowedDto } from "./HostAllowedDto";

/**
 * allowedHostDTOList
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface AllowedHostDtoList {
    /** HostAllowedDTO[] */
    HostAllowedDTO?: Array<HostAllowedDto>;
}
