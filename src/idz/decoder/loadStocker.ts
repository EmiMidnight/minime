import { RequestCode } from "../defs";
import { LoadStockerRequest } from "../request/loadStocker";

loadStocker.msgCode = 0x00a7 as RequestCode;
loadStocker.msgLen = 0x0010;

export function loadStocker(buf: Buffer): LoadStockerRequest {
  return {
    type: "load_stocker_req",
    field_0004: buf.readUInt32LE(0x0004),
  };
}