import { BoardDto } from "./BoardDto";

/**
 * boards
 * @targetNSAlias `ns1`
 * @targetNamespace `http://dto.device.configuration.nms.allot.com`
 */
export interface Boards {
    /** BoardDTO[] */
    BoardDTO?: Array<BoardDto>;
}
