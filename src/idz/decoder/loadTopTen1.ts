import { RequestCode } from "./_defs";
import { ExtId, RouteNo } from "../model/base";
import { Profile } from "../model/profile";
import { Team } from "../model/team";
import {
  LoadTopTenRequest,
  LoadTopTenRequestSelector,
} from "../request/loadTopTen";

loadTopTen1.msgCode = 0x00b5 as RequestCode;
loadTopTen1.msgLen = 0x00e0;

export function loadTopTen1(buf: Buffer): LoadTopTenRequest {
  const selectors = new Array<LoadTopTenRequestSelector>();

  for (let i = 0; i < 32; i++) {
    selectors.push({
      routeNo: (buf.readUInt16LE(0x0004 + 2 * i) >> 1) as RouteNo,
      field_44: buf.readUInt32LE(0x0044 + 4 * i),
    });
  }

  const profileId = buf.readUInt32LE(0x00c8);
  const teamId = buf.readUInt32LE(0x00cc);

  return {
    type: "load_top_ten_req",
    field_2: buf.readUInt16LE(0x0002), // Bitmask selector
    selectors,
    field_C4: buf.readUInt8(0x00c4), // Boolean, true if profile ID is set
    field_C5: buf.readUInt8(0x00c5), // Always zero
    field_C6: buf.readUInt16LE(0x00c6),
    profileId: profileId !== 0 ? (profileId as ExtId<Profile>) : undefined,
    teamId: teamId !== 0xffffffff ? (teamId as ExtId<Team>) : undefined,
  };
}