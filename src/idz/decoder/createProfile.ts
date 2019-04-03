import iconv = require("iconv-lite");

import { RequestCode } from "../defs";
import { CreateProfileRequest } from "../request/createProfile";

createProfile.msgCode = 0x0066 as RequestCode;
createProfile.msgLen = 0x00c0;

export function createProfile(buf: Buffer): CreateProfileRequest {
  return {
    type: "create_profile_req",
    aimeId: buf.readInt32LE(0x0004),
    luid: buf.slice(0x0008, buf.indexOf("\0", 0x0008)).toString("ascii"),
    name: iconv.decode(
      buf.slice(0x001e, buf.indexOf("\0", 0x001e)),
      "shift_jis"
    ),
    field_0034: buf.readUInt32LE(0x0034),
    field_0040: buf.slice(0x0040, 0x0084),
    car_type: buf.readUInt16LE(0x0084),
    car_color: buf.readUInt16LE(0x0086),
    transmission: buf.readUInt16LE(0x0088) === 0 ? "auto" : "manual",
    field_008A: buf.readUInt16LE(0x008a),
    field_008C: buf.readUInt16LE(0x008c),
    field_0090:
      BigInt(buf.readUInt32LE(0x0090)) |
      (BigInt(buf.readUInt32LE(0x0094)) << 32n),
    field_009C: buf.readUInt16LE(0x009c),
    gender: buf.readUInt16LE(0x00a0) === 0 ? "male" : "female",
    field_00A2: buf.readUInt16LE(0x00a2),
    field_00A4: buf.readUInt16LE(0x00a4),
    field_00A6: buf.readUInt16LE(0x00a6),
    field_00A8: buf.readUInt16LE(0x00a8),
    field_00AA: buf.readUInt16LE(0x00aa),
    field_00AC: buf.readUInt16LE(0x00ac),
    field_00AE: buf.readUInt16LE(0x00ae),
    field_00B0: buf.readUInt16LE(0x00b0),
    field_00B2: buf.readUInt8(0x00b2),
  };
}